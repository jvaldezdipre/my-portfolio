import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <div className='logo-container'>
        <img src='./Sketchy_Society.png' alt='My Main Logo' />
      </div>
      <div className='links-container'>
        <Link to='/'>Projects</Link>
        <Link to='/about'>About</Link>
        <Link to='/'>Contact</Link>
      </div>
    </nav>
  );
};

export default Navigation;
