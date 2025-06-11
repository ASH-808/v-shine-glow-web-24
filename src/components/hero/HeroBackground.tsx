
const HeroBackground = () => {
  return (
    <>
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="/lovable-uploads/e53b5cd7-d70a-436b-b212-2ed0803f67b6.png" 
          alt="V-Shine Hair Transplant Hero Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-vshine-light-beige/95 via-vshine-light-beige/85 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-vshine-light-beige/40"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-vshine-coral/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-vshine-teal/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-2 h-40 bg-gradient-to-b from-vshine-coral to-vshine-teal opacity-40 rounded-l-full"></div>
      <div className="absolute bottom-1/4 left-0 w-2 h-40 bg-gradient-to-b from-vshine-teal to-vshine-coral opacity-40 rounded-r-full"></div>
    </>
  );
};

export default HeroBackground;
