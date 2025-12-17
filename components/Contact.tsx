
import React, { useState } from 'react';
import { SOCIAL_LINKS, PERSONAL_INFO } from '../constants';
import { Linkedin, Github, Mail, Send, MapPin, CheckCircle, Loader2, FileText, Download } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Linkedin': return <Linkedin size={20} />;
      case 'Github': return <Github size={20} />;
      case 'Mail': return <Mail size={20} />;
      default: return <Mail size={20} />;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Construct the email content
    const subject = encodeURIComponent(`Portfolio Message from ${formState.name}`);
    const body = encodeURIComponent(
      `Name: ${formState.name}\n` +
      `Email: ${formState.email}\n\n` +
      `Message:\n${formState.message}`
    );

    // Use window.location.href to reliably trigger the default mail client (Outlook, Mail, etc.)
    const mailtoLink = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
    
    // Reset UI state
    setIsSubmitting(false);
    setIsSent(true);
    setFormState({ name: '', email: '', message: '' });
      
    // Reset success message after 5 seconds
    setTimeout(() => setIsSent(false), 5000);
  };

  // Gmail URL for direct linking with pre-filled Recipient
  const gmailUrl = "https://mail.google.com/mail/?view=cm&fs=1&to=susansusie04@gmail.com";

  return (
    <footer id="contact" className="pt-20 pb-10 border-t border-slate-200 dark:border-slate-900/50 backdrop-blur-sm bg-slate-50 dark:bg-slate-950/80 scroll-mt-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 mb-20">
          
          {/* Left Column: Contact Info */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">Contact Information</h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 leading-relaxed">
              I am currently open to opportunities in Full-Stack Development and Data Engineering. 
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="space-y-6">
              {/* Email - Updated to link to Gmail */}
              <div className="flex items-start gap-4">
                <a 
                  href={gmailUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white dark:bg-slate-900/50 rounded-lg text-blue-600 dark:text-blue-500 border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none hover:scale-105 transition-transform cursor-pointer"
                  aria-label="Send email via Gmail"
                >
                  <Mail size={24} />
                </a>
                <div>
                  <h4 className="text-slate-900 dark:text-white font-semibold">Email</h4>
                  <a 
                    href={gmailUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white dark:bg-slate-900/50 rounded-lg text-blue-600 dark:text-blue-500 border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-slate-900 dark:text-white font-semibold">Location</h4>
                  <p className="text-slate-600 dark:text-slate-400">
                    {PERSONAL_INFO.location}
                  </p>
                </div>
              </div>

              {/* Resume Download */}
              <div className="flex items-start gap-4">
                <a 
                   href="https://capeitinitiative.sharepoint.com/sites/FNBAcademy2025JHB_dp1y4b/Shared%20Documents/General/Personal%20branding/Mmapula%20Phasha/Mmapula%20Phasha%20CV%20(2).pdf?CT=1765954146505&OR=ItemsView&wdOrigin=TEAMSFILE.FILEBROWSER.DOCUMENTLIBRARY"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="p-3 bg-white dark:bg-slate-900/50 rounded-lg text-blue-600 dark:text-blue-500 border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none hover:scale-105 transition-transform"
                   aria-label="Download Resume"
                >
                  <FileText size={24} />
                </a>
                <div>
                  <h4 className="text-slate-900 dark:text-white font-semibold">Resume</h4>
                  <a 
                    href="https://capeitinitiative.sharepoint.com/sites/FNBAcademy2025JHB_dp1y4b/Shared%20Documents/General/Personal%20branding/Mmapula%20Phasha/Mmapula%20Phasha%20CV%20(2).pdf?CT=1765954146505&OR=ItemsView&wdOrigin=TEAMSFILE.FILEBROWSER.DOCUMENTLIBRARY" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-2 group mt-1"
                  >
                    View / Download CV <Download size={16} className="group-hover:translate-y-1 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-8 border-t border-slate-200 dark:border-slate-800 mt-8">
                <h4 className="text-slate-900 dark:text-white font-semibold mb-4">Connect</h4>
                <div className="flex flex-wrap gap-4">
                  {SOCIAL_LINKS.map((link) => {
                    return (
                      <a
                        key={link.platform}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white dark:bg-slate-900/50 p-3 rounded-lg text-slate-500 dark:text-slate-400 hover:text-white hover:bg-blue-600 dark:hover:bg-blue-600 hover:scale-110 transition-all duration-300 border border-slate-200 dark:border-slate-800 hover:border-transparent hover:shadow-lg hover:shadow-blue-600/20 active:scale-95 cursor-pointer"
                        aria-label={link.platform}
                      >
                        {getIcon(link.icon)}
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-white dark:bg-slate-900/40 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 backdrop-blur-md shadow-xl">
            {isSent ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-8 animate-in fade-in zoom-in duration-300">
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="text-green-500 w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Message Ready!</h3>
                <p className="text-slate-600 dark:text-slate-400">Your email client should have opened with the message.</p>
                <button 
                  onClick={() => setIsSent(false)}
                  className="mt-6 text-blue-600 dark:text-blue-400 hover:text-blue-500 font-medium"
                >
                  Write another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="w-full bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 rounded-lg px-4 py-3 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                    className="w-full bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 rounded-lg px-4 py-3 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Your message here..."
                    className="w-full bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 rounded-lg px-4 py-3 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3.5 rounded-lg transition-all duration-300 shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 hover:-translate-y-1 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="animate-spin" size={20} />
                      Opening Mail App...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-900 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500 dark:text-slate-600">
          <p>© {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
             <span>Built with React & Tailwind</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
