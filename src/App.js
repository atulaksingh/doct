import logo from './logo.svg';
import './App.css';
import Hero from './components/Home/Hero';
import Hero2 from './components/Home/Appointment';
import Appointment from './components/Home/Appointment';
import TopRanked from './components/Home/TopRanked';
import PS from './components/Home/PS';
import OurServices from './components/Home/OurServices';
import Testimonials from './components/Home/Testimonials';
import ContactUs from './components/Home/ContactUs';
import Map from './components/Home/Map';
import Footer from './components/Shared/Footer';
import Header from './components/Shared/Header';

function App() {
  return (
    <div className="App">
    <Header />
     <Hero />
     <Appointment />
     <TopRanked />
     <PS />
     <OurServices />
     <Testimonials />
     <ContactUs />
     <Map />
     <Footer />
    </div>
  );
}

export default App;
