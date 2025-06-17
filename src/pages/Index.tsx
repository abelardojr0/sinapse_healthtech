
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Solutions from '../components/Solutions';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index: React.FC = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Solutions />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
};

export default Index;
