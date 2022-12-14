import { FaReact } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='bg-gray-900 sticky'>
      <ul className='flex flex-wrap pt-6 pb-4 px-4 text-center justify-around text-gray-400'>
        <p>William Lowrimore &copy; 2022 All Rights Reserved</p>
        <p className='flex'>Created with<FaReact className='m-1' />React.js</p>
        <p className='flex'>Photography by Sayre Berman &copy; 2022</p>
        <p>https://github.com/wlowrimore</p>
      </ul>
    </div>
  );
};

export default Footer;