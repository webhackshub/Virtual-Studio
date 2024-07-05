import React from 'react'
import LocomotiveScroll from 'locomotive-scroll';
import Home from './Pages/Home'
import About from './Pages/About'
import Services from './Pages/Services';
import Works from './Pages/Works';
import Portfolio from './Pages/Portfolio';
import Pricing from './Pages/Pricing';
import Testimonials from './Pages/Testimonials';
import FAQs from './Pages/FAQs';
import Contact from './Pages/Contact';
import Footer from './Pages/Footer';

const App = () => {

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <>
      <Home />
      <About />
      <Services />
      <Works />
      <Portfolio />
      {/* <Pricing /> */}
      <Testimonials />
      <FAQs />
      <Contact />
      <Footer />
    </>
  )
}

export default App