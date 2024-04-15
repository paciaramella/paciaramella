import React from 'react';
import './Sidebar.css'; // Import your sidebar styles
import './fonts.css';
import linkedin from './svgs/linkedin-f0f3fa.svg';
import github from './svgs/github-f0f3fa.svg';
import gmail from './svgs/gmail-f0f3fa.svg'
import { LINKED_IN, GITHUB, GMAIL } from './links';
function Sidebar() {
    return (
      <div className="flex-container">
        <h2 className='title-icon'>paciaramella</h2>
        <div style={{marginRight: 'auto'}}>
        </div>
        <a href={GMAIL} className='gmail-icon'>
            <img src={gmail} alt="logo"/>
        </a>
        <a href={GITHUB} className='github-icon' style={{ paddingLeft: '32px' }} >
            <img src={github} alt="logo"/>
        </a>
        <a href={LINKED_IN} className='linkedin-icon' style={{ paddingLeft: '32px', paddingRight: '32px' }}>
            <img src={linkedin} alt="logo"/>
        </a>
      </div>
    );
  }
  
  export default Sidebar;