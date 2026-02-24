import { useEffect, useRef, useState } from 'react';
import { Check, Award, Users, Calendar } from 'lucide-react';

const stats = [
  { icon: Award, value: '2,500+', label: 'Projects Completed' },
  { icon: Users, value: '50+', label: 'Expert Roofers' },
  { icon: Calendar, value: '20+', label: 'Years in Business' },
];

const keyPoints = [
  'Licensed, bonded, and insured',
  '20+ years of experience',
  '5-year workmanship warranty',
  'Free estimates and inspections',
];

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState<number[]>([0, 0, 0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const targets = [2500, 50, 20];
    const duration = 1500;
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      const easeOut = 1 - Math.pow(1 - progress, 3);

      setCounters(targets.map(target => Math.floor(target * easeOut)));

      if (currentStep >= steps) {
        clearInterval(interval);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 bg-white relative overflow-hidden"
    >
      {/* Floating Shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-[#004aad]/5 rounded-full" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-[#004aad]/5 rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Column */}
          <div className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}>
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/about-image.jpg"
                  alt="Professional roofers at work"
                  className="w-full h-auto object-cover"
                />
                {/* Overlay Badge */}
                <div className="absolute bottom-6 left-6 bg-[#004aad] rounded-xl p-4 shadow-lg">
                  <p className="text-3xl font-bold text-white">20+</p>
                  <p className="text-sm font-medium text-white/90">Years Experience</p>
                </div>
              </div>

              {/* Decorative Element */}
              <div className="absolute -top-4 -right-4 w-full h-full border-2 border-[#004aad] rounded-2xl -z-10" />
            </div>
          </div>

          {/* Content Column */}
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}>
            <span className="section-label mb-4 block">ABOUT US</span>
            <h2 className="section-title mb-6">
              Two Decades of Excellence
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Niche Roofing is Conisbrough's trusted name in residential and commercial roofing.
              Our team of certified professionals brings unmatched expertise to every project, big or small.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              We believe in quality workmanship, transparent pricing, and exceptional customer service.
              That\'s why thousands of homeowners trust us with their most valuable asset—their home.
            </p>

            {/* Key Points */}
            <div className="grid sm:grid-cols-2 gap-3 mb-10">
              {keyPoints.map((point, index) => (
                <div
                  key={point}
                  className={`flex items-center gap-3 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                  style={{ transitionDelay: `${index * 100 + 400}ms` }}
                >
                  <div className="w-6 h-6 bg-[#004aad] rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">{point}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`text-center p-4 bg-gray-50 rounded-xl transition-all duration-500 hover:bg-[#004aad]/10 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                  style={{ transitionDelay: `${index * 100 + 600}ms` }}
                >
                  <stat.icon className="w-6 h-6 text-[#004aad] mx-auto mb-2" />
                  <p className="text-2xl font-bold text-black font-['Oswald']">
                    {index === 0 ? `${counters[index].toLocaleString()}+` : `${counters[index]}+`}
                  </p>
                  <p className="text-xs text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
