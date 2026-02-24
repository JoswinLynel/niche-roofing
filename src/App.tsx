import AnnouncementBar from './sections/AnnouncementBar';
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import Services from './sections/Services';
import About from './sections/About';
import Process from './sections/Process';
import Projects from './sections/Projects';
import Testimonials from './sections/Testimonials';
import CTA from './sections/CTA';
import Blog from './sections/Blog';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <AnnouncementBar />
      <Navigation />
      <main>
        <Hero />
        <Services />
        <About />
        <Process />
        <Projects />
        <Testimonials />
        <CTA />
        <Blog />
      </main>
      <Footer />
    </div>
  );
}

export default App;
