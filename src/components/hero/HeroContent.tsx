
import { ArrowRight, Star, CheckCircle, Stethoscope, Phone, Play, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import BlurText from '@/components/ui/blur-text';

const HeroContent = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Welcome Badge */}
      <div className="inline-block">
        <Badge className="bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 border-blue-200 px-6 py-3 text-sm font-medium backdrop-blur-sm rounded-full">
          <Stethoscope className="w-4 h-4 mr-2" />
          Advanced Medical Procedures
        </Badge>
      </div>

      {/* Main Headline with BlurText */}
      <div className="space-y-6">
        <BlurText 
          text="Precision hair restoration with expert care."
          className="text-5xl lg:text-7xl font-bold font-heading leading-tight"
          delay={100}
          animateBy="words"
        />
        
        <BlurText 
          text="Experience advanced hair transplantation and restoration procedures performed by certified specialists using state-of-the-art technology for natural, lasting results."
          className="text-lg lg:text-xl text-gray-600 max-w-2xl leading-relaxed"
          delay={150}
          animateBy="words"
        />
      </div>

      {/* CTA Buttons - Matching Website Style */}
      <div className="flex flex-col sm:flex-row gap-4 pt-6">
        <Button className="btn-primary">
          Book Consultation
          <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
        </Button>
        
        <Button className="btn-outline">
          <Play className="mr-2 group-hover:scale-110 transition-transform" size={20} />
          View Procedures
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
          <span className="text-xs text-gray-500">(1,200+ procedures)</span>
        </div>

        <div className="flex items-center gap-2 text-gray-600">
          <Award className="w-5 h-5" />
          <span className="text-sm font-medium">Certified medical specialists</span>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
