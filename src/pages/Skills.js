const Skills = () => {
  return (
    <div className='w-1/3'>
      <h1 className='willow-font text-3xl text-yellow-600 pb-8'>[a_few_skills]</h1>
      <div className='flex justify-between'>
        <ul className='text-gray-400 text-xl text-normal tracking-widest'>
          <li>HTML</li>
          <li>CSS</li>
          <li>Bootstrap</li>
          <li>TailwindCSS</li>
          <li>JavaScript</li>
          <li>React.js</li>
        </ul>
           
        <ul className='text-gray-400 text-xl text-normal tracking-widest'>
          <li>Next.js</li>
          <li>Node.js</li>
          <li>Ruby</li>
          <li>Rails</li>
          <li>Restful APIs</li>
          <li>Postgresql</li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;