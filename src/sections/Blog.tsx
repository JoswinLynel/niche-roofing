import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Clock, Tag } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: '5 Signs Your Roof Needs Replacement',
    category: 'Maintenance',
    excerpt: 'Do not wait for leaks. Learn the warning signs that indicate it is time for a new roof and how to spot them early.',
    image: '/blog-1.jpg',
    date: 'March 15, 2024',
    readTime: '5 min read',
  },
  {
    id: 2,
    title: 'How to Choose the Right Roofing Material',
    category: 'Guide',
    excerpt: 'Compare asphalt shingles, metal, tile, and flat roofing options to find the perfect fit for your home and budget.',
    image: '/blog-2.jpg',
    date: 'March 10, 2024',
    readTime: '8 min read',
  },
  {
    id: 3,
    title: 'Preparing Your Roof for Storm Season',
    category: 'Tips',
    excerpt: 'Essential maintenance tips to protect your roof from wind, hail, and heavy rain during severe weather.',
    image: '/blog-3.jpg',
    date: 'March 5, 2024',
    readTime: '6 min read',
  },
];

const Blog = () => {
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="blog"
      ref={sectionRef}
      className="py-24 bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`flex flex-col md:flex-row md:items-end md:justify-between mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
          <div>
            <span className="section-label mb-4 block">OUR BLOG</span>
            <h2 className="section-title mb-4 md:mb-0">
              Latest News & Tips
            </h2>
          </div>
          <p className="text-gray-600 max-w-md">
            Expert advice on roofing maintenance, trends, and homeowner tips to keep your roof in top condition.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={post.id}
              className={`group bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
              style={{ transitionDelay: `${index * 150 + 200}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-[#004aad] text-white text-xs font-semibold rounded-full">
                    <Tag className="w-3 h-3" />
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta */}
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <span>{post.date}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-black mb-3 font-['Oswald'] group-hover:text-[#004aad] transition-colors line-clamp-2">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                {/* Read More Link */}
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-black group/link"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* View All CTA */}
        <div className={`mt-12 text-center transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
          <a
            href="#"
            className="btn-secondary"
          >
            View All Articles
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
