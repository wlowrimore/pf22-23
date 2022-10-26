import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul className='bg-black nav-links text-gray-200 text-lg willow-font p-5'>
        <li><NavLink activeClassName='active' end to='/'>home</NavLink></li>
        <li><NavLink activeClassName='active' to='/about'>about</NavLink></li>
        <li><NavLink activeClassName='active' to='/projects'>projects</NavLink></li>
        <li><NavLink activeClassName='active' to='/skills'>skills</NavLink></li>
        <li><NavLink activeClassName='active' to='/contact'>contact</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;