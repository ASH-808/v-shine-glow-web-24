
import { Award, Heart, Users, Target } from 'lucide-react';
import BlurText from '@/components/ui/blur-text';
import { motion } from 'framer-motion';

const About = () => {
  const values = [
    {
      icon: <Heart className="text-vshine-coral" size={28} />,
      title: "Patient-Centric Care",
      description: "Every treatment is personalized with complete focus on patient comfort and satisfaction."
    },
    {
      icon: <Award className="text-vshine-coral" size={28} />,
      title: "Clinical Excellence",
      description: "Advanced techniques and state-of-the-art equipment ensuring the highest standards of care."
    },
    {
      icon: <Users className="text-vshine-coral" size={28} />,
      title: "Inclusive Service",
      description: "Welcoming and serving men, women, and transgender individuals with equal dedication."
    },
    {
      icon: <Target className="text-vshine-coral" size={28} />,
      title: "Proven Results",
      description: "100% successful procedures with natural-looking, long-lasting results."
    }
  ];

  return (
    <section id="about" className="section-padding bg-gradient-to-br from-vshine-light-beige to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-48 lg:w-64 h-48 lg:h-64 bg-vshine-coral/10 rounded-full -translate-x-24 lg:-translate-x-32 -translate-y-24 lg:-translate-y-32"></div>
      <div className="absolute bottom-0 right-0 w-32 lg:w-48 h-32 lg:h-48 bg-vshine-teal/10 rounded-full translate-x-16 lg:translate-x-24 translate-y-16 lg:translate-y-24"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div 
            className="space-y-6 lg:space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <BlurText 
                text="Meet Our Founder"
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-vshine-teal mb-4 lg:mb-6"
                delay={80}
                animateBy="words"
              />
              <motion.div 
                className="bg-white/80 rounded-xl lg:rounded-2xl p-4 lg:p-6 shadow-lg border border-vshine-beige/50 relative"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="absolute top-2 right-2 w-6 lg:w-8 h-6 lg:h-8 bg-vshine-coral/20 rounded-full"></div>
                <BlurText 
                  text="Mrs. Reena M.P."
                  className="text-xl lg:text-2xl font-bold text-vshine-teal mb-2"
                  delay={50}
                  animateBy="words"
                />
                <p className="text-vshine-coral font-medium mb-3 lg:mb-4 text-sm lg:text-base">Founder & Lead Specialist</p>
                <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                  With over a decade of expertise in advanced hair transplantation and skincare, 
                  Mrs. Reena M.P. established V-Shine in 2021 with a vision to provide world-class 
                  aesthetic treatments with personalized care and guaranteed results.
                </p>
              </motion.div>
            </div>

            <div className="space-y-3 lg:space-y-4">
              <BlurText 
                text="Our Mission"
                className="text-xl lg:text-2xl font-bold text-vshine-teal"
                delay={60}
                animateBy="words"
              />
              <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                To provide premium hair transplant and skincare solutions that restore confidence 
                and enhance natural beauty through advanced techniques, personalized care, and 
                unwavering commitment to patient satisfaction.
              </p>
            </div>

            <motion.div 
              className="bg-gradient-to-r from-vshine-teal to-vshine-dark-teal text-white rounded-xl p-4 lg:p-6 relative overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute top-0 right-0 w-12 lg:w-16 h-12 lg:h-16 bg-vshine-coral/20 rounded-full -translate-y-6 lg:-translate-y-8 translate-x-6 lg:translate-x-8"></div>
              <div className="relative z-10">
                <h4 className="text-lg lg:text-xl font-bold mb-2">Established 2021</h4>
                <p className="text-vshine-beige text-sm lg:text-base">
                  From our founding, we've been dedicated to transforming lives through 
                  safe, effective, and comfortable aesthetic treatments.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Values Grid */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {values.map((value, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-xl p-4 lg:p-6 shadow-lg card-hover border border-vshine-beige/50 relative overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className="absolute top-0 right-0 w-8 lg:w-12 h-8 lg:h-12 bg-vshine-coral/10 rounded-full -translate-y-4 lg:-translate-y-6 translate-x-4 lg:translate-x-6"></div>
                <div className="mb-3 lg:mb-4 relative z-10">
                  <motion.div
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {value.icon}
                  </motion.div>
                </div>
                <BlurText 
                  text={value.title}
                  className="text-base lg:text-lg font-bold text-vshine-teal mb-2"
                  delay={30}
                  animateBy="words"
                />
                <p className="text-gray-600 text-xs lg:text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
