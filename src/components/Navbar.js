import { NavLink } from 'react-router-dom';
import Logo from '../images/navLogo.png';

const Navbar = () => {
  return (
    <nav>
      <ul className='bg-black nav-links text-gray-200 text-lg willow-font p-5 pb-8'>
        <li><img src={Logo} className='main-logo' alt='logo' /></li>
        <li><NavLink end to='/'     style={({ isActive }) => ({ color: isActive ? '#d9b464' : '#edf2f7' })}>home</NavLink></li>
        <li><NavLink to='/about'    style={({ isActive }) => ({ color: isActive ? '#d9b464' : '#edf2f7' })}>about</NavLink></li>
        <li><NavLink to='/projects' style={({ isActive }) => ({ color: isActive ? '#d9b464' : '#edf2f7' })}>projects</NavLink></li>
        <li><NavLink to='/skills'   style={({ isActive }) => ({ color: isActive ? '#d9b464' : '#edf2f7' })}>skills</NavLink></li>
        <li><NavLink to='/contact'  style={({ isActive }) => ({ color: isActive ? '#d9b464' : '#edf2f7' })}>contact</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;