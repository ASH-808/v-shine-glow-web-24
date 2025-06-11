
import { useState } from 'react';
import { Menu, X, Phone, MapPin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { handleNavClick } from '@/utils/smoothScroll';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Treatments', href: '#treatments' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  const contactInfo = {
    phone: '+91 95358 68666',
    email: 'info@vshineglow.com',
    address: 'Bangalore, Karnataka, India'
  };

  const handleLinkClick = (href: string) => {
    handleNavClick(href);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/079eb2a2-0ffc-4124-b5a3-c4f71eeacd31.png" 
              alt="V-Shine Logo" 
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => handleLinkClick(item.href)}
                className="text-vshine-teal hover:text-vshine-coral transition-colors duration-300 font-medium"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Contact Info & CTA - Desktop */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-4 text-sm">
              <a href={`tel:${contactInfo.phone}`} className="flex items-center space-x-2 text-vshine-teal hover:text-vshine-coral transition-colors">
                <Phone size={16} />
                <span className="font-medium">{contactInfo.phone}</span>
              </a>
              <a href={`mailto:${contactInfo.email}`} className="flex items-center space-x-2 text-vshine-teal hover:text-vshine-coral transition-colors">
                <Mail size={16} />
                <span className="font-medium">{contactInfo.email}</span>
              </a>
            </div>
            <Button className="btn-primary">
              Book Consultation
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-vshine-teal hover:text-vshine-coral p-2 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-vshine-beige shadow-lg">
            <div className="px-4 py-6 space-y-6">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleLinkClick(item.href)}
                  className="block w-full text-left text-vshine-teal hover:text-vshine-coral transition-colors duration-300 font-medium py-2 text-lg"
                >
                  {item.name}
                </button>
              ))}
              
              <div className="pt-4 border-t border-vshine-beige space-y-4">
                <div className="space-y-3">
                  <a href={`tel:${contactInfo.phone}`} className="flex items-center space-x-3 text-vshine-teal hover:text-vshine-coral transition-colors">
                    <Phone size={18} />
                    <span className="font-medium">{contactInfo.phone}</span>
                  </a>
                  <a href={`mailto:${contactInfo.email}`} className="flex items-center space-x-3 text-vshine-teal hover:text-vshine-coral transition-colors">
                    <Mail size={18} />
                    <span className="font-medium">{contactInfo.email}</span>
                  </a>
                  <div className="flex items-center space-x-3 text-vshine-teal">
                    <MapPin size={18} />
                    <span className="font-medium">{contactInfo.address}</span>
                  </div>
                </div>
                
                <Button className="btn-primary w-full text-lg py-3">
                  Book Consultation
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
