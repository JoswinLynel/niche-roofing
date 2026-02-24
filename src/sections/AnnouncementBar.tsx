import { ArrowRight } from 'lucide-react';

const AnnouncementBar = () => {
  return (
    <div className="w-full bg-[#004aad] py-2.5 px-4 relative overflow-hidden border-b-2 border-black/10">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 text-center">
        <span className="text-xs sm:text-sm font-medium text-white leading-tight">
          Free estimates on all roofing projects! Call 07776 334884
        </span>
        <a
          href="#contact"
          className="text-xs sm:text-sm font-semibold text-white underline underline-offset-2 hover:no-underline inline-flex items-center gap-1 group whitespace-nowrap"
        >
          Get Started
          <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
      {/* Shimmer effect */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)',
          backgroundSize: '200% 100%',
          animation: 'shimmer 3s linear infinite'
        }}
      />
    </div>
  );
};

export default AnnouncementBar;
