
import { ArrowRight, Star, CheckCircle, Sparkles, Phone, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const HeroContent = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Trust Indicators */}
      <div className="flex flex-wrap items-center gap-4 mb-6">
        <Badge className="bg-gradient-to-r from-green-50 to-green-100 text-green-700 border-green-200 px-4 py-2 text-sm font-medium backdrop-blur-sm">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></div>
          Trusted by 1000+ Patients
        </Badge>
        
        <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-vshine-beige/50">
          <div className="flex">
            {[1,2,3,4,5].map((star) => (
              <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <span className="text-sm font-semibold text-vshine-teal ml-1">5.0</span>
          <span className="text-xs text-gray-600">(1000+ reviews)</span>
        </div>

        <Badge className="bg-gradient-to-r from-vshine-coral to-pink-500 text-white px-4 py-2 text-sm font-medium">
          <Sparkles className="w-4 h-4 mr-2" />
          Live Procedure
        </Badge>
      </div>

      {/* Main Headline */}
      <div className="space-y-6">
        <h1 className="text-6xl lg:text-8xl font-bold font-heading leading-tight">
          <span className="text-vshine-teal">Where</span>
          <br />
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-vshine-coral via-pink-500 to-red-400 bg-clip-text text-transparent animate-pulse">
              Confidence
            </span>
            <div className="absolute -bottom-3 left-0 w-full h-2 bg-gradient-to-r from-vshine-coral to-pink-500 rounded-full transform scale-x-0 animate-[scale-x_1.5s_ease-out_0.8s_forwards] origin-left"></div>
          </span>
          <br />
          <span className="relative text-vshine-teal">
            Grows Again
            <div className="absolute -bottom-2 left-0 w-24 h-1 bg-vshine-teal rounded-full transform scale-x-0 animate-[scale-x_1s_ease-out_1.5s_forwards] origin-left"></div>
          </span>
        </h1>
        
        <p className="text-xl lg:text-2xl text-gray-700 max-w-3xl leading-relaxed backdrop-blur-sm bg-white/30 p-6 rounded-2xl border border-white/20">
          Experience India's most advanced hair transplant and skincare treatments with 
          <span className="font-bold text-vshine-teal"> 100% comfort</span> and 
          <span className="font-bold text-vshine-coral"> guaranteed results</span>.
        </p>
      </div>

      {/* Enhanced CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-6 pt-6">
        <Button className="bg-gradient-to-r from-vshine-teal to-vshine-dark-teal hover:from-vshine-dark-teal hover:to-vshine-teal text-white px-10 py-6 rounded-full text-xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 group transform hover:scale-105">
          <Phone className="mr-3 group-hover:animate-bounce" size={24} />
          Book Free Consultation
          <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" size={24} />
        </Button>
        
        <Button className="border-3 border-vshine-coral text-vshine-coral hover:bg-gradient-to-r hover:from-vshine-coral hover:to-pink-500 hover:text-white px-10 py-6 rounded-full text-xl font-bold transition-all duration-300 group bg-white/90 backdrop-blur-sm transform hover:scale-105 shadow-xl">
          <Play className="mr-3 group-hover:scale-125 transition-transform" size={24} />
          See Amazing Results
        </Button>
      </div>

      {/* Enhanced Features List */}
      <div className="grid sm:grid-cols-2 gap-4 pt-8">
        {[
          "Advanced FUE Technology",
          "100% Painless Procedures", 
          "Natural Looking Results",
          "Expert Medical Team"
        ].map((feature, index) => (
          <div key={index} className="flex items-center space-x-4 group bg-white/60 backdrop-blur-sm p-4 rounded-xl hover:bg-white/80 transition-all duration-300">
            <CheckCircle className="text-green-500 flex-shrink-0 group-hover:scale-125 transition-transform" size={24} />
            <span className="text-gray-700 font-medium text-lg">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroContent;
