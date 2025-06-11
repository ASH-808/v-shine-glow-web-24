
import { Award, Shield, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const HeroFloatingBadges = () => {
  return (
    <>
      <Card className="absolute -top-8 -left-8 bg-gradient-to-r from-vshine-teal to-blue-600 text-white p-6 animate-float z-10 shadow-2xl rounded-2xl">
        <CardContent className="p-0 text-center">
          <Award className="w-10 h-10 mx-auto mb-2" />
          <div className="text-lg font-bold">Certified</div>
          <div className="text-sm opacity-90">ISO Clinic</div>
        </CardContent>
      </Card>

      <Card className="absolute -bottom-6 -right-6 bg-gradient-to-r from-green-400 to-green-600 text-white p-6 animate-float delay-500 z-10 shadow-2xl rounded-2xl">
        <CardContent className="p-0 flex items-center space-x-4">
          <Shield className="text-white" size={28} />
          <div>
            <div className="font-bold text-lg">100% Safe</div>
            <div className="text-sm opacity-90">FDA Approved</div>
          </div>
        </CardContent>
      </Card>

      <Card className="absolute top-1/2 -right-12 bg-gradient-to-r from-vshine-coral to-pink-500 text-white p-6 animate-float delay-1000 z-10 shadow-2xl transform -rotate-6 rounded-2xl">
        <CardContent className="p-0 text-center">
          <Clock className="w-8 h-8 mx-auto mb-2" />
          <div className="text-2xl font-bold">24/7</div>
          <div className="text-sm opacity-90">Support</div>
        </CardContent>
      </Card>
    </>
  );
};

export default HeroFloatingBadges;
