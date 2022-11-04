export default function AllProjects(props) {

  // Layout for individual site image cards
   return (
    <div>
      <div className='pb-4'>
        <img src={props.img} className='object-contain  bg-black' alt="example" />
      </div>
      <div className='w-100 text-center'>
        <a href={props.repo} 
          target='_blank' 
          rel='noopener noreferrer' 
          className='text-lg tracking-widest text-gray-300 hover:text-purple-300 hover:cursor-pointer'>visit repository
          <span className='px-2'>|</span>
        </a>
        <a href={props.live}
          target='_blank' 
          rel='noopener noreferrer' 
          className='text-lg tracking-widest text-gray-300 hover:text-purple-300 hover:cursor-pointer'>see it in action
        </a>
      </div>
    </div>
  );
};