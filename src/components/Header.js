import React from 'react'
import logo from '../logo.svg';
import '../index.css';

const Header = () => {
  return (
    <div className='header'>
       <img src={logo} className="App-logo" alt="logo" />
      <ul className='list'>
        <li>Home</li>
         <li>About</li>
          <li>Post</li>
          <button className='loginbtn'>LogIn</button>
       </ul>
       </div>
  )
}

export default Header
