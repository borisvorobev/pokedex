import React from 'react'

export default () => (
  <div className=''>
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
    <main className="container pokemon-information">
      <div className='sprite'>
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png" alt="" />
      </div>
      <div className='data'>
        <div className='quick-information bordered'>
          <div className='pokemon-name'>
            <img src="/assets/pokeball.png" alt="pokeball" />
            <span className='pokemon-number'>000</span>
            <span>Name</span>
          </div>
          <p className='pokemon-description'>
            a short description
          </p>
        </div>
        <div className='detailed-information'>
          <div className="item bordered">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/moon-stone.png" alt="Item held" />
          </div>
          <div className='stats'>
            <div className='pokemon-types'>
              <a href="https://bulbapedia.bulbagarden.net/wiki/Normal_(type)" target="_blank" className="nes-badge">
                <span className="is-warning">Normal</span>
              </a>
              <a href="https://bulbapedia.bulbagarden.net/wiki/Fire_(type)" target="_blank" className="nes-badge">
                <span className="is-error">Fire</span>
              </a>
            </div>
            <div className="pokemon-stats bordered">
              <span>HT</span>
              <hr />
              <span>WT</span>
            </div>
          </div>
        </div>
      </div>
      <div className='description bordered'>
        <p>
          some text
          dgbdl
          asdblkshndfb
          asdfgblhknsdf
          awelghnslkhng
          awelghna/sweg
          awskjhn
          asdvhn
          asdvhnaslkdh
          asdfgblhknsdf lahf
          asdfgblhknsdfa
          ah
          lwsedh
        </p>
      </div>
    </main>
  </div>
)
