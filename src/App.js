import './App.css';
import Header  from './components/Header.js/Header';
import Banner from './components/Banner';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
   <>
    <Header />
    <Banner />
    <Skills />
    <Projects />
    <Contact />
    <Footer />
   </>
  );
}

export default App;
