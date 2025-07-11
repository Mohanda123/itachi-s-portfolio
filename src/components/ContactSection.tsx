import { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, CheckCircle, AlertCircle } from 'lucide-react';

const ContactSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const animatedElements = entry.target.querySelectorAll('.scroll-animate');
            animatedElements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('in-view');
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const { name, email, subject, message } = formData;
    
    if (!name.trim()) return 'Name is required';
    if (!email.trim()) return 'Email is required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return 'Please enter a valid email';
    if (!subject.trim()) return 'Subject is required';
    if (!message.trim()) return 'Message is required';
    if (message.trim().length < 10) return 'Message must be at least 10 characters';
    
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const validationError = validateForm();
    if (validationError) {
      alert(validationError);
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setFormStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setFormStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setFormStatus('idle'), 5000);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'mohanmanivannan123@gmail.com',
      href: 'mailto:mohanmanivannan123@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '9597256330',
      href: 'tel:9597256330'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'chennai, Tamil Nadu',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/mohanDA123',
      color: 'hover:text-foreground'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/mohan-m-644494-24a7',
      color: 'hover:text-blue-400'
    },
    {
      icon: Twitter,
      label: 'Twitter',
      href: 'https://twitter.com/mohan',
      color: 'hover:text-blue-400'
    }
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-inter">
              Get In <span className="text-primary">Touch</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Ready to bring your ideas to life? Let's discuss how we can work together to create 
              something amazing that honors tradition while embracing innovation.
            </p>
            <div className="w-24 h-1 bg-gradient-primary mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="scroll-animate">
              <div className="bg-gradient-card p-8 rounded-lg border border-border h-full">
                <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
                
                {/* Contact Details */}
                <div className="space-y-6 mb-8">
                  {contactInfo.map((item) => (
                    <div key={item.label} className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mr-4">
                        <item.icon className="text-primary-foreground" size={20} />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{item.label}</p>
                        <a 
                          href={item.href}
                          className="text-foreground hover:text-primary transition-fast"
                        >
                          {item.value}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social Links */}
                <div>
                  <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
                  <div className="flex space-x-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-12 h-12 bg-secondary rounded-lg flex items-center justify-center transition-smooth ${social.color} hover-glow`}
                        aria-label={social.label}
                      >
                        <social.icon size={20} />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Tamil Quote */}
                <div className="mt-8 p-4 bg-muted/30 rounded-lg border-l-4 border-primary">
                  <p className="font-tamil text-primary mb-1">
                    "தொடர்பு கொள்வோம்"
                  </p>
                  <p className="text-sm text-muted-foreground">
                    "Let's connect"
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="scroll-animate">
              <form onSubmit={handleSubmit} className="bg-gradient-card p-8 rounded-lg border border-border h-full">
                <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
                
                {formStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg flex items-center text-green-400">
                    <CheckCircle size={20} className="mr-2" />
                    Thank you! Your message has been sent successfully.
                  </div>
                )}

                {formStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center text-red-400">
                    <AlertCircle size={20} className="mr-2" />
                    Sorry, there was an error sending your message. Please try again.
                  </div>
                )}

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:border-primary focus:ring-1 focus:ring-primary transition-fast text-foreground"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:border-primary focus:ring-1 focus:ring-primary transition-fast text-foreground"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:border-primary focus:ring-1 focus:ring-primary transition-fast text-foreground"
                    placeholder="Project discussion, collaboration, etc."
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:border-primary focus:ring-1 focus:ring-primary transition-fast text-foreground resize-none"
                    placeholder="Tell me about your project or how we can work together..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-primary text-primary-foreground py-3 rounded-lg font-medium hover-glow transition-smooth flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-primary-foreground"></div>
                  ) : (
                    <>
                      <Send size={20} className="mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;