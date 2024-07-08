import React from 'react';
import './Hero.css';

export const Hero = () => {
  return (
    <div style={{paddingTop: '10vh', marginBottom: '7vh'}}>
        <p style={{fontSize: '4vh'}}>An APPLICATION THAT HELPS YOU</p>
        <h1 style={{fontSize: '2vh'}}>GET <span>FIT</span> IN A <span>LIT</span> WAY</h1>
        <p style={{fontSize: '2vh', marginTop: '2vh'}}>By using this application, you can keep track of your workout <span>progress </span> 
            without any difficulties, as your workout <span>sessions and intensities</span> are 
            always saved with us
        </p>
        <button className='begin-button'>BEGIN</button>
    </div>
  )
};
