import { useState } from 'react';
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
      <div className='w-1/2 h-100 pb-12'>
        <div className='text-center'>
          <h1 className='willow-font text-3xl text-yellow-600 pb-8'>[get_in_touch]</h1>
          <p className='willow-font text-gray-200'>C'mon what are you waiting for? Get in touch with me, and let's code!</p>
        </div>
      </div>

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