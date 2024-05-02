import logo from '../logo.svg';
import '../App.css';
import Header from '../components/header';
import Hero from '../components/hero';
import About from '../components/about';
import Featured from '../components/featured';
import Feature from '../components/feature';
import Benifit from '../components/benifit';
import CTA from '../components/Cta';
import Footer from '../components/footer';

function Home() {
  return (
   <>
    <Header />
    <main>
    <Hero />
    <About />
    <Featured />
    <Feature />
    <Benifit />
    {/* <CTA /> */}
    </main>
    <Footer />
   </>
  );
}

export default Home;