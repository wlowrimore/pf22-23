import { FaReact } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='bg-gray-900 sticky'>
      <ul className='flex pt-6 pb-4 justify-around text-gray-400'>
        <p>William Lowrimore &copy; 2022 All Rights Reserved</p>
        <p className='flex'>Created with<FaReact className='m-1' />React.js</p>
        <p>https://github.com/wlowrimore</p>
      </ul>
    </div>
  );
};

export default Footer;