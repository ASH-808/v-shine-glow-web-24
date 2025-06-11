
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-vshine-dark-teal text-white py-12">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <img 
              src="/lovable-uploads/079eb2a2-0ffc-4124-b5a3-c4f71eeacd31.png" 
              alt="V-Shine Logo" 
              className="h-12 w-auto"
            />
            <p className="text-vshine-beige leading-relaxed">
              Premium hair transplant and skincare solutions with 100% patient comfort 
              and guaranteed results. Serving all individuals with equal care and dedication.
            </p>
            <div className="text-sm text-gray-400">
              <p>www.vshine.org.in</p>
              <p>Established 2021</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2 text-vshine-beige">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#treatments" className="hover:text-white transition-colors">Treatments</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Gallery</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Our Services</h3>
            <ul className="space-y-2 text-vshine-beige text-sm">
              <li>FUE Hair Transplant</li>
              <li>FUT Hair Transplant</li>
              <li>PRP Therapy</li>
              <li>Skin Rejuvenation</li>
              <li>Laser Treatment</li>
              <li>Beard & Eyebrow Transplant</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-vshine-teal pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-vshine-beige text-sm mb-4 md:mb-0">
            © 2024 V-Shine Hair Transplant & Skincare. All rights reserved.
          </p>
          <div className="flex items-center space-x-2 text-sm text-vshine-beige">
            <span>Made with</span>
            <Heart className="text-vshine-coral fill-current" size={16} />
            <span>for your transformation</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
