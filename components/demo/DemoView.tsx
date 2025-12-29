
import React, { useState, useRef, useEffect } from 'react';
import { 
  Plus, 
  Mic, 
  ArrowUp, 
  X, 
  ChevronLeft,
  MicOff,
  ExternalLink
} from 'lucide-react';

interface ImageMatch {
  page_url: string;
  original_image_url: string;
  converted_image_url: string;
  sas_url: string;
  accuracy: number;
  file_name: string;
}

interface Message {
  id: string;
  role: 'user' | 'model';
  content: string;
  image?: string;
  matches?: ImageMatch[];
}

const API_BASE_URL = "https://api.xopsentia.com";

// SAS URL cache
const sasUrlCache: { [key: string]: string } = {};

// Function to fetch SAS URL for a blob
const fetchSasUrl = async (blobName: string): Promise<string> => {
  if (sasUrlCache[blobName]) {
    return sasUrlCache[blobName];
  }
  try {
    const response = await fetch(`${API_BASE_URL}/api/sas/${encodeURIComponent(blobName)}`, {
      method: 'GET',
      headers: { 'accept': 'application/json' }
    });
    if (response.ok) {
      const data = await response.json();
      const sasUrl = data.sas_url || data.url || data;
      sasUrlCache[blobName] = sasUrl;
      return sasUrl;
    }
  } catch (e) {
    console.error('Error fetching SAS URL:', e);
  }
  return '';
};

const dataURLtoBlob = (dataUrl: string): Blob | null => {
  const matches = dataUrl.match(/^data:(.+);base64,(.+)$/);
  if (!matches || matches.length !== 3) {
    return null;
  }
  const mimeType = matches[1];
  const base64Data = matches[2];
  const byteCharacters = atob(base64Data);
  const byteNumbers = new Array(byteCharacters.length);
  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }
  const byteArray = new Uint8Array(byteNumbers);
  return new Blob([byteArray], { type: mimeType });
};

// Simple markdown renderer component
const MarkdownRenderer: React.FC<{ content: string; onLinkClick?: (url: string) => void }> = ({ content, onLinkClick }) => {
  const renderMarkdown = (text: string) => {
    const lines = text.split('\n');
    const elements: React.ReactNode[] = [];
    let listItems: string[] = [];
    let inList = false;

    const processInlineMarkdown = (line: string, key: string): React.ReactNode => {
      const parts: React.ReactNode[] = [];
      let lastIndex = 0;
      const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
      let match;

      while ((match = linkRegex.exec(line)) !== null) {
        if (match.index > lastIndex) {
          parts.push(processTextFormatting(line.slice(lastIndex, match.index), `${key}-text-${lastIndex}`));
        }
        const linkText = match[1];
        const linkUrl = match[2];
        parts.push(
          <a
            key={`${key}-link-${match.index}`}
            href={linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              if (onLinkClick) {
                e.preventDefault();
                onLinkClick(linkUrl);
              }
            }}
            className="text-brand-400 hover:text-brand-300 underline underline-offset-2 inline-flex items-center gap-1"
          >
            {linkText}
            <ExternalLink size={12} />
          </a>
        );
        lastIndex = match.index + match[0].length;
      }

      if (lastIndex < line.length) {
        parts.push(processTextFormatting(line.slice(lastIndex), `${key}-text-end`));
      }

      return parts.length > 0 ? parts : processTextFormatting(line, key);
    };

    const processTextFormatting = (text: string, key: string): React.ReactNode => {
      const elements: React.ReactNode[] = [];
      let lastIndex = 0;
      const boldRegex = /\*\*([^*]+)\*\*/g;
      let match;
      
      while ((match = boldRegex.exec(text)) !== null) {
        if (match.index > lastIndex) {
          elements.push(<span key={`${key}-${lastIndex}`}>{text.slice(lastIndex, match.index)}</span>);
        }
        elements.push(<strong key={`${key}-bold-${match.index}`} className="font-bold text-white">{match[1]}</strong>);
        lastIndex = match.index + match[0].length;
      }

      if (elements.length > 0) {
        if (lastIndex < text.length) {
          elements.push(<span key={`${key}-end`}>{text.slice(lastIndex)}</span>);
        }
        return <>{elements}</>;
      }

      return text;
    };

    const flushList = () => {
      if (listItems.length > 0) {
        elements.push(
          <ul key={`list-${elements.length}`} className="list-disc list-inside space-y-1 my-2 text-[#ccc]">
            {listItems.map((item, i) => (
              <li key={i} className="leading-relaxed">{processInlineMarkdown(item, `li-${elements.length}-${i}`)}</li>
            ))}
          </ul>
        );
        listItems = [];
      }
      inList = false;
    };

    lines.forEach((line, index) => {
      const trimmedLine = line.trim();

      if (trimmedLine.startsWith('### ')) {
        flushList();
        elements.push(
          <h3 key={index} className="text-base font-bold text-white mt-4 mb-2">
            {processInlineMarkdown(trimmedLine.slice(4), `h3-${index}`)}
          </h3>
        );
      } else if (trimmedLine.startsWith('## ')) {
        flushList();
        elements.push(
          <h2 key={index} className="text-lg font-bold text-white mt-4 mb-2">
            {processInlineMarkdown(trimmedLine.slice(3), `h2-${index}`)}
          </h2>
        );
      } else if (trimmedLine.startsWith('# ')) {
        flushList();
        elements.push(
          <h1 key={index} className="text-xl font-bold text-white mt-4 mb-2">
            {processInlineMarkdown(trimmedLine.slice(2), `h1-${index}`)}
          </h1>
        );
      } else if (trimmedLine.startsWith('- ') || trimmedLine.startsWith('* ')) {
        inList = true;
        listItems.push(trimmedLine.slice(2));
      } else if (/^\d+\.\s/.test(trimmedLine)) {
        inList = true;
        listItems.push(trimmedLine.replace(/^\d+\.\s/, ''));
      } else if (trimmedLine === '') {
        flushList();
        elements.push(<div key={index} className="h-2" />);
      } else {
        flushList();
        elements.push(
          <p key={index} className="leading-relaxed text-[#e3e3e3] my-1">
            {processInlineMarkdown(trimmedLine, `p-${index}`)}
          </p>
        );
      }
    });

    flushList();
    return elements;
  };

  return <div className="prose prose-invert max-w-none">{renderMarkdown(content)}</div>;
};

