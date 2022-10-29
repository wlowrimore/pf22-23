import React from 'react';
import AllProjects from './AllProjects';
import { NavLink } from 'react-router-dom';

export default function ProjectData() {
  return (
    <div>
      <div className='flex-col px-12 mx-8 mb-6'>
        <h1 className='willow-font text-3xl text-yellow-600'>[my_work].continued</h1>
      </div>
      <div className='flex flex-wrap justify-center gap-6 px-4'>
        <AllProjects 
          img = {require('../images/codePic.png')}
          repo = "https://github.com/wlowrimore/vandy_bc_code_quiz_chlng4_2022"
          live = "https://wlowrimore.github.io/vandy_bc_code_quiz_chlng4_2022/"
        />

        <AllProjects 
          img = {require('../images/techPic.png')}
          repo = 'Vandy-bc-2022-MVC-Tech-Blog-Chlng-14'
          live = "https://serene-springs-59438.herokuapp.com/"
        />
        
        <AllProjects 
          img = {require('../images/bountyPic.png')}
          repo = 'https://github.com/wlowrimore/vandy_bc_project3_bounty-book_MERN_2022'
          live = "https://bountybook.herokuapp.com/"
        />

        <AllProjects 
          img = {require('../images/budgetPic.png')}
          repo = 'https://github.com/wlowrimore/Vandy-bc-PWA-Budget-Tracker-Chlng-19-2022'
          live = "https://tranquil-shore-61237.herokuapp.com/"
        />

        <AllProjects 
          img = {require('../images/schedulerPic.png')}
          repo = 'https://github.com/wlowrimore/vandy-bc-weeklyp-2022'
          live = "https://wlowrimore.github.io/vandy-bc-weeklyp-2022/"
        />

        <AllProjects 
          img = {require('../images/nextPic.png')}
          repo = 'https://github.com/wlowrimore/portfolio-082022'
          live = "https://github.com/wlowrimore/portfolio-082022"
        />

        <AllProjects 
          img = {require('../images/familyPic.png')}
          repo = 'https://github.com/wlowrimore/family_photo_app'
          live = "https://github.com/wlowrimore/family_photo_app"
        />
      </div>
      <div className='view-link mt-10'>
        <li className='view-link-style'><NavLink to='/projects'>back to projects</NavLink></li>
      </div>
    </div>
  );
};

    
    