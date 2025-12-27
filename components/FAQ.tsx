
import React from 'react';
import { HelpCircle } from 'lucide-react';

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => (
  <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
    <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-start gap-3">
      <HelpCircle className="w-5 h-5 text-brand-600 mt-0.5 flex-shrink-0" />
      {question}
    </h3>
    <p className="text-slate-600 text-sm md:text-base leading-relaxed pl-8">
      {answer}
    </p>
  </div>
);

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "Does it work if the part is extremely dirty or damaged?",
      answer: "Yes. Our model is trained on real-world industrial datasets, not just clean CAD files. It recognizes parts by shape and geometry, not just surface labels or text."
    },
    {
      question: "What documentation systems do you support?",
      answer: "We can ingest standard files (PDFs, Word, Images) and connect to common knowledge bases and document stores. We'll confirm your specific tech stack during the onboarding process."
    },
    {
      question: "Does it answer from the internet?",
      answer: "No—responses are grounded strictly in your approved documentation and private knowledge base. This ensures accuracy and adherence to your specific procedures."
    },
    {
      question: "Can we deploy on-prem or in a private cloud?",
      answer: "Yes. Depending on your security requirements, we offer flexible deployment options for controlled, high-security environments."
    },
    {
      question: "Can the answers follow our repair standards and wording?",
      answer: "Yes. We can enforce your SOP style (tools list, safety steps, torque values, checklists) so answers stay consistent with your brand's technical voice."
    },
    {
      question: "Is my data secure? Do you train on my manuals?",
      answer: "Your data is completely isolated. We index your manuals to serve you answers, but your proprietary trade secrets are never used to train global models or shared with other clients."
    }
  ];

  return (
    <section id="faq" className="py-32 bg-slate-50 border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">Frequently Asked Questions</h2>
          <p className="text-xl text-slate-600">Everything you need to know about implementing xOpsentia.</p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
