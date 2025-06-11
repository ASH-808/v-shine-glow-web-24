
import { Award, Shield, Clock, Users, Star, MessageCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const HeroFloatingBadges = () => {
  return (
    <>
      {/* Meet with our doctor card */}
      <Card className="absolute -top-6 -left-6 bg-white text-gray-700 p-4 animate-float z-10 shadow-xl rounded-2xl border border-gray-200 max-w-xs">
        <CardContent className="p-0">
          <div className="text-sm font-semibold mb-3">Meet with our doctor</div>
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              <Avatar className="w-8 h-8 border-2 border-white">
                <AvatarImage src="/api/placeholder/32/32" />
                <AvatarFallback className="bg-green-100 text-green-600 text-xs">Dr</AvatarFallback>
              </Avatar>
              <Avatar className="w-8 h-8 border-2 border-white">
                <AvatarImage src="/api/placeholder/32/32" />
                <AvatarFallback className="bg-blue-100 text-blue-600 text-xs">MD</AvatarFallback>
              </Avatar>
              <Avatar className="w-8 h-8 border-2 border-white">
                <AvatarImage src="/api/placeholder/32/32" />
                <AvatarFallback className="bg-purple-100 text-purple-600 text-xs">RN</AvatarFallback>
              </Avatar>
              <div className="w-8 h-8 bg-blue-500 rounded-full border-2 border-white flex items-center justify-center">
                <span className="text-white text-xs font-bold">+</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Review Card */}
      <Card className="absolute -bottom-4 -right-4 bg-white text-gray-700 p-4 animate-float delay-500 z-10 shadow-xl rounded-2xl border border-gray-200 max-w-sm">
        <CardContent className="p-0">
          <div className="flex items-start gap-3">
            <MessageCircle className="text-blue-500 mt-1" size={20} />
            <div>
              <div className="font-semibold text-sm mb-1">Review: New best review</div>
              <div className="text-xs text-gray-500 mb-2">30 min ago</div>
              <div className="flex items-center gap-2">
                <Avatar className="w-6 h-6">
                  <AvatarImage src="/api/placeholder/24/24" />
                  <AvatarFallback className="bg-gray-100 text-gray-600 text-xs">AJ</AvatarFallback>
                </Avatar>
                <div>
                  <div className="text-xs font-medium">Alexe Jordan</div>
                  <div className="text-xs text-gray-500">Critic</div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Support Badge */}
      <Card className="absolute top-1/2 -right-8 bg-gradient-to-r from-green-400 to-green-500 text-white p-4 animate-float delay-1000 z-10 shadow-xl transform rotate-3 rounded-2xl">
        <CardContent className="p-0 text-center">
          <Shield className="w-6 h-6 mx-auto mb-2" />
          <div className="text-sm font-bold">24/7</div>
          <div className="text-xs opacity-90">Support</div>
        </CardContent>
      </Card>
    </>
  );
};

export default HeroFloatingBadges;
