import React from 'react'

interface HomeLayoutProps {
  searchValue?: React.MutableRefObject<HTMLInputElement>
  onSearchHandler?: (event: any) => void
  isLoading?: boolean
  error?: any
}
export default ({ searchValue, onSearchHandler, isLoading, error }: HomeLayoutProps) => (
  <main className="container">
    <h1 className="nes-text is-primary">PokeDex</h1>
    <h2 className="nes-text is-success subtitle">You gotta catch'em all</h2>
    <p>
      This pokedex helps you to identify the pokemon you find on your travel!
    </p>
    <div className="nes-field nes-container is-rounded">
      <label htmlFor="search">Name of a Pokemon</label>
      <input disabled={isLoading} type="search" name="search" id="search" className="nes-input" ref={searchValue} />
      <button disabled={isLoading} className={`nes-btn is-primary ${isLoading && `is-disabled`}`} onClick={onSearchHandler}>
        Search
      </button>
      {
        isLoading && <img className='spin' src='/assets/pokeball.png' alt="pokeball sprite" />
      }
      {
        error && <span>{error.data}</span>
      }
      
    </div>

    <p>Enter the name of the pokemon you want to identify, or visit the history of your past searches in the History section</p>
    <footer>Made with Love and <a href='https://pokeapi.co/' target='_blank'>pokeapi/v2</a><i className="nes-pokeball" /></footer>
  </main>
)
