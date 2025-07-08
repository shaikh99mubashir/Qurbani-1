import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// import logo from '../logo.svg';
import '../App.css';
import Header from '../components/header';
import Hero from '../components/hero';
import About from '../components/about';
import Featured from '../components/featured';
import Feature from '../components/feature';
import Benifit from '../components/benifit';
import CTA from '../components/Cta';
import Footer from '../components/footer';
import ShopByCategory from '../components/Ecommerce/ShopByCategory';

function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#shop') {
      const el = document.getElementById('shop');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [location]);

  return (
   <>
    <Header />
    <main>
    <Hero />
    <div id="shop">
      <ShopByCategory/>
    </div>
    <About />
    <Featured />
    <Feature />
    <Benifit />
    <CTA />
    </main>
    <Footer />
   </>
  );
}

export default Home;