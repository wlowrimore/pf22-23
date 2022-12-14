import { useState }  from 'react';
import { NavLink }   from 'react-router-dom';
import { MdReorder } from 'react-icons/md';
import Logo          from '../images/navLogo.png';
import MenuItems     from '../components/MenuItems.js';

// Functionality of Navigation State
const Navbar = () => {
  const [active, setActive] = useState(false);

  const showMenu = () => {
    setActive(!active)
  }

  return (
    <div className='fixed w-full h-[55px] flex text-gray-200 justify-between text-lg willow-font bg-black p-4 items-center'>
      <div className='bg-black w-full flex justify-between items-center'>
        <img src={Logo} className='main-logo mx-4 mt-8' alt='logo'/>
        <div className=''>
          <MdReorder onClick={showMenu} className='w-10 h-10 mt-5 absolute right-4 top-1 md:invisible' />
        </div>
      </div>

      <nav className='flex flex-col'>
        <ul className='md:flex hidden gap-8 px-8 bg-white-10'>
          <li><NavLink end to='/'     style={({ isActive }) => ({ color: isActive ? '#d9b464' : '#edf2f7' })}>home</NavLink></li>
          <li><NavLink to='/about'    style={({ isActive }) => ({ color: isActive ? '#d9b464' : '#edf2f7' })}>about</NavLink></li>
          <li><NavLink to='/projects' style={({ isActive }) => ({ color: isActive ? '#d9b464' : '#edf2f7' })}>projects</NavLink></li>
          <li><NavLink to='/skills'   style={({ isActive }) => ({ color: isActive ? '#d9b464' : '#edf2f7' })}>skills</NavLink></li>
          <li><NavLink to='/contact'  style={({ isActive }) => ({ color: isActive ? '#d9b464' : '#edf2f7' })}>contact</NavLink></li>
        </ul>
        <MenuItems showMenu={showMenu} active={active} />
      </nav>
    </div>
  );
};

export default Navbar;