interface DemoViewProps {
  onClose: () => void;
}

const DemoView: React.FC<DemoViewProps> = ({ onClose }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [image, setImage] = useState<string | null>(null);
  const [isTyping, setIsTyping] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<any>(null);

  // Handle clicking on source links to fetch SAS URL
  const handleSourceClick = async (url: string) => {
    const blobMatch = url.match(/blob\.core\.windows\.net\/[^/]+\/(.+)/);
    if (blobMatch) {
      const blobName = decodeURIComponent(blobMatch[1]);
      const sasUrl = await fetchSasUrl(blobName);
      if (sasUrl) {
        window.open(sasUrl, '_blank');
        return;
      }
    }
    window.open(url, '_blank');
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  useEffect(() => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (SpeechRecognition) {
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      recognitionRef.current.lang = 'en-US';

      recognitionRef.current.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setInput(prev => prev + (prev ? ' ' : '') + transcript);
        setIsListening(false);
      };
      recognitionRef.current.onerror = () => setIsListening(false);
      recognitionRef.current.onend = () => setIsListening(false);
    }
  }, []);

  const toggleListening = () => {
    if (isListening) {
      recognitionRef.current?.stop();
    } else {
      setError(null);
      try {
        recognitionRef.current?.start();
        setIsListening(true);
      } catch (e) {
        console.error("Speech recognition failed", e);
      }
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setError(null);
      const reader = new FileReader();
      reader.onload = (ev) => setImage(ev.target?.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleSend = async () => {
    const isFirstMessage = messages.length === 0;
    if (isFirstMessage && !image) {
      setError("An image is mandatory for the first message.");
      return;
    }
    if (!input.trim() && !image) return;

    setError(null);
    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      image: image || undefined
    };

    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    
    const currentInput = input;
    const currentImage = image;
    setInput('');
    setImage(null);
    setIsTyping(true);

    const modelMsgId = (Date.now() + 1).toString();
    const initialModelMsg: Message = {
      id: modelMsgId,
      role: 'model',
      content: '',
      matches: []
    };
    
    setMessages(prev => [...prev, initialModelMsg]);

    try {
      const formData = new FormData();
      
      const conversation = newMessages.map(msg => ({
        role: msg.role === 'model' ? 'assistant' : 'user',
        content: msg.content
      }));

      if (currentImage) {
        const blob = dataURLtoBlob(currentImage);
        if (blob) {
          formData.append('file', blob, 'image.jpg');
        }
      }

      const requestPayload = {
        conversation: conversation,
        stream: true
      };
      formData.append('request', JSON.stringify(requestPayload));

      const response = await fetch(`${API_BASE_URL}/api/chat/stream`, {
        method: 'POST',
        headers: {
          'accept': 'application/json'
        },
        body: formData
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.status}. Check if the server at ${API_BASE_URL} is running.`);
      }

      const reader = response.body?.getReader();
      if (!reader) throw new Error('No response body');

      const decoder = new TextDecoder();
      let buffer = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split('\n');
        buffer = lines.pop() || '';

        for (const line of lines) {
          if (line.startsWith('data: ')) {
            const jsonStr = line.slice(6).trim();
            if (!jsonStr) continue;
            try {
              const data = JSON.parse(jsonStr);
              if (data.type === 'content' && data.content) {
                setMessages(prev => prev.map(m => 
                  m.id === modelMsgId ? { ...m, content: m.content + data.content } : m
                ));
              } else if (data.type === 'image_matches' && data.matches) {
                setMessages(prev => prev.map(m => 
                  m.id === modelMsgId ? { ...m, matches: data.matches } : m
                ));
              }
            } catch (e) {
              console.error('Error parsing SSE data:', e);
            }
          }
        }
      }
    } catch (err) {
      console.error("Fetch error:", err);
      const errorMsg = "Failed to connect to the analysis engine. Please verify that the inspection server is reachable.";
      setMessages(prev => prev.map(m => 
        m.id === modelMsgId ? { ...m, content: errorMsg } : m
      ));
      setError("Network connectivity issue. The inspection server could not be reached.");
    } finally {
      setIsTyping(false);
    }
  };

  const isSendDisabled = (messages.length === 0 && !image) || (!input.trim() && !image);

  return (
    <div className="flex h-screen bg-[#111111] text-[#e3e3e3] font-sans selection:bg-brand-500/30 overflow-hidden">
      {/* Left Sidebar */}
      <aside className="w-64 border-r border-white/5 bg-[#0a0a0a] flex flex-col shrink-0">
        <div className="p-3">
          <button 
            onClick={() => { setMessages([]); setImage(null); setInput(''); setError(null); }}
            className="w-full flex items-center gap-2 px-4 py-3 bg-white/5 hover:bg-white/10 rounded-lg text-sm font-medium transition-all border border-white/10"
          >
            <Plus className="w-4 h-4" />
            New chat
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-3">
          <div className="text-[11px] font-medium text-[#666] uppercase tracking-wider px-2 py-2">Your chats</div>
          {/* Chat history would go here */}
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col relative min-w-0">
        
        {/* Header */}
        <header className="h-14 flex items-center px-6 border-b border-white/5 bg-[#111111] shrink-0 z-30">
          <div className="flex items-center gap-4">
            <button onClick={onClose} className="p-2 -ml-2 hover:bg-white/5 rounded-full transition-colors group">
                <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
            </button>
            <span className="font-bold text-base tracking-tight text-white">Icarus</span>
          </div>
        </header>

        {/* Content Area with scrollbar on right */}
        <div className="flex-1 overflow-hidden relative">
          <div ref={scrollRef} className="h-full overflow-y-auto px-4 md:px-8 pb-48 pt-6 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/10 hover:scrollbar-thumb-white/20">
            <div className="max-w-3xl mx-auto space-y-6">
            {messages.length === 0 ? (
              <div className="h-[60vh] flex flex-col items-center justify-center text-center space-y-6 animate-fade-in-up px-4">
                <div className="w-16 h-16 bg-brand-600 rounded-full flex items-center justify-center shadow-2xl">
                  <span className="text-white font-bold text-xl">AI</span>
                </div>
                <div className="space-y-3">
                  <h2 className="text-2xl font-bold text-white">How can I help you today?</h2>
                  <p className="text-[#888] text-sm leading-relaxed max-w-md">
                    Upload an image to start inspection and analysis.
                  </p>
                </div>
                {error && (
                  <div className="px-4 py-2 bg-rose-500/10 border border-rose-500/20 rounded-lg text-rose-400 text-sm font-medium">
                    {error}
                  </div>
                )}
              </div>
            ) : (
              messages.map((msg) => (
                <div key={msg.id} className="animate-fade-in-up">
                  {msg.role === 'user' ? (
                    <div className="flex flex-col items-start gap-3 mb-4">
                      {msg.image && (
                        <div className="w-full max-w-sm rounded-xl overflow-hidden shadow-lg border border-white/10 bg-black">
                          <img src={msg.image} className="w-full h-auto object-contain max-h-48" alt="User capture" />
                        </div>
                      )}
                      {msg.content && (
                        <div className="text-base font-medium text-white px-1 leading-relaxed break-words w-full">
                          {msg.content}
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="flex gap-3 mt-4">
                      <div className="shrink-0 mt-0.5">
                        <div className="w-8 h-8 rounded-full bg-brand-600 flex items-center justify-center">
                          <span className="text-white font-bold text-xs">AI</span>
                        </div>
                      </div>
                      <div className="flex-1 min-w-0 space-y-3">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-white text-sm">Icarus</span>
                          {msg.matches && msg.matches.length > 0 && (
                            <span className="text-xs text-[#888]">Matching Images ({msg.matches.length})</span>
                          )}
                        </div>

                        {/* Knowledge Base Matches - Grid Layout */}
                        {msg.matches && msg.matches.length > 0 && (
                          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-4">
                            {msg.matches.map((match, index) => (
                              <div 
                                key={index} 
                                className="group relative aspect-square rounded-lg overflow-hidden border border-white/10 hover:border-brand-500/50 transition-all cursor-pointer bg-[#1a1a1a]"
                                onClick={() => window.open(match.page_url, '_blank')}
                              >
                                <img 
                                  src={match.original_image_url || match.sas_url} 
                                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" 
                                  alt={match.file_name}
                                  onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    // Try sas_url as fallback
                                    if (target.src !== match.sas_url && match.sas_url) {
                                      target.src = match.sas_url;
                                    } else {
                                      target.onerror = null;
                                      target.style.display = 'none';
                                    }
                                  }}
                                />
                                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-2">
                                  <div className="text-[10px] text-white/90 font-medium truncate">{match.file_name}</div>
                                  <div className="text-[10px] text-emerald-400 font-semibold">{match.accuracy.toFixed(1)}% match</div>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Markdown rendered content */}
                        {msg.content ? (
                          <MarkdownRenderer content={msg.content} onLinkClick={handleSourceClick} />
                        ) : (
                          isTyping && msg === messages[messages.length-1] && (
                            <span className="text-[#888]">Processing...</span>
                          )
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ))
            )}
            {isTyping && messages.length > 0 && !messages[messages.length-1].content && (
              <div className="flex gap-3 mt-4">
                <div className="w-8 h-8 rounded-full bg-brand-600 flex items-center justify-center animate-pulse">
                  <span className="text-white font-bold text-xs">AI</span>
                </div>
                <div className="pt-2">
                   <div className="flex gap-1 items-center">
                      <div className="w-2 h-2 bg-brand-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                      <div className="w-2 h-2 bg-brand-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                      <div className="w-2 h-2 bg-brand-500 rounded-full animate-bounce"></div>
                   </div>
                </div>
              </div>
            )}
            </div>
          </div>

          {/* Persistent Control Bar */}
          <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center bg-gradient-to-t from-[#111] via-[#111]/95 to-transparent p-4 pointer-events-none z-40">
            <div className="w-full max-w-3xl pointer-events-auto">
              <div className="relative">
                {image && (
                  <div className="absolute -top-16 left-2 p-2 bg-[#1a1a1a] rounded-lg border border-white/10 flex items-center gap-2 shadow-lg">
                    <div className="w-10 h-10 rounded overflow-hidden border border-white/10 bg-black">
                      <img src={image} className="w-full h-full object-cover" />
                    </div>
                    <button onClick={() => setImage(null)} className="p-1 hover:bg-white/10 rounded transition-colors">
                      <X size={14} className="text-[#888]" />
                    </button>
                  </div>
                )}
                
                <div className={`flex items-center gap-2 bg-[#1a1a1a] rounded-full px-4 py-2 border transition-all ${isListening ? 'border-rose-500/50' : 'border-white/10 focus-within:border-white/20'}`}>
                  <button 
                    onClick={() => fileInputRef.current?.click()}
                    title="Upload Image"
                    className="p-2 rounded-full transition-all shrink-0 text-[#888] hover:text-white hover:bg-white/5"
                  >
                    <Plus size={20} />
                  </button>
                  <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" accept="image/*" />
                  
                  <input 
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && (e.preventDefault(), handleSend())}
                    placeholder="Ask anything"
                    className="flex-1 bg-transparent border-none outline-none py-2 text-[#e3e3e3] text-sm placeholder:text-[#666]"
                  />

                  <div className="flex items-center gap-1">
                     <button 
                        onClick={toggleListening}
                        className={`p-2 rounded-full transition-all shrink-0 ${isListening ? 'bg-rose-500 text-white' : 'text-[#888] hover:text-white hover:bg-white/5'}`}
                     >
                       {isListening ? <MicOff size={18} /> : <Mic size={18} />}
                     </button>
                     <button 
                      onClick={handleSend}
                      disabled={isSendDisabled}
                      className={`p-2 rounded-full transition-all shrink-0 ${isSendDisabled ? 'bg-white/5 text-[#555]' : 'bg-white text-black'}`}
                     >
                       <ArrowUp size={18} strokeWidth={2.5} />
                     </button>
                  </div>
                </div>
              </div>
              <div className="mt-2 text-center">
                 <span className="text-[10px] text-[#555]">
                    Icarus can make mistakes. Check important info.
                 </span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DemoView;
