
import { ArrowRight, Star, CheckCircle, Sparkles, Phone, Play, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const HeroContent = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Welcome Badge */}
      <div className="inline-block">
        <Badge className="bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 border-blue-200 px-6 py-3 text-sm font-medium backdrop-blur-sm rounded-full">
          <Sparkles className="w-4 h-4 mr-2" />
          Welcome to healthcare
        </Badge>
      </div>

      {/* Main Headline */}
      <div className="space-y-6">
        <h1 className="text-5xl lg:text-7xl font-bold font-heading leading-tight">
          <span className="text-gray-900">Consumer health</span>
          <br />
          <span className="text-gray-900">marketing that</span>
          <br />
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-vshine-coral via-pink-500 to-red-400 bg-clip-text text-transparent">
              changes lives.
            </span>
            <div className="absolute -bottom-3 left-0 w-full h-2 bg-gradient-to-r from-vshine-coral to-pink-500 rounded-full transform scale-x-0 animate-[scale-x_1.5s_ease-out_0.8s_forwards] origin-left"></div>
          </span>
        </h1>
        
        <p className="text-lg lg:text-xl text-gray-600 max-w-2xl leading-relaxed">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking.
        </p>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 pt-6">
        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group transform hover:scale-105">
          Start Free Trial
          <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
        </Button>
        
        <Button className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 group bg-white transform hover:scale-105 shadow-md hover:shadow-lg">
          <Play className="mr-2 group-hover:scale-110 transition-transform" size={20} />
          Watch The Demo
        </Button>
      </div>

      {/* Trust Indicators */}
      <div className="flex flex-wrap items-center gap-6 pt-8">
        <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-md border border-gray-200">
          <div className="flex">
            {[1,2,3,4,5].map((star) => (
              <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <span className="text-sm font-semibold text-gray-700 ml-1">4.9</span>
          <span className="text-xs text-gray-500">(2,847 reviews)</span>
        </div>

        <div className="flex items-center gap-2 text-gray-600">
          <Users className="w-5 h-5" />
          <span className="text-sm font-medium">Trusted by 10,000+ healthcare professionals</span>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
