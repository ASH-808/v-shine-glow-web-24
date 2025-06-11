
const HeroBackground = () => {
  return (
    <>
      {/* Clean Background with Subtle Gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-gray-50"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-white/50 via-transparent to-transparent"></div>
      </div>

      {/* Floating Elements - More Subtle */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 left-10 w-48 h-48 bg-vshine-coral/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-purple-100/40 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-1 h-32 bg-gradient-to-b from-blue-400 to-vshine-coral opacity-30 rounded-l-full"></div>
      <div className="absolute bottom-1/4 left-0 w-1 h-32 bg-gradient-to-b from-vshine-coral to-blue-400 opacity-30 rounded-r-full"></div>
    </>
  );
};

export default HeroBackground;
