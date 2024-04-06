import React from 'react';
import './Sidebar.css'; // Import your sidebar styles
import './fonts.css';
import menu from './menu.svg';
import linkedin from './LinkedIn.svg';
import github from './Github-Logo.svg';
import instagram from './insta.svg';
import { LINKED_IN, GITHUB } from './links';

function Sidebar() {
    return (
      <div className="flex-container">
        <h2 className='title-icon'>paciaramella</h2>
        <a href="#" className='menu-icon' style={{ paddingLeft: '784px' }}>
            <img src={instagram} alt="logo"/>
        </a>
        <a href={GITHUB} className='menu-icon' style={{ paddingLeft: '56px' }}>
            <img src={github} alt="logo"/>
        </a>
        <a href={LINKED_IN} className='menu-icon' style={{ paddingLeft: '56px' }}>
            <img src={linkedin} alt="logo"/>
        </a>
        <img src={menu} alt="logo" style={{ paddingLeft: '56px' }}/>
      </div>
    );
  }
  
  export default Sidebar;