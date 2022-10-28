import './App.css';
import { Routes, Route } from "react-router-dom";

import Navbar       from './components/Navbar';
import Home         from './pages/Home';
import About        from './pages/About';
import Projects     from './pages/Projects';
import Skills       from './pages/Skills';
import Contact      from './pages/Contact';
import ProjectData  from './pages/ProjectData';
import Error        from './pages/Error';
import Footer       from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <div className="bg-black flex h-screen justify-center items-center">
        <div className='intro-box w-100 h-[90vh] mx-8'>
          
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/skills'   element={<Skills />} />
            <Route path='/contact'  element={<Contact />} />
            <Route path='/all-projects' element={<ProjectData />} />
            <Route path='*'        element={<Error />} />
          </Routes>
          
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
