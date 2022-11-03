import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div className='w-100 h-screen py-24 px-8'>
      <h1 className='willow-font text-xl md:text-3xl text-center text-yellow-600 pb-8'>[about_me]</h1>
      <p className='text-gray-400 text-xl text-normal tracking-widest'>
        Hi, my name is William Lowrimore. I attended Vanderbilt University's Full Stack Coding
        Bootcamp, where I graduated with a cerfification in the MERN stack.  As I weaved my way
        through the program, learning and implementing front-end and back-end skills, I found 
        that my strong suite and passion were drawing me heavily into the front-end aspects of 
        software development.<br/><br/>

        Since completion of the full-stack bootcamp, I have been coding everyday.  I have been 
        broadening my knowledge and skills beyond that of the curriculum required for graduation.
        Although I am drawn more toward front-end development, I still find it extremely important 
        to continue strengthening my back-end skills as well.<br/><br/>

        To become fluent in only front-end development would leave a back-end developer (working on 
        the same project) at a disadvantage. Whether it be a collaborative or solo effort, I believe 
        that the Agile approach, proper naming conventions, and communication should be priorities 
        from beginning to end.<br/><br/>

        I make it a personal goal to learn a new skill everyday, as well as, revisiting previous 
        challenges that may have been a struggle to overcome.  I once had a teacher who said, "
        Practice doesn't make perfect...Perfect practice makes perfect.".  I liked that, and 
        decided to live by that in all that I do.
      </p>
      <div className='view-link mt-10'>
        <li className='view-resume-style pb-10'><NavLink to='/resume'>view resume</NavLink></li>
      </div>
    </div>
  );
};

export default About;