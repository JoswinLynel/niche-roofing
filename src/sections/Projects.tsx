import { useEffect, useRef, useState } from 'react';
import { MapPin, ArrowRight, ExternalLink } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Residential Shingle Replacement',
    location: 'Maple Grove, MN',
    category: 'Residential',
    image: '/project-1.jpg',
  },
  {
    id: 2,
    title: 'Commercial Flat Roof Installation',
    location: 'Minneapolis, MN',
    category: 'Commercial',
    image: '/project-2.jpg',
  },
  {
    id: 3,
    title: 'Storm Damage Restoration',
    location: 'St. Paul, MN',
    category: 'Emergency Repair',
    image: '/project-3.jpg',
  },
  {
    id: 4,
    title: 'Historic Home Roof Restoration',
    location: 'Stillwater, MN',
    category: 'Restoration',
    image: '/project-4.jpg',
  },
  {
    id: 5,
    title: 'New Construction Roofing',
    location: 'Eden Prairie, MN',
    category: 'New Construction',
    image: '/project-5.jpg',
  },
  {
    id: 6,
    title: 'Gutter Replacement Project',
    location: 'Bloomington, MN',
    category: 'Gutter Services',
    image: '/project-6.jpg',
  },
];

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-24 bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`flex flex-col md:flex-row md:items-end md:justify-between mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
          <div>
            <span className="section-label mb-4 block">OUR WORK</span>
            <h2 className="section-title mb-4 md:mb-0">
              Recent Projects
            </h2>
          </div>
          <p className="text-gray-600 max-w-md">
            See the quality and craftsmanship that sets us apart. Every project is a testament to our commitment to excellence.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative rounded-xl overflow-hidden cursor-pointer transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
              style={{
                transitionDelay: `${index * 100 + 200}ms`,
                transform: hoveredProject === project.id ? 'translateY(-8px)' : 'translateY(0)'
              }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Image */}
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

              {/* Category Badge */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-[#004aad] text-white text-xs font-semibold rounded-full">
                  {project.category}
                </span>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="transform transition-all duration-500 group-hover:translate-y-0 translate-y-4">
                  <div className="flex items-center gap-1 text-white/80 text-sm mb-2">
                    <MapPin className="w-4 h-4" />
                    {project.location}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 font-['Oswald']">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    <button className="flex items-center gap-2 text-[#004aad] text-sm font-semibold hover:underline">
                      View Details
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className={`mt-12 text-center transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
          <a
            href="#contact"
            className="btn-secondary"
          >
            View All Projects
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
