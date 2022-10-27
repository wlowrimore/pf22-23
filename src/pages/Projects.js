import { NavLink } from 'react-router-dom';
import sayrePic from '../sayrePic.png'
import aarpPic from '../aarpPic.png';
import weatherPic from '../weatherPic.png';
import bountyPic from '../bountyPic.png';

const Projects = () => {
  return (
    <div className='flex flex-wrap content-center mx-12'>
      <div className='flex-col px-12 mx-8 mb-6'>
        <h1 className='willow-font text-3xl text-yellow-600 pb-4'>[my_work]</h1>
        <p className='text-gray-400 willow-font text-normal tracking-widest'>Here are a few examples of some projects I have either created solely, or have been involved in developing.</p>
      </div>
      <div id='card-contaner' className='px-8'>
        <div id='card' className='flex flex-wrap py-2 content-center px-4 gap-8'>
          <img src={sayrePic} className='object-contain' alt='sayre photography' />
          <img src={weatherPic} className='object-contain' alt='weather app' />
          <img src={bountyPic} className='object-contain' alt='bounty book' />
          <img src={aarpPic} className='object-contain' alt='aarp site' />
        </div>
      </div>
        <div className='view-link mt-10'>
          <li className='view-link-style'><NavLink to='/about'>view more projects</NavLink></li>
        </div>
    </div>
  );
};

export default Projects;
      
      