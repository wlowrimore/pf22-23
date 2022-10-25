import './App.css';
import Landing from './components/Landing';
import Header  from './components/Header';
import Footer  from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <div className="bg-black h-screen flex justify-center items-center">
        <div className='intro-box w-100'>
          
            <Landing />
          
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
