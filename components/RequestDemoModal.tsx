
import React, { useState } from 'react';
import { X, CheckCircle, Loader2 } from 'lucide-react';

interface RequestDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RequestDemoModal: React.FC<RequestDemoModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    designation: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // REPLACE THIS URL WITH YOUR GOOGLE APPS SCRIPT WEB APP URL
  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycby5QPgnr_AKwQo8frAIf--_9CFVy5xhluFkH0c9CGEGaOteeZhflIhPsTuCyhTyDG2r/exec';

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // We use text/plain to avoid CORS preflight checks (OPTIONS request) 
      // which Google Apps Script handles poorly in some browser contexts.
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(formData),
      });

      // Assuming success if request completes without network error
      setIsSubmitting(false);
      setIsSuccess(true);
      
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
        setFormData({ name: '', company: '', designation: '', email: '' });
      }, 2000);

    } catch (error) {
      console.error("Error submitting form", error);
      alert("There was an error submitting your request. Please try again.");
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      ></div>
      
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-fade-in-up">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="p-12 text-center flex flex-col items-center justify-center h-full min-h-[400px]">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
              <CheckCircle className="w-8 h-8 text-emerald-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Request Sent!</h3>
            <p className="text-slate-600">We'll be in touch shortly to schedule your demo.</p>
          </div>
        ) : (
          <div className="p-8">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Request a Demo</h3>
              <p className="text-slate-600 text-sm">See how xOpsentia can transform your maintenance operations.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1">Company Name</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
                  placeholder="Acme Industries"
                />
              </div>

              <div>
                <label htmlFor="designation" className="block text-sm font-medium text-slate-700 mb-1">Designation</label>
                <input
                  type="text"
                  id="designation"
                  name="designation"
                  required
                  value={formData.designation}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
                  placeholder="Maintenance Manager"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Work Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
                  placeholder="john@company.com"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-brand-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-brand-700 transition-colors shadow-lg shadow-brand-500/30 flex items-center justify-center mt-6 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  'Submit'
                )}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default RequestDemoModal;
