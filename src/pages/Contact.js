import { FaGitSquare } from 'react-icons/fa';
import { FaLinkedinIn }  from 'react-icons/fa';
import { FaGlobe }  from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return(
    <div>
      <h1 className='willow-font text-3xl text-yellow-600 pb-8'>[get_in_touch]</h1>
      <div className='flex justify-between'>
        <p className='text-gray-400 text-3xl'><FaGitSquare /></p>
        <p className='text-gray-400 text-3xl'><FaLinkedinIn /></p>
        <p className='text-gray-400 text-3xl'><FaGlobe /></p>
        <p className='text-gray-400 text-3xl'><FaEnvelope /></p>
      </div>
    </div>
  );
};

export default Contact;