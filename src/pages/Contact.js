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

  return(
    <div className='w-1/2'>
      <h1 className='willow-font text-3xl text-yellow-600 text-center pb-4'>[get_in_touch]</h1>
      <p className='willow-font text-gray-200 text-center pb-8'>C'mon what are you waiting for? Get in touch with me, and let's code!</p>
      <div className='flex justify-around w-1/2 mx-32 pt-6'>
        <a href='https://github.com/wlowrimore' target='_blank' className='text-gray-400 hover:text-purple-300 hover:cursor-pointer text-3xl' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}><FaGitSquare />{isHovering && <span className='text-sm'>github</span>}</a>
        <a href='https://linkedin.com/in/william-lowrimore-21778310' target='_blank' className='text-gray-400 hover:text-purple-300 hover:cursor-pointer text-3xl'><FaLinkedinIn /></a>
        <a href='https://williamlowrimore.com' target='_blank' className='text-gray-400 hover:text-purple-300 hover:cursor-pointer text-3xl'><FaGlobe /></a>
        <a href='mailto:wlowrimore@gmail.com' target='_blank' className='text-gray-400 hover:text-purple-300 hover:cursor-pointer text-3xl'><FaEnvelope /></a>
      </div>
    </div>
  );
};

export default Contact;