
import { ArrowRight, Star, Shield, Users, Play, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-gradient-to-br from-vshine-light-beige via-white to-vshine-beige/50">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-72 h-72 bg-vshine-coral/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-vshine-teal/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-vshine-coral/5 to-vshine-teal/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 items-center min-h-screen py-20">
          {/* Content - 7 columns */}
          <div className="lg:col-span-7 space-y-8 animate-fade-in">
            {/* Trust Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-vshine-beige/50">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-vshine-teal">Trusted by 1000+ Patients</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-6">
              <h1 className="text-6xl lg:text-8xl font-bold font-heading leading-tight">
                <span className="text-vshine-teal">Where</span>
                <br />
                <span className="relative">
                  <span className="text-gradient bg-gradient-to-r from-vshine-coral via-vshine-teal to-vshine-coral bg-clip-text text-transparent">
                    Confidence
                  </span>
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-vshine-coral to-vshine-teal rounded-full transform scale-x-0 animate-[scale-x_1s_ease-out_0.5s_forwards] origin-left"></div>
                </span>
                <br />
                <span className="text-vshine-teal">Grows Again</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-600 max-w-2xl leading-relaxed font-light">
                Experience India's most advanced hair transplant and skincare treatments with 
                <span className="font-semibold text-vshine-teal"> 100% comfort</span> and 
                <span className="font-semibold text-vshine-coral"> guaranteed results</span>.
              </p>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-6 py-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-vshine-teal">10+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-vshine-coral">1000+</div>
                <div className="text-sm text-gray-600">Happy Patients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-vshine-teal">100%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="bg-vshine-teal hover:bg-vshine-dark-teal text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 group">
                Book Free Consultation
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
              
              <Button className="border-2 border-vshine-coral text-vshine-coral hover:bg-vshine-coral hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 group bg-white/80 backdrop-blur-sm">
                <Play className="mr-2 group-hover:scale-110 transition-transform" size={20} />
                Watch Results
              </Button>
            </div>

            {/* Features List */}
            <div className="grid sm:grid-cols-2 gap-3 pt-6">
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                <span className="text-gray-700">Advanced FUE Technology</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                <span className="text-gray-700">Painless Procedures</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                <span className="text-gray-700">Natural Looking Results</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                <span className="text-gray-700">Expert Medical Team</span>
              </div>
            </div>
          </div>

          {/* Visual Content - 5 columns */}
          <div className="lg:col-span-5 relative">
            {/* Main Image Container */}
            <div className="relative">
              {/* Floating Card 1 */}
              <div className="absolute -top-4 -left-4 bg-white rounded-2xl shadow-2xl p-4 animate-float z-10 border border-vshine-beige/50">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-vshine-coral to-pink-400 rounded-full flex items-center justify-center">
                    <Star className="text-white fill-current" size={20} />
                  </div>
                  <div>
                    <div className="font-bold text-vshine-teal">5.0 Rating</div>
                    <div className="text-sm text-gray-600">1000+ Reviews</div>
                  </div>
                </div>
              </div>

              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <img 
                  src="/lovable-uploads/c944beab-4dc9-4c20-ab24-66041a8ed45d.png" 
                  alt="V-Shine Hair Transplant Results" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-vshine-teal/20 via-transparent to-transparent"></div>
              </div>

              {/* Floating Card 2 */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-2xl p-4 animate-float delay-500 z-10 border border-vshine-beige/50">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-vshine-teal to-blue-500 rounded-full flex items-center justify-center">
                    <Shield className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="font-bold text-vshine-teal">100% Safe</div>
                    <div className="text-sm text-gray-600">Certified Clinic</div>
                  </div>
                </div>
              </div>

              {/* Floating Card 3 */}
              <div className="absolute top-1/2 -right-8 bg-vshine-coral text-white rounded-2xl shadow-2xl p-4 animate-float delay-1000 z-10">
                <div className="text-center">
                  <div className="text-2xl font-bold">24/7</div>
                  <div className="text-sm opacity-90">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modern Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center space-y-2 animate-bounce">
          <span className="text-sm text-vshine-teal font-medium">Discover More</span>
          <div className="w-6 h-10 border-2 border-vshine-teal rounded-full flex justify-center">
            <div className="w-1 h-3 bg-vshine-teal rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-1 h-32 bg-gradient-to-b from-vshine-coral to-vshine-teal opacity-50"></div>
      <div className="absolute bottom-1/4 left-0 w-1 h-32 bg-gradient-to-b from-vshine-teal to-vshine-coral opacity-50"></div>
    </section>
  );
};

export default Hero;
