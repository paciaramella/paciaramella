import React from 'react';
import './Sidebar.css'; // Import your sidebar styles
import './fonts.css';
import linkedin from './svgs/LinkedIn.svg';
import github from './svgs/Github-Logo.svg';
import instagram from './svgs/insta.svg';
import security_camera from './svgs/camera-lol.svg';
import { LINKED_IN, GITHUB } from './links';

function Sidebar() {
    return (
      <div className="flex-container">
        <img src={security_camera} alt="logo" style={{marginBottom: 'auto'}}/>
        <h2 className='title-icon'>paciaramella</h2>
        <a href="#" className='menu-icon' style={{ paddingLeft: '742px' }}>
            <img src={instagram} alt="logo"/>
        </a>
        <a href={GITHUB} className='menu-icon' style={{ paddingLeft: '56px' }}>
            <img src={github} alt="logo"/>
        </a>
        <a href={LINKED_IN} className='menu-icon' style={{ paddingLeft: '56px' }}>
            <img src={linkedin} alt="logo"/>
        </a>
      </div>
    );
  }
  
  export default Sidebar;