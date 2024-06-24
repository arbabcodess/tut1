import './App.css';
import Contact from './sections/Contact/Contact.jsx';
import Hero from './sections/Hero.jsx';
import Carousel from './sections/Projects.jsx';
import Skills from './sections/Skills/Skills.jsx';
import Footer from './sections/Footer/Footer.jsx';

const slides = [
  {
    image: '/images/fresh-burger.png',
    link: 'https://github.com/'
  },
  {
    image: '/images/fitlift.png',
    link: 'https://github.com/'
  },
  {
    image: '/images/hipsster.png',
    link: 'https://github.com/'
  },
];

function App() {
  return (
    <div className="App">
      <Hero />
      <Carousel slides={slides} />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
