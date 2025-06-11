
import HeroBackground from './hero/HeroBackground';
import HeroContent from './hero/HeroContent';
import HeroStats from './hero/HeroStats';
import HeroTreatmentCard from './hero/HeroTreatmentCard';
import HeroFloatingBadges from './hero/HeroFloatingBadges';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      <HeroBackground />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center min-h-screen py-20">
          {/* Content - 8 columns */}
          <div className="lg:col-span-8">
            <HeroContent />
            <HeroStats />
          </div>

          {/* Visual Content - 4 columns */}
          <div className="lg:col-span-4 relative">
            <div className="relative">
              <HeroTreatmentCard />
              <HeroFloatingBadges />
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center space-y-3 animate-bounce">
          <span className="text-lg text-vshine-teal font-bold bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full">Discover More</span>
          <div className="w-8 h-12 border-3 border-vshine-teal rounded-full flex justify-center bg-white/20 backdrop-blur-sm">
            <div className="w-2 h-4 bg-vshine-teal rounded-full mt-3 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
