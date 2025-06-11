
import { Card, CardContent } from '@/components/ui/card';
import { Users, Shield, Award } from 'lucide-react';

const HeroStats = () => {
  return (
    <div className="grid grid-cols-3 gap-6 py-12">
      <Card className="text-center p-6 bg-white/90 backdrop-blur-sm border-gray-200 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group rounded-xl">
        <CardContent className="p-0">
          <div className="flex justify-center mb-3">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
          </div>
          <div className="text-2xl font-bold text-vshine-teal mb-1">5000+</div>
          <div className="text-sm font-semibold text-gray-700 mb-1">Procedures</div>
          <div className="text-xs text-gray-500 leading-relaxed">Successfully completed</div>
        </CardContent>
      </Card>
      
      <Card className="text-center p-6 bg-white/90 backdrop-blur-sm border-gray-200 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group rounded-xl">
        <CardContent className="p-0">
          <div className="flex justify-center mb-3">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <Shield className="w-6 h-6 text-green-600" />
            </div>
          </div>
          <div className="text-2xl font-bold text-vshine-teal mb-1">98%</div>
          <div className="text-sm font-semibold text-gray-700 mb-1">Success Rate</div>
          <div className="text-xs text-gray-500 leading-relaxed">Patient satisfaction</div>
        </CardContent>
      </Card>
      
      <Card className="text-center p-6 bg-white/90 backdrop-blur-sm border-gray-200 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group rounded-xl">
        <CardContent className="p-0">
          <div className="flex justify-center mb-3">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
              <Award className="w-6 h-6 text-purple-600" />
            </div>
          </div>
          <div className="text-2xl font-bold text-vshine-teal mb-1">15+</div>
          <div className="text-sm font-semibold text-gray-700 mb-1">Years Experience</div>
          <div className="text-xs text-gray-500 leading-relaxed">Medical expertise</div>
        </CardContent>
      </Card>
    </div>
  );
};

export default HeroStats;
