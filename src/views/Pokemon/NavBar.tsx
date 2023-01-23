import React from 'react'

export default () => (
  <nav className='navbar'>
    <div className='container'>
      <span className='to-home'>
        <img src="/assets/Pokédex_logo.png" alt='Back to Home' />
      </span>

      <button className='nes-btn is-primary to-history'>
        Go to History
      </button>
    </div>
  </nav>
)