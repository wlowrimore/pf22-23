import React from 'react';
import AllProjects from './AllProjects';
import { NavLink } from 'react-router-dom';


export default function ProjectData() {
  return (
    <div className='h-screen w-5/6 md:w-full py-24'>
      <h1 className='willow-font text-xl md:text-3xl text-yellow-600 text-center pb-8'>[my_work].cont</h1>
      <div className='grid grid-cols-1 gap-8'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 place-self-center'>
          <AllProjects
            id = 'code'
            img = {require('../images/codePic.png')}
            repo = "https://github.com/wlowrimore/vandy_bc_code_quiz_chlng4_2022"
            live = "https://wlowrimore.github.io/vandy_bc_code_quiz_chlng4_2022/"
          />
          <AllProjects 
            id = 'tech'
            img = {require('../images/techPic.png')}
            repo = 'Vandy-bc-2022-MVC-Tech-Blog-Chlng-14'
            live = "https://serene-springs-59438.herokuapp.com/"
          />
          <AllProjects 
            id = 'bounty'
            img = {require('../images/bountyPic.png')}
            repo = 'https://github.com/wlowrimore/vandy_bc_project3_bounty-book_MERN_2022'
            live = "https://bountybook.herokuapp.com/"
          />
          <AllProjects 
            id = 'budget'
            img = {require('../images/budgetPic.png')}
            repo = 'https://github.com/wlowrimore/Vandy-bc-PWA-Budget-Tracker-Chlng-19-2022'
            live = "https://tranquil-shore-61237.herokuapp.com/"
          />
          <AllProjects 
            id = 'scheduler'
            img = {require('../images/schedulerPic.png')}
            repo = 'https://github.com/wlowrimore/vandy-bc-weeklyp-2022'
            live = "https://wlowrimore.github.io/vandy-bc-weeklyp-2022/"
          />
          <AllProjects 
            id = 'next'
            img = {require('../images/nextPic.png')}
            repo = 'https://github.com/wlowrimore/portfolio-082022'
            live = "https://github.com/wlowrimore/portfolio-082022"
          />
          <AllProjects 
            id = 'family'
            img = {require('../images/familyPic.png')}
            repo = 'https://github.com/wlowrimore/family_photo_app'
            live = "https://github.com/wlowrimore/family_photo_app"
          />
        </div>
      </div>
      <div className='view-link mt-10'>
        <li className='view-resume-style pb-10'><NavLink to='/resume'>view resume</NavLink></li>
      </div>
    </div>
  );
};

    
    