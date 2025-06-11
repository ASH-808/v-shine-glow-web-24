
import { Award, Heart, Users, Target } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Heart className="text-vshine-coral" size={32} />,
      title: "Patient-Centric Care",
      description: "Every treatment is personalized with complete focus on patient comfort and satisfaction."
    },
    {
      icon: <Award className="text-vshine-coral" size={32} />,
      title: "Clinical Excellence",
      description: "Advanced techniques and state-of-the-art equipment ensuring the highest standards of care."
    },
    {
      icon: <Users className="text-vshine-coral" size={32} />,
      title: "Inclusive Service",
      description: "Welcoming and serving men, women, and transgender individuals with equal dedication."
    },
    {
      icon: <Target className="text-vshine-coral" size={32} />,
      title: "Proven Results",
      description: "100% successful procedures with natural-looking, long-lasting results."
    }
  ];

  return (
    <section id="about" className="section-padding bg-gradient-to-br from-vshine-light-beige to-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-vshine-teal mb-6">
                Meet Our Founder
              </h2>
              <div className="bg-white/80 rounded-2xl p-6 shadow-lg border border-vshine-beige/50">
                <h3 className="text-2xl font-bold text-vshine-teal mb-2">Mrs. Reena M.P.</h3>
                <p className="text-vshine-coral font-medium mb-4">Founder & Lead Specialist</p>
                <p className="text-gray-600 leading-relaxed">
                  With over a decade of expertise in advanced hair transplantation and skincare, 
                  Mrs. Reena M.P. established V-Shine in 2021 with a vision to provide world-class 
                  aesthetic treatments with personalized care and guaranteed results.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-vshine-teal">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide premium hair transplant and skincare solutions that restore confidence 
                and enhance natural beauty through advanced techniques, personalized care, and 
                unwavering commitment to patient satisfaction.
              </p>
            </div>

            <div className="bg-vshine-teal text-white rounded-xl p-6">
              <h4 className="text-xl font-bold mb-2">Established 2021</h4>
              <p className="text-vshine-beige">
                From our founding, we've been dedicated to transforming lives through 
                safe, effective, and comfortable aesthetic treatments.
              </p>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg card-hover border border-vshine-beige/50"
              >
                <div className="mb-4">
                  {value.icon}
                </div>
                <h4 className="text-lg font-bold text-vshine-teal mb-2">
                  {value.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
