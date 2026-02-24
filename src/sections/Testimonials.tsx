import { useEffect, useRef, useState } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    role: 'Homeowner, Forest Gate',
    image: '/testimonial-1.jpg',
    quote: 'Niche Roofing transformed our home. Their team was professional, efficient, and left our property spotless. The new roof looks amazing and we have already noticed energy savings.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Property Manager, Stratford',
    image: '/testimonial-2.jpg',
    quote: 'We have used Niche Roofing for multiple commercial properties. Their attention to detail and responsive service make them our go-to roofing contractor. Highly recommended.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Jennifer Adams',
    role: 'Homeowner, Ilford',
    image: '/testimonial-3.jpg',
    quote: 'After storm damage, Niche Roofing responded immediately. They worked with our insurance and had our roof repaired within a week. Exceptional service during a stressful time.',
    rating: 5,
  },
];

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

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
    const interval = setInterval(() => {
      goToNext();
    }, 6000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  const goToNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToPrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="py-24 bg-[#fafafa] relative overflow-hidden"
    >
      {/* Background Quote */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5">
        <Quote className="w-96 h-96 text-[#004aad]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
          <span className="section-label mb-4 block">TESTIMONIALS</span>
          <h2 className="section-title mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 text-lg">
            Do not just take our word for it. Here is what homeowners and businesses say about working with us.
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className={`relative max-w-4xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
          {/* Main Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative">
            {/* Quote Icon */}
            <div className="absolute -top-6 left-8 w-12 h-12 bg-[#004aad] rounded-full flex items-center justify-center">
              <Quote className="w-6 h-6 text-black" />
            </div>

            {/* Content */}
            <div className="pt-4">
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#004aad] text-[#004aad]" />
                ))}
              </div>

              {/* Quote */}
              <blockquote
                className={`text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 transition-all duration-500 ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
                  }`}
              >
                "{testimonials[activeIndex].quote}"
              </blockquote>

              {/* Author */}
              <div
                className={`flex items-center gap-4 transition-all duration-500 ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
                  }`}
              >
                <img
                  src={testimonials[activeIndex].image}
                  alt={testimonials[activeIndex].name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-[#004aad]"
                />
                <div>
                  <p className="font-bold text-black text-lg">{testimonials[activeIndex].name}</p>
                  <p className="text-gray-500">{testimonials[activeIndex].role}</p>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-6">
              <button
                onClick={goToPrev}
                className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#004aad] transition-colors group"
              >
                <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-black" />
              </button>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-6">
              <button
                onClick={goToNext}
                className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#004aad] transition-colors group"
              >
                <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-black" />
              </button>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isAnimating) {
                    setIsAnimating(true);
                    setActiveIndex(index);
                    setTimeout(() => setIsAnimating(false), 500);
                  }
                }}
                className={`transition-all duration-300 rounded-full ${activeIndex === index
                  ? 'w-8 h-3 bg-[#004aad]'
                  : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
