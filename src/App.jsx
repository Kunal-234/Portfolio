
import './App.css';
import About from './Components/About/About';
import Home from './Components/Home/Home';
import Services from './Components/Services/Services';
import Project from './Components/Project/Project';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div className="container">
      {/* <Navbar/> */}
      <Home/>
      <About/>
      <Services/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
