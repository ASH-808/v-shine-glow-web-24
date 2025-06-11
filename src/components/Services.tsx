
import { Scissors, Sparkles, Syringe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import BlurText from '@/components/ui/blur-text';
import MovingTicker from '@/components/ui/moving-ticker';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      icon: <Scissors className="text-vshine-coral" size={48} />,
      title: "Hair Transplantation",
      description: "Advanced FUE & FUT techniques for natural-looking hair restoration with minimal scarring and maximum comfort.",
      features: ["FUE Hair Transplant", "FUT Method", "Beard & Eyebrow", "Hair Wig Solutions"],
      image: "/lovable-uploads/54ceabba-2773-483d-93f6-2ee493c23abc.png"
    },
    {
      icon: <Sparkles className="text-vshine-coral" size={48} />,
      title: "Skin Rejuvenation",
      description: "Complete skincare solutions using latest laser technology and advanced treatments for glowing, healthy skin.",
      features: ["Laser Treatment", "Acne Solutions", "Skin Whitening", "Pigmentation Care"],
      image: "/lovable-uploads/9cf7bdac-8b2e-4e93-bf71-dc3c525cbac7.png"
    },
    {
      icon: <Syringe className="text-vshine-coral" size={48} />,
      title: "PRP Therapy",
      description: "Platelet-Rich Plasma therapy for natural hair growth stimulation and skin rejuvenation using your body's healing power.",
      features: ["Hair PRP", "Skin PRP", "GFC Treatment", "Derma Roller"],
      image: "/lovable-uploads/c944beab-4dc9-4c20-ab24-66041a8ed45d.png"
    }
  ];

  const tickerCards = [
    { title: "5000+", subtitle: "Procedures", icon: "👨‍⚕️" },
    { title: "98%", subtitle: "Success Rate", icon: "⭐" },
    { title: "15+", subtitle: "Years Experience", icon: "🏆" },
    { title: "100%", subtitle: "Safe & Secure", icon: "🛡️" },
    { title: "24/7", subtitle: "Support", icon: "💬" },
  ];

  return (
    <section id="treatments" className="section-padding bg-white overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-16">
          <BlurText 
            text="Premium Treatment Solutions"
            className="text-4xl lg:text-5xl font-bold text-vshine-teal mb-6"
            delay={80}
            animateBy="words"
          />
          <BlurText 
            text="Comprehensive hair and skin care treatments designed for men, women, and transgender individuals with advanced technology and personalized care."
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            delay={100}
            animateBy="words"
          />
        </div>

        {/* Moving Ticker */}
        <div className="mb-16">
          <MovingTicker speed={30} className="py-8">
            {tickerCards.map((card, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 bg-gradient-to-br from-vshine-coral/10 to-vshine-teal/10 rounded-2xl p-6 min-w-[200px] border border-vshine-coral/20"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-2xl mb-2">{card.icon}</div>
                <div className="text-2xl font-bold text-vshine-teal">{card.title}</div>
                <div className="text-sm text-gray-600">{card.subtitle}</div>
              </motion.div>
            ))}
          </MovingTicker>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              className="bg-gradient-to-br from-white to-vshine-light-beige rounded-2xl p-8 shadow-lg card-hover border border-vshine-beige/50 relative overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Decorative background element */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-vshine-coral/10 rounded-full -translate-y-12 translate-x-12"></div>
              
              <div className="text-center mb-6 relative z-10">
                <motion.div 
                  className="inline-flex items-center justify-center w-20 h-20 bg-vshine-light-beige rounded-full mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {service.icon}
                </motion.div>
                <BlurText 
                  text={service.title}
                  className="text-2xl font-bold text-vshine-teal mb-3"
                  delay={50}
                  animateBy="words"
                />
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
              </div>

              <div className="space-y-3 mb-6">
                {service.features.map((feature, idx) => (
                  <motion.div 
                    key={idx} 
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-2 h-2 bg-vshine-coral rounded-full"></div>
                    <span className="text-vshine-teal font-medium">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <Button className="btn-outline w-full">
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
