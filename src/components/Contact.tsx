import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Linkedin, Github } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  useEffect(() => {
    emailjs.init('uSqxCCC9avDJlSHWk'); // Replace with your public key
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
    };

    try {
      await emailjs.send('service_paukjvw', 'template_vxls4hb', templateParams);
      setSubmitMessage('✅ Message sent successfully!');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitMessage('❌ Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitMessage(''), 5000);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-dark-light/50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 section-heading inline-block">Get In Touch</h2>
          <p className="text-gray-400 text-lg">Have a project in mind? Let's work together!</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <div className="glass-card rounded-lg p-6 md:p-8 h-full">
              <h3 className="text-2xl font-bold mb-6 gradient-text">Contact Info</h3>
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <Mail className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-300 mb-1">Email</h4>
                    <a href="mailto:sufi11729@gmail.com" className="text-gray-400 hover:text-neon transition-colors">sufi11729@gmail.com</a>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                    <Linkedin className="text-secondary" size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-300 mb-1">LinkedIn</h4>
                    <a href="https://www.linkedin.com/in/sufiyan2k1/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-neon transition-colors">
                      linkedin.com/in/sufiyan2k1
                    </a>
                  </div>
                </div>

                {/* GitHub */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-neon/20 flex items-center justify-center">
                    <Github className="text-neon" size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-300 mb-1">GitHub</h4>
                    <a href="https://github.com/Sufi111729" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-neon transition-colors">
                      github.com/Sufi111729
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <div className="glass-card rounded-lg p-6 md:p-8">
              <h3 className="text-2xl font-bold mb-6 gradient-text">Send Me a Message</h3>
              <form onSubmit={handleSubmit}>
                {/* Name */}
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full bg-dark-light/50 border border-gray-700 rounded-lg px-4 py-3 text-white" placeholder="Your name" />
                </div>

                {/* Email */}
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full bg-dark-light/50 border border-gray-700 rounded-lg px-4 py-3 text-white" placeholder="Your email" />
                </div>

                {/* Phone */}
                <div className="mb-4">
                  <label htmlFor="phone" className="block text-gray-300 mb-2">Phone</label>
                  <input type="text" id="phone" name="phone" value={formData.phone} onChange={handleChange} required className="w-full bg-dark-light/50 border border-gray-700 rounded-lg px-4 py-3 text-white" placeholder="Your phone number" />
                </div>

                {/* Subject */}
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-gray-300 mb-2">Subject</label>
                  <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required className="w-full bg-dark-light/50 border border-gray-700 rounded-lg px-4 py-3 text-white" placeholder="Subject" />
                </div>

                {/* Message */}
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} className="w-full bg-dark-light/50 border border-gray-700 rounded-lg px-4 py-3 text-white resize-none" placeholder="Your message" />
                </div>

                {/* Submit Button */}
                <button type="submit" disabled={isSubmitting} className={`w-full py-3 rounded-lg flex items-center justify-center ${isSubmitting ? 'bg-primary/70' : 'bg-primary hover:bg-primary/90'}`}>
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5 0 0 5 0 12h4z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2" size={16} />
                    </>
                  )}
                </button>

                {/* Message Feedback */}
                {submitMessage && (
                  <p className={`mt-4 text-center ${submitMessage.includes('❌') ? 'text-red-500' : 'text-green-500'}`}>
                    {submitMessage}
                  </p>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
