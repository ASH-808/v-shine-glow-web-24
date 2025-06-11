
import { Award, Shield, Clock, Users, Star, MessageCircle, Activity, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const HeroFloatingBadges = () => {
  return (
    <>
      {/* Live Procedure Status */}
      <Card className="absolute -top-6 -left-6 bg-white text-gray-700 p-4 animate-float z-10 shadow-xl rounded-2xl border border-gray-200 max-w-xs">
        <CardContent className="p-0">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <div className="text-sm font-semibold">Live Procedure Status</div>
          </div>
          <div className="text-xs text-gray-500 mb-3">Hair Transplant - Session 2</div>
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              <Avatar className="w-8 h-8 border-2 border-white">
                <AvatarFallback className="bg-blue-100 text-blue-600 text-xs">Dr</AvatarFallback>
              </Avatar>
              <Avatar className="w-8 h-8 border-2 border-white">
                <AvatarFallback className="bg-green-100 text-green-600 text-xs">RN</AvatarFallback>
              </Avatar>
            </div>
            <div className="text-xs text-gray-600">Expert team</div>
          </div>
        </CardContent>
      </Card>

      {/* Patient Review */}
      <Card className="absolute -bottom-4 -right-4 bg-white text-gray-700 p-4 animate-float delay-500 z-10 shadow-xl rounded-2xl border border-gray-200 max-w-sm">
        <CardContent className="p-0">
          <div className="flex items-start gap-3">
            <MessageCircle className="text-vshine-coral mt-1" size={20} />
            <div>
              <div className="font-semibold text-sm mb-1">Patient Review</div>
              <div className="text-xs text-gray-500 mb-2">2 hours ago</div>
              <div className="flex items-center gap-1 mb-2">
                {[1,2,3,4,5].map((star) => (
                  <Star key={star} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div className="flex items-center gap-2">
                <Avatar className="w-6 h-6">
                  <AvatarFallback className="bg-gray-100 text-gray-600 text-xs">MK</AvatarFallback>
                </Avatar>
                <div>
                  <div className="text-xs font-medium">Michael K.</div>
                  <div className="text-xs text-gray-500">"Amazing results!"</div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Certification Badge */}
      <Card className="absolute top-1/2 -right-8 bg-gradient-to-r from-vshine-coral to-pink-500 text-white p-4 animate-float delay-1000 z-10 shadow-xl transform rotate-3 rounded-2xl">
        <CardContent className="p-0 text-center">
          <CheckCircle className="w-6 h-6 mx-auto mb-2" />
          <div className="text-sm font-bold">Certified</div>
          <div className="text-xs opacity-90">Medical</div>
        </CardContent>
      </Card>
    </>
  );
};

export default HeroFloatingBadges;
