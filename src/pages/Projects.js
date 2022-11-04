import { NavLink } from 'react-router-dom';

import sayrePic   from '../images/sayrePic.png'
import aarpPic    from '../images/aarpPic.png';
import weatherPic from '../images/weatherPic.png';

const Projects = () => {
  return (
    <div className='w-full h-screen py-24 md:py-48 px-8'>
      <div className='px-1 pb-8'>
        <h1 className='willow-font text-xl md:text-3xl text-center text-yellow-600 pb-4'>[my_work]</h1>
        <p className='text-gray-200 text-xl tracking-wider'>
          Here are a few featured projects I have either created solely, or have been involved with the development process.
        </p>
      </div>
      <div className='flex w-100'>
        <div id='card-contaner' className='flex flex-wrap w-full content-center px-1 gap-6'>
          <div id='card'>
            <img src={sayrePic} className='object-contain' alt='sayre photography' />
            <div className='text-center pb-6'>
              <a href='https://github.com/wlowrimore/berman_photo_6_22'
                target='_blank' 
                rel='noopener noreferrer' 
                className='text-sm tracking-widest text-gray-300 hover:text-purple-300 hover:cursor-pointer'>visit repository
                <span className='px-2'>|</span>
              </a>
              <a href="https://wlowrimore.github.io/berman_photo_6_22/index.html"
                target='_blank' 
                rel='noopener noreferrer' 
                className='text-sm tracking-widest text-gray-300 hover:text-purple-300 hover:cursor-pointer'>see it in action
              </a>
            </div>
          </div>

          <div>
            <img src={weatherPic} className='object-contain' alt='weather app' />
            <div className='text-center pb-6'>
              <a href='https://github.com/wlowrimore/vandy_bc_weather_dash_chlng_06_2022'
                target='_blank' 
                rel='noopener noreferrer' 
                className='text-sm tracking-widest text-gray-300 hover:text-purple-300 hover:cursor-pointer'>visit repository
                <span className='px-2'>|</span>
              </a>
              <a href="https://wlowrimore.github.io/vandy_bc_weather_dash_chlng_06_2022/"
                target='_blank' 
                rel='noopener noreferrer' 
                className='text-sm tracking-widest text-gray-300 hover:text-purple-300 hover:cursor-pointer'>see it in action
              </a>
            </div>
          </div>

          <div>
            <img src={aarpPic} className='object-contain' alt='aarp site' />
            <div className='text-center pb-6'>
              <p className='italic text-red-500 tracking-widest'>private corporate site</p>
            </div>
          </div>
        </div> 
      </div>
      <div className='view-link mt-10'>
        <li className='view-link-style'><NavLink to='/all-projects'>view more projects</NavLink></li>
      </div> 
      <div className='view-link mt-2'>
        <li className='view-resume-style pb-10'><NavLink to='/resume'>view resume</NavLink></li>
      </div>      
    </div>
  );
};

export default Projects;
      
      