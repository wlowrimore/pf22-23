import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaGitSquare } from 'react-icons/fa';
import { FaLinkedinIn }  from 'react-icons/fa';
import { FaGlobe }  from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <>
      <div className='max-w-[800px] w-full p-8'>
        <div className='text-center w-full'>
          <h1 className='willow-font text-3xl text-yellow-600 pb-6'>[get_in_touch]</h1>
          <p className='willow-font text-gray-200'>C'mon what are you waiting for? Get in touch!</p>
        </div>
      </div>

      <form method='POST' action='https://getform.io/f/6abdad5b-4a46-407f-bb7c-c5c283ad82b7' className='max-w-[800px] w-100 mx-4 bg-gray-800 p-8 mb-12 rounded-md shadow-md shadow-gray-700 flex flex-col justify-center items-center'>
        <h2 className='willow-font text-center text-gray-200 mb-4'>Leave a message here, or contact me via the links below.</h2>
        <input className='max-w-[550px] w-full my-2 px-2 py-1 bg-[#e4e9f5]' type='text' name='name' placeholder='name' />
        <input className='max-w-[550px] w-full my-2 px-2 py-1 bg-[#e4e9f5]' type='email' placeholder='email' />
        <textarea className='max-w-[550px] w-full my-2 px-2 py-1 bg-[#e4e9f5]' rows='10' name='message' placeholder='message' />
        <button className='bg-[#e4e9f5] text-black text-xl font-bold px-4 mt-6 rounded-md hover:bg-purple-300 ease-in duration-200'>
          Leave Message
        </button>
        <div className='view-link mt-10'>
        <li className='view-link-style'><NavLink to='/resume'>view resume</NavLink></li>
      </div>
      </form>

      <div className='grid grid-cols-12 h-[50px] w-100 ml-14'>
        <div className='grid col-span-3'>
          <a href='https://github.com/wlowrimore' 
            target='_blank' 
            className='text-gray-400 hover:text-purple-300 hover:cursor-pointer text-3xl' 
            onMouseOver={handleMouseOver} 
            onMouseOut={handleMouseOut}>
            <FaGitSquare />
            {isHovering && <p className='text-xs pt-3'>github</p>}
          </a>
        </div>
        <div className='grid col-span-3'>
          <a href='https://linkedin.com/in/william-lowrimore-21778310' 
            target='_blank' 
            className='text-gray-400 hover:text-purple-300 hover:cursor-pointer text-3xl'
            onMouseOver={handleMouseOver} 
            onMouseOut={handleMouseOut}>
            <FaLinkedinIn />
            {isHovering && <p className='text-xs pt-3'>linkedin</p>}
          </a>
        </div>
        <div className='grid col-span-3'>
          <a href='https://williamlowrimore.com' 
            target='_blank' 
            className='text-gray-400 hover:text-purple-300 hover:cursor-pointer text-3xl' 
            onMouseOver={handleMouseOver} 
            onMouseOut={handleMouseOut}>
            <FaGlobe />
            {isHovering && <p className='text-xs pt-3'>my site</p>}
          </a>
        </div>
        <div className='grid col-span-1'>
          <a href='mailto:wlowrimore@gmail.com' 
            target='_blank' 
            className='text-gray-400 hover:text-purple-300 hover:cursor-pointer text-3xl' 
            onMouseOver={handleMouseOver} 
            onMouseOut={handleMouseOut}>
            <FaEnvelope />
            {isHovering && <p className='text-xs pt-3'>email</p>}
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;