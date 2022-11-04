import { NavLink } from 'react-router-dom';

import HTML       from '../logos/html5_logo.png';
import CSS        from '../logos/css_logo.png';
import Bootstrap  from '../logos/bootstrap_logo.png';
import Tailwind   from '../logos/tailwind_logo.png';
import JavaScript from '../logos/JS_logo.png';
import ReactLogo  from '../logos/react_logo.png';
import Next       from '../logos/nextjs_logo.png';
import Node       from '../logos/nodejs_logo.png';
import Ruby       from '../logos/ruby_logo.png';
import Rails      from '../logos/rails_logo.png';
import Rest       from '../logos/rest_logo.png';
import PGSQL      from '../logos/postgres_logo.png';

const Skills = () => {
  return (
    <div className='w-full h-screen py-28 px-8'>
      <h1 className='willow-font text-xl md:text-3xl text-yellow-600 text-center pb-8'>[a_few_skills]</h1>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
        <div className='p-4 border border-gray-300 rounded-lg hover:scale-105 ease-in duration-200'>
          <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='auto'>
              <img src={HTML} className='skills-logo' alt='logo' />
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h3 className='text-gray-300'>HTML</h3>
            </div>
          </div>
        </div>

        <div className='p-4 border border-gray-300 rounded-lg hover:scale-105 ease-in duration-200'>
          <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='auto'>
              <img src={CSS} className='skills-logo' alt='logo' />
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h3 className='text-gray-300'>CSS</h3>
            </div>
          </div>
        </div>

        <div className='p-4 border border-gray-300 rounded-lg hover:scale-105 ease-in duration-200'>
          <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='auto'>
              <img src={Bootstrap} className='skills-logo' alt='logo' />
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h3 className='text-gray-300'>Bootstrap</h3>
            </div>
          </div>
        </div>

        <div className='p-4 border border-gray-300 rounded-lg hover:scale-105 ease-in duration-200'>
          <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='auto'>
              <img src={Tailwind} className='skills-logo' alt='logo' />
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h3 className='text-gray-300'>Tailwind CSS</h3>
            </div>
          </div>
        </div>

        <div className='p-4 border border-gray-300 rounded-lg hover:scale-105 ease-in duration-200'>
          <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='auto'>
              <img src={JavaScript} className='skills-logo' alt='logo' />
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h3 className='text-gray-300'>JavaScript</h3>
            </div>
          </div>
        </div>

        <div className='p-4 border border-gray-300 rounded-lg hover:scale-105 ease-in duration-200'>
          <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='auto'>
              <img src={ReactLogo} className='skills-logo' alt='logo' />
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h3 className='text-gray-300'>React.js</h3>
            </div>
          </div>
        </div>

        <div className='p-4 border border-gray-300 rounded-lg hover:scale-105 ease-in duration-200'>
          <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='auto'>
              <img src={Next} className='skills-logo' alt='logo' />
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h3 className='text-gray-300'>Next.js</h3>
            </div>
          </div>
        </div>

        <div className='p-4 border border-gray-300 rounded-lg hover:scale-105 ease-in duration-200'>
          <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='auto'>
              <img src={Node} className='skills-logo' alt='logo' />
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h3 className='text-gray-300'>Node.js</h3>
            </div>
          </div>
        </div>

        <div className='p-4 border border-gray-300 rounded-lg hover:scale-105 ease-in duration-200'>
          <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='auto'>
              <img src={Ruby} className='skills-logo' alt='logo' />
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h3 className='text-gray-300'>Ruby</h3>
            </div>
          </div>
        </div>

        <div className='p-4 border border-gray-300 rounded-lg hover:scale-105 ease-in duration-200'>
          <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='auto'>
              <img src={Rails} className='skills-logo' alt='logo' />
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h3 className='text-gray-300'>Rails</h3>
            </div>
          </div>
        </div>

        <div className='p-4 border border-gray-300 rounded-lg hover:scale-105 ease-in duration-200'>
          <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='auto'>
              <img src={Rest} className='skills-logo' alt='logo' />
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h3 className='text-gray-300'>RestFul API</h3>
            </div>
          </div>
        </div>

        <div className='p-4 border border-gray-300 rounded-lg hover:scale-105 ease-in duration-200'>
          <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='auto'>
              <img src={PGSQL} className='skills-logo' alt='logo' />
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h3 className='text-gray-300'>PostgreSQL</h3>
            </div>
          </div>
        </div>
      </div>
      <div className='view-link mt-10'>
        <li className='view-resume-style pb-10'><NavLink to='/resume'>view resume</NavLink></li>
      </div>
    </div>
  );
};

export default Skills;