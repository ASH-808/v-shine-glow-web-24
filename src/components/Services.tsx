
import { Scissors, Sparkles, Syringe } from 'lucide-react';
import { Button } from '@/components/ui/button';

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

  return (
    <section id="treatments" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-vshine-teal mb-6">
            Premium Treatment Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive hair and skin care treatments designed for men, women, and transgender individuals 
            with advanced technology and personalized care.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-br from-white to-vshine-light-beige rounded-2xl p-8 shadow-lg card-hover border border-vshine-beige/50"
            >
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-vshine-light-beige rounded-full mb-4">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-vshine-teal mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
              </div>

              <div className="space-y-3 mb-6">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-vshine-coral rounded-full"></div>
                    <span className="text-vshine-teal font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <Button className="btn-outline w-full">
                Learn More
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
