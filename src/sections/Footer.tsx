import { useEffect, useRef, useState } from 'react';
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About Us', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
  { name: 'Blog', href: '#blog' },
  { name: 'Contact', href: '#contact' },
];

const serviceLinks = [
  { name: 'Roof Installation', href: '#services' },
  { name: 'Roof Repairs', href: '#services' },
  { name: 'Roof Inspections', href: '#services' },
  { name: 'Gutter Services', href: '#services' },
  { name: 'Emergency Repairs', href: '#services' },
];

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
];

const Footer = () => {
  const footerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for subscribing!');
    setEmail('');
  };

  return (
    <footer
      ref={footerRef}
      className="bg-[#1a1a1a] text-white relative overflow-hidden"
    >
      {/* Top Border */}
      <div className="h-1 bg-[#004aad]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
            {/* Logo */}
            <a href="#home" className="flex items-center gap-2 mb-6">
              <img
                src="/logo.png"
                alt="Niche Roofing"
                className="h-40 md:h-48 w-auto brightness-0 invert"
              />
            </a>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Conisbrough's trusted roofing service. Quality craftsmanship, Open · Closes 5 pm. 4.6 ★ rated with 9 reviews.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#004aad] hover:text-black transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className={`transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
            <h4 className="text-lg font-bold mb-6 font-['Oswald']">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#004aad] transition-colors duration-300 text-sm inline-flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
            <h4 className="text-lg font-bold mb-6 font-['Oswald']">Our Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#004aad] transition-colors duration-300 text-sm inline-flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
            <h4 className="text-lg font-bold mb-6 font-['Oswald']">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#004aad] flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  110 Daylands Ave<br />
                  Conisbrough, Doncaster DN12 2NR
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#004aad] flex-shrink-0" />
                <a href="tel:07776334884" className="text-gray-400 text-sm hover:text-[#004aad] transition-colors">
                  07776 334884
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#004aad] flex-shrink-0" />
                <a href="mailto:info@djmroofingltd.co.uk" className="text-gray-400 text-sm hover:text-[#004aad] transition-colors">
                  info@djmroofingltd.co.uk
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#004aad] flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  Open<br />
                  Closes 5 pm
                </span>
              </li>
            </ul>

            {/* Newsletter */}
            <div className="mt-6">
              <h5 className="text-sm font-semibold mb-3">Subscribe to our newsletter</h5>
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#004aad] transition-colors"
                  required
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#004aad] text-white rounded-lg hover:bg-[#00337a] transition-colors"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={`mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
          <p className="text-gray-500 text-sm">
            © 2024 Niche Roofing. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-[#004aad] text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-[#004aad] text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
