import React from 'react';
import './Sidebar.css'; // Import your sidebar styles
import { LINKED_IN } from './links';
function Sidebar() {
    return (
      <div className="flex-container">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href={LINKED_IN}>LinkedIn</a>
      </div>
    );
  }
  
  export default Sidebar;