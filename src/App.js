import './App.css';
import Header  from './components/Header';
import Landing from './components/Landing';
import About   from './components/About';
import Skills  from './components/Skills';
import Contact from './components/Contact';
import Footer  from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <div className="bg-black h-screen flex justify-center items-center">
        <div className='intro-box w-100 px-20'>
          
            {/* <Landing /> */}
            {/* <About /> */}
            {/* <Skills /> */}
            <Contact />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
