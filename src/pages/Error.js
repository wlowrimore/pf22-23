import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <section className='text-center'>
      <h2 className='text-[80px] willow-font text-yellow-600'>404</h2>
      <p className='text-3xl willow-font text-yellow-600 mb-12'>[page not found]</p>
      <Link to='/' className='text-lg tracking-widest text-purple-300 hover:text-blue-500'>back home</Link>
    </section>
  );
};

export default Error;