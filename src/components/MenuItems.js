import { NavLink } from 'react-router-dom';
import { MdClose } from 'react-icons/md';

const MenuItems = ({showMenu, active}) => {
  return (
    <ul className={active ? 'w-1/2 h-96 flex flex-col absolute bottom-[-18em] right-[2%] bg-purple-300/20 rounded-md backdrop-blur-sm justify-center items-center text-lg gap-4 md:hidden' : 'hidden'}>
      <MdClose onClick={showMenu} className='absolute top-10 right-5 text-black border border-black bg-purple-200 scale-150 font-bold'/>
      <li><NavLink end to='/'     style={({ isActive }) => ({ color: isActive ? '#d9b464' : '#edf2f7' })}>home</NavLink></li>
      <li><NavLink to='/about'    style={({ isActive }) => ({ color: isActive ? '#d9b464' : '#edf2f7' })}>about</NavLink></li>
      <li><NavLink to='/projects' style={({ isActive }) => ({ color: isActive ? '#d9b464' : '#edf2f7' })}>projects</NavLink></li>
      <li><NavLink to='/skills'   style={({ isActive }) => ({ color: isActive ? '#d9b464' : '#edf2f7' })}>skills</NavLink></li>
      <li><NavLink to='/contact'  style={({ isActive }) => ({ color: isActive ? '#d9b464' : '#edf2f7' })}>contact</NavLink></li>
      <li><NavLink to='/resume'   style={({ isActive }) => ({ color: isActive ? '#d9b464' : '#edf2f7' })}>resume</NavLink></li>
    </ul>
  )
}

export default MenuItems