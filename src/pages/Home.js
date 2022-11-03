import { NavLink } from 'react-router-dom';
import Selfie from '../images/pfPic.jpg';

const Home = () => {
  return (
    <div className="flex flex-col w-full px-6 items-center content-center">
      <h2 className='text-gray-400 text-3xl text-center font-normal willow-font tracking-widest'>William Lowrimore</h2>
      <p className='willow-font text-yellow-600 mt-2'>[software_developer]</p>
      <div className='py-8'>
        <img className='object-fill h-48 w-48' src={Selfie} alt='selfie' />
      </div>
      <div className='view-link mt-6 text-center'>
        <li className='view-resume-style'><NavLink to='/resume'>view resume</NavLink></li>
      </div>
    </div>
  );
};

export default Home;