
import { ArrowRight, Sparkles } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const HeroTreatmentCard = () => {
  return (
    <Card className="bg-white/95 backdrop-blur-lg shadow-2xl border-white/30 overflow-hidden transform hover:scale-105 transition-all duration-500 rounded-3xl">
      <CardContent className="p-8">
        <div className="text-center mb-6">
          <Badge className="bg-gradient-to-r from-vshine-coral to-pink-500 text-white px-4 py-2 text-lg font-bold">
            <Sparkles className="w-5 h-5 mr-2" />
            Live Treatment
          </Badge>
        </div>
        
        {/* Clinical Images Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="relative rounded-2xl overflow-hidden group">
            <img 
              src="/lovable-uploads/5643f008-75a9-4859-9c26-efb1acea922d.png" 
              alt="PRP Hair Treatment Process" 
              className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-vshine-teal/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
          <div className="relative rounded-2xl overflow-hidden group">
            <img 
              src="/lovable-uploads/623bf74b-52a1-4e76-92d8-94d7911b56b2.png" 
              alt="Hair Transplant Procedure" 
              className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-vshine-coral/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
        </div>

        {/* Treatment Tools */}
        <div className="mb-6">
          <img 
            src="/lovable-uploads/7bc41ca2-7c70-4b19-8bb3-079826e84f2a.png" 
            alt="Advanced Hair Transplant Tools" 
            className="w-full h-24 object-cover rounded-2xl"
          />
        </div>

        {/* Before/After Preview */}
        <div className="flex items-center justify-center space-x-6">
          <div className="text-center">
            <Avatar className="w-16 h-16 mx-auto mb-3 border-3 border-gray-300 shadow-lg">
              <AvatarFallback className="bg-gray-200 text-gray-600 text-lg font-bold">Before</AvatarFallback>
            </Avatar>
            <span className="text-sm text-gray-600 font-medium">Before</span>
          </div>
          
          <div className="flex items-center">
            <ArrowRight className="text-vshine-coral animate-pulse" size={28} />
          </div>
          
          <div className="text-center">
            <Avatar className="w-16 h-16 mx-auto mb-3 border-3 border-vshine-coral relative shadow-lg">
              <AvatarFallback className="bg-gradient-to-r from-vshine-coral to-pink-500 text-white text-lg font-bold">After</AvatarFallback>
              <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-yellow-400 animate-bounce" />
            </Avatar>
            <span className="text-sm text-vshine-coral font-bold">Amazing!</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default HeroTreatmentCard;
