
import { ArrowRight, Star, Shield, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-vshine-light-beige via-white to-vshine-beige">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold font-heading text-vshine-teal leading-tight">
                Where Confidence 
                <span className="text-gradient block">Grows Again</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-lg leading-relaxed">
                India's most trusted center for advanced hair transplant and skincare treatments. 
                Experience premium care with 100% patient comfort and guaranteed results.
              </p>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center space-x-2 bg-white/80 px-4 py-2 rounded-full shadow-sm">
                <Star className="text-vshine-coral fill-current" size={20} />
                <span className="font-medium text-vshine-teal">100% Success Rate</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/80 px-4 py-2 rounded-full shadow-sm">
                <Shield className="text-vshine-coral" size={20} />
                <span className="font-medium text-vshine-teal">10+ Years Experience</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/80 px-4 py-2 rounded-full shadow-sm">
                <Users className="text-vshine-coral" size={20} />
                <span className="font-medium text-vshine-teal">1000+ Happy Patients</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-primary group">
                Book Free Consultation
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
              <Button className="btn-outline">
                See Before-After
              </Button>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src="/lovable-uploads/c944beab-4dc9-4c20-ab24-66041a8ed45d.png" 
                alt="V-Shine Hair Transplant Results" 
                className="w-full h-auto rounded-2xl shadow-2xl animate-float"
              />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-vshine-coral/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-vshine-teal/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-vshine-teal rounded-full flex justify-center">
          <div className="w-1 h-3 bg-vshine-teal rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
