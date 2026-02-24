import { useEffect, useRef, useState } from 'react';
import { MessageSquare, ClipboardList, HardHat, CheckCircle } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Consultation',
    description: 'Free on-site assessment and detailed estimate. We discuss your needs and recommend the best solutions for your home and budget.',
  },
  {
    number: '02',
    icon: ClipboardList,
    title: 'Planning',
    description: 'Material selection, scheduling, and permit handling. We keep you informed at every step of the planning process.',
  },
  {
    number: '03',
    icon: HardHat,
    title: 'Execution',
    description: 'Expert installation with minimal disruption. Our crew works efficiently and cleans up daily, respecting your property.',
  },
  {
    number: '04',
    icon: CheckCircle,
    title: 'Completion',
    description: 'Final inspection, cleanup, and warranty documentation. Your satisfaction is guaranteed before we consider the job done.',
  },
];

const Process = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

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

    const interval = setInterval(() => {
      setActiveStep(prev => (prev + 1) % steps.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <section
      id="process"
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-[#fafafa] to-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
          <span className="section-label mb-4 block">OUR PROCESS</span>
          <h2 className="section-title mb-4">
            How We Work
          </h2>
          <p className="text-gray-600 text-lg">
            A proven four-step process that ensures quality results every time.
          </p>
        </div>

        {/* Progress Line - Desktop */}
        <div className="hidden lg:block relative mb-12">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2 rounded-full" />
          <div
            className="absolute top-1/2 left-0 h-1 bg-[#004aad] -translate-y-1/2 rounded-full transition-all duration-700"
            style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
          />
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
              style={{ transitionDelay: `${index * 150 + 200}ms` }}
              onMouseEnter={() => setActiveStep(index)}
            >
              {/* Step Circle */}
              <div className={`relative mb-6 transition-all duration-500 ${activeStep === index ? 'scale-110' : 'scale-100'
                }`}>
                <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto transition-all duration-500 ${activeStep === index
                  ? 'bg-[#004aad] shadow-lg shadow-[#004aad]/30'
                  : 'bg-white border-2 border-gray-200'
                  }`}>
                  <step.icon className={`w-8 h-8 transition-colors duration-500 ${activeStep === index ? 'text-white' : 'text-gray-400'
                    }`} />
                </div>
                {/* Step Number */}
                <div className={`absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-500 ${activeStep === index ? 'bg-black text-white' : 'bg-gray-200 text-gray-600'
                  }`}>
                  {step.number}
                </div>
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 className={`text-xl font-bold mb-3 font-['Oswald'] transition-colors duration-500 ${activeStep === index ? 'text-black' : 'text-gray-600'
                  }`}>
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Progress Dots */}
        <div className="flex justify-center gap-2 mt-10 lg:hidden">
          {steps.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveStep(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${activeStep === index ? 'bg-[#004aad] w-8' : 'bg-gray-300'
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
