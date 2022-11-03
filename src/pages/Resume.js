import { NavLink } from 'react-router-dom';

const Resume = () => {
  return (
    <div className='w-100 h-screen py-12 px-8'>
      <h1 className='willow-font text-3xl text-yellow-600 pb-8'>[resume]</h1>
      <div className='bg-gray-100 p-1 border rounded-md'>
        <div className='w-100 bg-gray-700 text-gray-100 p-4 mb-2'>
          <h1 className='text-4xl font-normal '>William Lowrimore</h1>
          <h3 className='font-normal tracking-widest'>100 Graeme Dr. | Nashville, TN 37214 | 901.568.7941<br/>  
            <a href='mailto: wlowrimore@gmail.com' 
            className='text-purple-300 font-light hover:text-yellow-600'>
            wlowrimore@gmail.com</a>
          </h3>
        </div>

        <div className='px-4 py-2'>
          <h2 className='text-2xl font-semibold tracking-wide py-1'>Objective</h2>
          <p className='pl-6 pr-12 indent-8'>I am a certified full-stack developer with a passion for front-end development.  I am currently seeking a career 
            in front-end development with an emphasis in React.js.  I possess many of the back-end skills that make a front-end 
            developer’s role more efficient. I feel as though I am a perfect candidate for this position.
          </p>
        </div>

        <div className='px-4 py-2'>
          <h2 className='text-2xl font-semibold tracking-wide py-1'>Education</h2>
          <h3 className='font-semibold tracking-wide px-6'>Vanderbilt University Full Stack Coding Bootcamp - <span className='text-gray-400 font-normal'>Nashville, TN</span></h3>
          <p className='indent-14 italic pb-4'>MERN Stack Certification | May 2022</p>
          <h3 className='font-semibold tracking-wide px-6'>Hernando High School - <span className='text-gray-400 font-normal'>Hernando, MS</span></h3>
          <p className='indent-14 italic'>Graduate | 1995</p>
        </div>

        <div className='px-4 py-2'>
          <h2 className='text-2xl font-semibold tracking-wide py-1'>Relevant Coursework</h2>
          <ul className='list-disc list-inside indent-6'>
            <li>HTML</li>
            <li>CSS | Bootstrap | TailwindCSS | Sass</li>
            <li>JavaScript | ES6</li>
            <li>React.JS</li>
            <li>Next.JS</li>
            <li>Express.JS</li>
            <li>Node.JS</li>
            <li>SQL | SQLite3 | PostgreSQL</li>
            <li>RestFUL API</li>  
          </ul>
        </div>

        <div className='px-4 py-2'>
          <h2 className='text-2xl font-semibold tracking-wide py-1'>Skills</h2>
          <ul className='list-disc list-inside indent-6'>
            <li>Time Management</li>
            <li>Excellent Communication</li>
            <li>Critical Thinking | Problem Solving</li>
            <li>Agile Development</li>
          </ul>
        </div>

        <div className='px-4 py-2'>
          <h2 className='text-2xl font-semibold tracking-wide'>Summary of Contracted Work</h2>
          <p className='pl-6 pr-12 indent-8 mb-6'>
            I recently worked as Junior Software Developer for Coroutine where I was tasked with integrating the OHIF (Open Health 
            Imaging Foundation) Image Viewer into a React.JS interface, as well as contributing to an AARP Ruby on Rails platform. 
          </p>
        </div>

      </div>
      <div className='view-link mt-10'>
        <li className='view-link-style'><NavLink to='/'>back to home</NavLink></li>
      </div>
    </div>
  );
}

export default Resume
