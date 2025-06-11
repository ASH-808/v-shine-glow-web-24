
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
          {/* Content - 7 columns */}
          <div className="lg:col-span-7">
            <HeroContent />
            <HeroStats />
          </div>

          {/* Visual Content - 5 columns */}
          <div className="lg:col-span-5 relative">
            <div className="relative flex justify-center">
              {/* Doctor Image */}
              <div className="relative">
                <img 
                  src="/lovable-uploads/223f768e-82ff-4f0d-9d21-fecdd2dd7bea.png" 
                  alt="Healthcare Professional" 
                  className="w-full max-w-md h-auto object-contain relative z-10"
                />
                <HeroFloatingBadges />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center space-y-3 animate-bounce">
          <span className="text-sm text-gray-600 font-medium bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">Discover More</span>
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center bg-white/20 backdrop-blur-sm">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
