import { useEffect, useRef, useState } from 'react';
import { Home, Wrench, Search, Droplets, ArrowRight } from 'lucide-react';

interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
  link: string;
}

const services: Service[] = [
  {
    icon: Home,
    title: 'Roof Installation',
    description: 'Complete roof installation for new construction and full replacements. We work with all major roofing materials including asphalt shingles, metal, tile, and flat roofing.',
    link: '#contact',
  },
  {
    icon: Wrench,
    title: 'Roof Repairs',
    description: 'Fast, reliable repairs for leaks, storm damage, and wear. Emergency services available 24/7 to protect your home from further damage.',
    link: '#contact',
  },
  {
    icon: Search,
    title: 'Roof Inspections',
    description: 'Thorough inspections with detailed reports. Catch problems early and extend your roof\'s lifespan with our expert assessment.',
    link: '#contact',
  },
  {
    icon: Droplets,
    title: 'Gutter Services',
    description: 'Installation, cleaning, and repair of gutters and downspouts to protect your home\'s foundation and prevent water damage.',
    link: '#contact',
  },
];

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-24 bg-[#fafafa] relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 10px,
            rgba(0,0,0,0.02) 10px,
            rgba(0,0,0,0.02) 11px
          )`
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
          <span className="section-label mb-4 block">OUR SERVICES</span>
          <h2 className="section-title mb-4">
            Comprehensive Roofing Solutions
          </h2>
          <p className="text-gray-600 text-lg">
            From repairs to complete installations, we handle every roofing need with precision and care.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-[#004aad]/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#004aad] transition-colors duration-300">
                <service.icon className="w-7 h-7 text-[#004aad] group-hover:text-white transition-colors duration-300" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-black mb-3 font-['Oswald']">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">
                {service.description}
              </p>

              {/* Link */}
              <a
                href={service.link}
                className="inline-flex items-center gap-2 text-sm font-semibold text-black group/link"
              >
                Learn More
                <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
              </a>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`mt-16 text-center transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
          <p className="text-gray-600 mb-4">
            Not sure what service you need? We offer free inspections and estimates.
          </p>
          <a href="#contact" className="btn-primary">
            Schedule Free Inspection
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
