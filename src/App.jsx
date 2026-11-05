
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './Navbar';
import HomePage from './HomePage';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Form from './Form';  
import Certifications from './Certifications';

function App() {

  return (
   <>
      <Navbar/>
      <HomePage/>
      <About/>
      <Skills/>
      <Projects/>
      <Certifications/>
      <Form/>
   </>
  )
}

export default App
