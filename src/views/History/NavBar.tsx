import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <nav className="navbar">
    <div className="container">
      <Link to="/" className="to-home">
        <img src="/assets/Pokédex_logo.png" alt="Back to Home" />
      </Link>
    </div>
  </nav>
);
