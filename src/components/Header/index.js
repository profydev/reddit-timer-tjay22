import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <ul>
      <li>
        <Link to="/search">Search</Link>
      </li>
      <li>
        <Link to="/how-it-works">How it Works</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
  </header>
);

export default Header;
