import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul className='bg-black nav-links text-gray-200 text-xl willow-font p-5'>
        <Link to='/'>home</Link>
        <Link to='/about'>about</Link>
        <Link to='/projects'>projects</Link>
        <Link to='/skills'>skills</Link>
        <Link to='/contact'>contact</Link>
      </ul>
    </nav>
  );
};

export default Navbar;