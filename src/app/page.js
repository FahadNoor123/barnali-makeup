import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import AdditionalServices from './components/AdditionalServices';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import ScrollAnimator from './components/ScrollAnimator';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <AdditionalServices />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
      <BackToTop />
      <ScrollAnimator />
    </>
  );
}
