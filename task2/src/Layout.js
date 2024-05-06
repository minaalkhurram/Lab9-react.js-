import './App.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/" className='nav-link'>Home</Link></li>
          <li><Link to="/blogs" className='nav-link'>Blogs</Link></li>
          <li><Link to="/Contact" className='nav-link'>Contact</Link></li>
          <li><Link to="*" className='nav-link'>Page</Link></li>
        </ul>
      </nav>
      <div>
        {children}
      </div>
    </div>
  );
}

export default Layout;
