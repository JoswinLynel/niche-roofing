import { useEffect, useRef } from 'react';
import { ArrowRight, Phone } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current || !contentRef.current) return;
      const scrollY = window.scrollY;
      const heroHeight = heroRef.current.offsetHeight;

      if (scrollY < heroHeight) {
        const parallaxValue = scrollY * 0.5;
        const opacityValue = 1 - (scrollY / heroHeight) * 1.5;

        contentRef.current.style.transform = `translateY(${-parallaxValue}px)`;
        contentRef.current.style.opacity = `${Math.max(0, opacityValue)}`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden pt-32"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-bg.jpg"
          alt="Professional roofing work"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/40" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-[#004aad]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-[#004aad]/3 rounded-full blur-3xl" />

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
      >
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#004aad]/10 rounded-full mb-6 animate-fade-in">
            <span className="w-2 h-2 bg-[#004aad] rounded-full animate-pulse" />
            <span className="text-sm font-medium text-gray-700">
              4.6 ★ Rating — 9 Reviews
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-6 leading-tight">
            Expert Roofing{' '}
            <span className="text-[#004aad]">Solutions</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-xl">
            Protecting your home with quality craftsmanship and durable materials.
            Conisbrough's trusted roofing service — Open · Closes 5 pm.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <a
              href="#contact"
              className="btn-primary text-base px-8 py-4"
            >
              Get Free Estimate
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#projects"
              className="btn-secondary text-base px-8 py-4"
            >
              View Our Work
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-[#004aad] rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span>Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-[#004aad] rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span>5-Year Warranty</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-[#004aad] rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span>Reliable Service</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Contact Card */}
      <div className="absolute bottom-10 right-4 lg:right-10 z-20 hidden md:block">
        <div className="bg-white rounded-xl shadow-2xl p-6 max-w-xs animate-fade-up" style={{ animationDelay: '0.5s' }}>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 bg-[#004aad] rounded-full flex items-center justify-center">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Call Us</p>
              <p className="text-lg font-bold text-black">07776 334884</p>
            </div>
          </div>
          <p className="text-sm text-gray-600">Available during business hours</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
