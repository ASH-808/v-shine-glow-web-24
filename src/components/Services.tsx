
import { Button } from '@/components/ui/button';
import BlurText from '@/components/ui/blur-text';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      title: "Hair Transplantation",
      description: "Advanced FUE & FUT techniques for natural-looking hair restoration with minimal scarring and maximum comfort.",
      features: ["FUE Hair Transplant", "FUT Method", "Beard & Eyebrow", "Hair Wig Solutions"],
      image: "/lovable-uploads/54ceabba-2773-483d-93f6-2ee493c23abc.png"
    },
    {
      title: "Skin Rejuvenation",
      description: "Complete skincare solutions using latest laser technology and advanced treatments for glowing, healthy skin.",
      features: ["Laser Treatment", "Acne Solutions", "Skin Whitening", "Pigmentation Care"],
      image: "/lovable-uploads/9cf7bdac-8b2e-4e93-bf71-dc3c525cbac7.png"
    },
    {
      title: "PRP Therapy",
      description: "Platelet-Rich Plasma therapy for natural hair growth stimulation and skin rejuvenation using your body's healing power.",
      features: ["Hair PRP", "Skin PRP", "GFC Treatment", "Derma Roller"],
      image: "/lovable-uploads/c944beab-4dc9-4c20-ab24-66041a8ed45d.png"
    }
  ];

  return (
    <section id="treatments" className="section-padding bg-white overflow-hidden">
      <div className="container-custom">
        {/* Hero Section with Image */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16 lg:mb-20">
          <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
            <BlurText 
              text="Premium Treatment Solutions"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-vshine-teal"
              delay={80}
              animateBy="words"
            />
            <BlurText 
              text="Experience world-class hair transplantation and restoration procedures performed by certified specialists using state-of-the-art technology for natural, lasting results."
              className="text-lg lg:text-xl text-gray-600 leading-relaxed"
              delay={100}
              animateBy="words"
            />
            <div className="flex flex-wrap gap-4 lg:gap-6 pt-4">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-vshine-coral rounded-full"></div>
                <span className="text-vshine-teal font-semibold text-sm lg:text-base">Advanced Technology</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-vshine-coral rounded-full"></div>
                <span className="text-vshine-teal font-semibold text-sm lg:text-base">Certified Specialists</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-vshine-coral rounded-full"></div>
                <span className="text-vshine-teal font-semibold text-sm lg:text-base">Natural Results</span>
              </div>
            </div>
            <Button className="btn-primary text-lg px-6 lg:px-8 py-3 lg:py-4 w-full sm:w-auto">
              Schedule Consultation
            </Button>
          </div>
          
          <div className="relative order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-2xl lg:rounded-3xl shadow-2xl"
            >
              <img 
                src="/lovable-uploads/87177dec-2572-44b6-aa1f-cd3db8436a3f.png" 
                alt="Premium Hair Treatment Procedure"
                className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-vshine-teal/20 to-transparent"></div>
            </motion.div>
            
            {/* Floating stats - Hidden on mobile for cleaner look */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: true }}
              className="hidden sm:block absolute -bottom-4 lg:-bottom-6 -left-4 lg:-left-6 bg-white p-4 lg:p-6 rounded-xl lg:rounded-2xl shadow-xl border border-vshine-beige/50"
            >
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-vshine-teal">5000+</div>
                <div className="text-xs lg:text-sm text-gray-600">Successful Procedures</div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              viewport={{ once: true }}
              className="hidden sm:block absolute -top-4 lg:-top-6 -right-4 lg:-right-6 bg-vshine-coral text-white p-4 lg:p-6 rounded-xl lg:rounded-2xl shadow-xl"
            >
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold">98%</div>
                <div className="text-xs lg:text-sm opacity-90">Success Rate</div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              className="bg-gradient-to-br from-white to-vshine-light-beige rounded-xl lg:rounded-2xl p-6 lg:p-8 shadow-lg card-hover border border-vshine-beige/50 relative overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Decorative background element */}
              <div className="absolute top-0 right-0 w-20 lg:w-24 h-20 lg:h-24 bg-vshine-coral/10 rounded-full -translate-y-10 lg:-translate-y-12 translate-x-10 lg:translate-x-12"></div>
              
              {/* Service Image */}
              <div className="text-center mb-4 lg:mb-6 relative z-10">
                <motion.div 
                  className="inline-flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 bg-vshine-light-beige rounded-full mb-3 lg:mb-4 overflow-hidden"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-10 h-10 lg:w-12 lg:h-12 object-contain"
                  />
                </motion.div>
                <BlurText 
                  text={service.title}
                  className="text-xl lg:text-2xl font-bold text-vshine-teal mb-2 lg:mb-3"
                  delay={50}
                  animateBy="words"
                />
                <p className="text-gray-600 mb-4 lg:mb-6 text-sm lg:text-base leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="space-y-2 lg:space-y-3 mb-4 lg:mb-6">
                {service.features.map((feature, idx) => (
                  <motion.div 
                    key={idx} 
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-2 h-2 bg-vshine-coral rounded-full flex-shrink-0"></div>
                    <span className="text-vshine-teal font-medium text-sm lg:text-base">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <Button className="btn-outline w-full text-sm lg:text-base">
                Learn More
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
