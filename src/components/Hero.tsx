
import { ArrowRight, Star, Shield, Users, Play, CheckCircle, Sparkles, Award, Clock, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
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

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center min-h-screen py-20">
          {/* Content - 8 columns */}
          <div className="lg:col-span-8 space-y-8 animate-fade-in">
            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <Badge className="bg-gradient-to-r from-green-50 to-green-100 text-green-700 border-green-200 px-4 py-2 text-sm font-medium backdrop-blur-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></div>
                Trusted by 1000+ Patients
              </Badge>
              
              <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-vshine-beige/50">
                <div className="flex">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm font-semibold text-vshine-teal ml-1">5.0</span>
                <span className="text-xs text-gray-600">(1000+ reviews)</span>
              </div>

              <Badge className="bg-gradient-to-r from-vshine-coral to-pink-500 text-white px-4 py-2 text-sm font-medium">
                <Sparkles className="w-4 h-4 mr-2" />
                Live Procedure
              </Badge>
            </div>

            {/* Main Headline */}
            <div className="space-y-6">
              <h1 className="text-6xl lg:text-8xl font-bold font-heading leading-tight">
                <span className="text-vshine-teal">Where</span>
                <br />
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-vshine-coral via-pink-500 to-red-400 bg-clip-text text-transparent animate-pulse">
                    Confidence
                  </span>
                  <div className="absolute -bottom-3 left-0 w-full h-2 bg-gradient-to-r from-vshine-coral to-pink-500 rounded-full transform scale-x-0 animate-[scale-x_1.5s_ease-out_0.8s_forwards] origin-left"></div>
                </span>
                <br />
                <span className="relative text-vshine-teal">
                  Grows Again
                  <div className="absolute -bottom-2 left-0 w-24 h-1 bg-vshine-teal rounded-full transform scale-x-0 animate-[scale-x_1s_ease-out_1.5s_forwards] origin-left"></div>
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-700 max-w-3xl leading-relaxed backdrop-blur-sm bg-white/30 p-6 rounded-2xl border border-white/20">
                Experience India's most advanced hair transplant and skincare treatments with 
                <span className="font-bold text-vshine-teal"> 100% comfort</span> and 
                <span className="font-bold text-vshine-coral"> guaranteed results</span>.
              </p>
            </div>

            {/* Enhanced Stats Cards */}
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

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 pt-6">
              <Button className="bg-gradient-to-r from-vshine-teal to-vshine-dark-teal hover:from-vshine-dark-teal hover:to-vshine-teal text-white px-10 py-6 rounded-full text-xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 group transform hover:scale-105">
                <Phone className="mr-3 group-hover:animate-bounce" size={24} />
                Book Free Consultation
                <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" size={24} />
              </Button>
              
              <Button className="border-3 border-vshine-coral text-vshine-coral hover:bg-gradient-to-r hover:from-vshine-coral hover:to-pink-500 hover:text-white px-10 py-6 rounded-full text-xl font-bold transition-all duration-300 group bg-white/90 backdrop-blur-sm transform hover:scale-105 shadow-xl">
                <Play className="mr-3 group-hover:scale-125 transition-transform" size={24} />
                See Amazing Results
              </Button>
            </div>

            {/* Enhanced Features List */}
            <div className="grid sm:grid-cols-2 gap-4 pt-8">
              {[
                "Advanced FUE Technology",
                "100% Painless Procedures", 
                "Natural Looking Results",
                "Expert Medical Team"
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-4 group bg-white/60 backdrop-blur-sm p-4 rounded-xl hover:bg-white/80 transition-all duration-300">
                  <CheckCircle className="text-green-500 flex-shrink-0 group-hover:scale-125 transition-transform" size={24} />
                  <span className="text-gray-700 font-medium text-lg">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Content - 4 columns */}
          <div className="lg:col-span-4 relative">
            {/* Treatment Showcase with Enhanced Design */}
            <div className="relative">
              {/* Main Procedure Card */}
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

              {/* Floating Badges */}
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

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-2 h-40 bg-gradient-to-b from-vshine-coral to-vshine-teal opacity-40 rounded-l-full"></div>
      <div className="absolute bottom-1/4 left-0 w-2 h-40 bg-gradient-to-b from-vshine-teal to-vshine-coral opacity-40 rounded-r-full"></div>
    </section>
  );
};

export default Hero;
