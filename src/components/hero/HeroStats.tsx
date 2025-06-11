
import { Card, CardContent } from '@/components/ui/card';

const HeroStats = () => {
  return (
    <div className="grid grid-cols-3 gap-6 py-8">
      <Card className="text-center p-6 bg-white/90 backdrop-blur-sm border-vshine-beige/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
        <CardContent className="p-0">
          <div className="text-4xl lg:text-5xl font-bold text-vshine-teal group-hover:scale-110 transition-transform">10+</div>
          <div className="text-sm lg:text-base text-gray-600 font-medium">Years Experience</div>
        </CardContent>
      </Card>
      <Card className="text-center p-6 bg-white/90 backdrop-blur-sm border-vshine-beige/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
        <CardContent className="p-0">
          <div className="text-4xl lg:text-5xl font-bold text-vshine-coral group-hover:scale-110 transition-transform">1000+</div>
          <div className="text-sm lg:text-base text-gray-600 font-medium">Happy Patients</div>
        </CardContent>
      </Card>
      <Card className="text-center p-6 bg-white/90 backdrop-blur-sm border-vshine-beige/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
        <CardContent className="p-0">
          <div className="text-4xl lg:text-5xl font-bold text-vshine-teal group-hover:scale-110 transition-transform">100%</div>
          <div className="text-sm lg:text-base text-gray-600 font-medium">Success Rate</div>
        </CardContent>
      </Card>
    </div>
  );
};

export default HeroStats;
