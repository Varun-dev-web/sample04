
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Templates from './components/Templates';
import WhyChooseUs from './components/WhyChooseUs';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Templates />
      <Pricing />
      <WhyChooseUs />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
