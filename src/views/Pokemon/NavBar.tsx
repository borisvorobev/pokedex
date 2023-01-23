import React from 'react'
import { Link } from 'react-router-dom'

export default () => (
  <nav className='navbar'>
    <div className='container'>
      <Link to='/' className='to-home'>
        <img src="/assets/Pokédex_logo.png" alt='Back to Home' />
      </Link>

      <button className='nes-btn is-primary to-history'>
        Go to History
      </button>
    </div>
  </nav>
)