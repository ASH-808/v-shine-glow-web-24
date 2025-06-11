
import { Phone, Mail, MapPin, Clock, Instagram, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-vshine-teal to-vshine-dark-teal text-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Get In Touch
              </h2>
              <p className="text-vshine-beige text-lg leading-relaxed">
                Ready to start your transformation journey? Contact us for a free consultation 
                and personalized treatment plan.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-vshine-coral p-3 rounded-lg">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Call Us</h3>
                  <a href="tel:+919535868666" className="text-vshine-beige hover:text-white transition-colors">
                    +91 95358 68666
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-vshine-coral p-3 rounded-lg">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Email</h3>
                  <a href="mailto:info@vshine.org.in" className="text-vshine-beige hover:text-white transition-colors">
                    info@vshine.org.in
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-vshine-coral p-3 rounded-lg">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Visit Our Clinic</h3>
                  <p className="text-vshine-beige">
                    Premium Hair & Skin Care Center<br />
                    India
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-vshine-coral p-3 rounded-lg">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Clinic Hours</h3>
                  <p className="text-vshine-beige">
                    Mon - Sat: 9:00 AM - 7:00 PM<br />
                    Sunday: By Appointment
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="space-y-4">
              <h3 className="font-bold text-lg">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="bg-vshine-coral p-3 rounded-lg hover:bg-red-400 transition-colors">
                  <Instagram size={24} />
                </a>
                <a href="#" className="bg-vshine-coral p-3 rounded-lg hover:bg-red-400 transition-colors">
                  <Youtube size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold mb-6 text-center">Book Your Free Consultation</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">First Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:border-vshine-coral"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Last Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:border-vshine-coral"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:border-vshine-coral"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Treatment Interest</label>
                <select className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-vshine-coral">
                  <option value="">Select a treatment</option>
                  <option value="hair-transplant">Hair Transplant</option>
                  <option value="prp">PRP Therapy</option>
                  <option value="skin-treatment">Skin Treatment</option>
                  <option value="consultation">General Consultation</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:border-vshine-coral resize-none"
                  placeholder="Tell us about your concerns..."
                ></textarea>
              </div>

              <Button className="btn-secondary w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
