import Selfie from '../images/pfPic.jpg';

const Home = () => {
  return (
    <div className="flex flex-col items-center content-center">
      <h2 className='text-gray-400 text-3xl font-normal willow-font tracking-widest'>William Lowrimore</h2>
      <p className='willow-font text-yellow-600 mt-2'>[software_developer]</p>
      <div className='py-8 '>
        <img className='selfie' src={Selfie} alt='selfie' />
      </div>
    </div>
  );
};

export default Home;