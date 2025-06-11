
import { ArrowRight, Star, Shield, Users, Play, CheckCircle, Sparkles, Award, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-gradient-to-br from-vshine-light-beige via-white to-vshine-beige/30">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-96 h-96 bg-vshine-coral/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-vshine-teal/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 left-1/3 w-32 h-32 bg-gradient-to-r from-vshine-coral/10 to-vshine-teal/10 rounded-full blur-2xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center min-h-screen py-20">
          {/* Content - 7 columns */}
          <div className="lg:col-span-7 space-y-8 animate-fade-in">
            {/* Trust Badge */}
            <div className="flex items-center gap-4 mb-6">
              <Badge className="bg-gradient-to-r from-green-50 to-green-100 text-green-700 border-green-200 px-4 py-2 text-sm font-medium">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></div>
                Trusted by 1000+ Patients
              </Badge>
              
              <div className="flex items-center gap-1 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-full shadow-lg border border-vshine-beige/50">
                <div className="flex">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm font-semibold text-vshine-teal ml-2">5.0</span>
                <span className="text-xs text-gray-600">(1000+ reviews)</span>
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold font-heading leading-tight">
                <span className="text-vshine-teal">Where</span>
                <br />
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-vshine-coral via-pink-500 to-vshine-coral bg-clip-text text-transparent animate-pulse">
                    Confidence
                  </span>
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-vshine-coral to-pink-500 rounded-full transform scale-x-0 animate-[scale-x_1.5s_ease-out_0.8s_forwards] origin-left"></div>
                </span>
                <br />
                <span className="relative text-vshine-teal">
                  Grows Again
                  <div className="absolute -bottom-1 left-0 w-20 h-0.5 bg-vshine-teal rounded-full transform scale-x-0 animate-[scale-x_1s_ease-out_1.5s_forwards] origin-left"></div>
                </span>
              </h1>
              
              <p className="text-lg lg:text-xl text-gray-700 max-w-2xl leading-relaxed">
                Experience India's most advanced hair transplant and skincare treatments with 
                <span className="font-bold text-vshine-teal"> 100% comfort</span> and 
                <span className="font-bold text-vshine-coral"> guaranteed results</span>.
              </p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-4 py-6">
              <Card className="text-center p-4 bg-white/80 backdrop-blur-sm border-vshine-beige/50 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-0">
                  <div className="text-2xl lg:text-3xl font-bold text-vshine-teal">10+</div>
                  <div className="text-xs lg:text-sm text-gray-600">Years Experience</div>
                </CardContent>
              </Card>
              <Card className="text-center p-4 bg-white/80 backdrop-blur-sm border-vshine-beige/50 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-0">
                  <div className="text-2xl lg:text-3xl font-bold text-vshine-coral">1000+</div>
                  <div className="text-xs lg:text-sm text-gray-600">Happy Patients</div>
                </CardContent>
              </Card>
              <Card className="text-center p-4 bg-white/80 backdrop-blur-sm border-vshine-beige/50 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-0">
                  <div className="text-2xl lg:text-3xl font-bold text-vshine-teal">100%</div>
                  <div className="text-xs lg:text-sm text-gray-600">Success Rate</div>
                </CardContent>
              </Card>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="bg-vshine-teal hover:bg-vshine-dark-teal text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 group transform hover:scale-105">
                Book Free Consultation
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
              
              <Button className="border-2 border-vshine-coral text-vshine-coral hover:bg-vshine-coral hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 group bg-white/80 backdrop-blur-sm transform hover:scale-105">
                <Play className="mr-2 group-hover:scale-110 transition-transform" size={20} />
                See Results
              </Button>
            </div>

            {/* Features List */}
            <div className="grid sm:grid-cols-2 gap-3 pt-6">
              <div className="flex items-center space-x-3 group">
                <CheckCircle className="text-green-500 flex-shrink-0 group-hover:scale-110 transition-transform" size={20} />
                <span className="text-gray-700">Advanced FUE Technology</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <CheckCircle className="text-green-500 flex-shrink-0 group-hover:scale-110 transition-transform" size={20} />
                <span className="text-gray-700">Painless Procedures</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <CheckCircle className="text-green-500 flex-shrink-0 group-hover:scale-110 transition-transform" size={20} />
                <span className="text-gray-700">Natural Looking Results</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <CheckCircle className="text-green-500 flex-shrink-0 group-hover:scale-110 transition-transform" size={20} />
                <span className="text-gray-700">Expert Medical Team</span>
              </div>
            </div>
          </div>

          {/* Visual Content - 5 columns */}
          <div className="lg:col-span-5 relative">
            {/* Main Treatment Showcase */}
            <div className="relative">
              {/* Before/After Showcase Card */}
              <Card className="bg-white/95 backdrop-blur-sm shadow-2xl border-vshine-beige/50 overflow-hidden transform rotate-1 hover:rotate-0 transition-transform duration-500">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <Badge className="bg-gradient-to-r from-vshine-coral to-pink-500 text-white px-3 py-1 text-sm">
                      <Sparkles className="w-4 h-4 mr-1" />
                      Live Procedure
                    </Badge>
                  </div>
                  
                  {/* Clinical Images Grid */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="relative rounded-lg overflow-hidden group">
                      <img 
                        src="/lovable-uploads/5643f008-75a9-4859-9c26-efb1acea922d.png" 
                        alt="PRP Hair Treatment Process" 
                        className="w-full h-24 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-vshine-teal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                    <div className="relative rounded-lg overflow-hidden group">
                      <img 
                        src="/lovable-uploads/623bf74b-52a1-4e76-92d8-94d7911b56b2.png" 
                        alt="Hair Transplant Procedure" 
                        className="w-full h-24 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-vshine-coral/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                  </div>

                  {/* Treatment Tools */}
                  <div className="mb-4">
                    <img 
                      src="/lovable-uploads/7bc41ca2-7c70-4b19-8bb3-079826e84f2a.png" 
                      alt="Advanced Hair Transplant Tools" 
                      className="w-full h-20 object-cover rounded-lg"
                    />
                  </div>

                  {/* Results Preview */}
                  <div className="flex items-center justify-center space-x-4">
                    <div className="text-center">
                      <Avatar className="w-12 h-12 mx-auto mb-2 border-2 border-gray-300">
                        <AvatarImage src="/placeholder.svg" />
                        <AvatarFallback className="bg-gray-200 text-gray-600">Before</AvatarFallback>
                      </Avatar>
                      <span className="text-xs text-gray-600">Before</span>
                    </div>
                    
                    <div className="flex items-center">
                      <ArrowRight className="text-vshine-coral animate-pulse" size={20} />
                    </div>
                    
                    <div className="text-center">
                      <Avatar className="w-12 h-12 mx-auto mb-2 border-2 border-vshine-coral relative">
                        <AvatarImage src="/placeholder.svg" />
                        <AvatarFallback className="bg-vshine-coral text-white">After</AvatarFallback>
                        <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-yellow-400 animate-bounce" />
                      </Avatar>
                      <span className="text-xs text-vshine-coral font-semibold">After</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Floating Award Badge */}
              <Card className="absolute -top-6 -left-6 bg-gradient-to-r from-vshine-teal to-blue-600 text-white p-4 animate-float z-10 shadow-2xl">
                <CardContent className="p-0 text-center">
                  <Award className="w-8 h-8 mx-auto mb-1" />
                  <div className="text-sm font-bold">Certified</div>
                  <div className="text-xs opacity-90">ISO Clinic</div>
                </CardContent>
              </Card>

              {/* Floating Success Rate */}
              <Card className="absolute -bottom-4 -right-4 bg-white p-4 animate-float delay-500 z-10 shadow-2xl border border-vshine-beige/50">
                <CardContent className="p-0 flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center">
                    <Shield className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="font-bold text-vshine-teal">100% Safe</div>
                    <div className="text-sm text-gray-600">FDA Approved</div>
                  </div>
                </CardContent>
              </Card>

              {/* 24/7 Support Badge */}
              <Card className="absolute top-1/2 -right-8 bg-gradient-to-r from-vshine-coral to-pink-500 text-white p-4 animate-float delay-1000 z-10 shadow-2xl transform -rotate-3">
                <CardContent className="p-0 text-center">
                  <Clock className="w-6 h-6 mx-auto mb-1" />
                  <div className="text-lg font-bold">24/7</div>
                  <div className="text-sm opacity-90">Support</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Modern Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center space-y-2 animate-bounce">
          <span className="text-sm text-vshine-teal font-medium">Discover More</span>
          <div className="w-6 h-10 border-2 border-vshine-teal rounded-full flex justify-center">
            <div className="w-1 h-3 bg-vshine-teal rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-1 h-32 bg-gradient-to-b from-vshine-coral to-vshine-teal opacity-30"></div>
      <div className="absolute bottom-1/4 left-0 w-1 h-32 bg-gradient-to-b from-vshine-teal to-vshine-coral opacity-30"></div>
    </section>
  );
};

export default Hero;
