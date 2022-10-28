import React from 'react';
import AllProjects from './AllProjects';

export default function ProjectData() {
  return (
    <div>
      <h1>Test</h1>
      <AllProjects 
        img = {require('../images/sayrePic.png')}
        repo="https://github.com/wlowrimore/berman_photo_6_22"
        live="https://wlowrimore.github.io/berman_photo_6_22/index.html"
      />
    </div>
  );
};

    
    