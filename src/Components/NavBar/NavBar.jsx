import './NavBar.css';
import { useState } from 'react';
//import IconButton from '../IconButton/IconButton';

export const NavBar = () => {
  

  return (
    <div className='navbar'>
      <div className='nav'>
        <div className="text-3xl font-bold underline">NK</div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Enable
        </button>
      </div>
      
    </div>
  );
};

export default NavBar;