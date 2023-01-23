import React from 'react'
import { Pokemon, PokemonSpecies } from '.'
import NavBar from './NavBar'

interface PokemonLayoutProps {
  pokemon: Pokemon
  species?: PokemonSpecies
}
export default ({ pokemon, species }: PokemonLayoutProps) => (
  <div className=''>
    <NavBar />
    <main className="container pokemon-information">
      <div className='sprite'>
        <img src={pokemon.sprites?.other?.home?.front_default ?? pokemon.sprites?.front_default} alt={`${pokemon.name} sprite`} />
      </div>
      <div className='data'>
        <div className='quick-information bordered'>
          <div className='pokemon-name'>
            <img src="/assets/pokeball.png" alt="pokeball" />
            <span className='pokemon-number'>{pokemon.id}</span>
            <span>{pokemon.name}</span>
          </div>
          <p className='pokemon-description'>
            {species?.flavor_text_entries[0].flavor_text}
          </p>
        </div>
        <div className='detailed-information'>
          <div className="item bordered">
            <img src={'https://archives.bulbagarden.net/media/upload/7/7f/Bag_Items_HGSS_pocket_icon.png'} alt={`${pokemon.heldItems[0].item.name ?? 'Item'} held`} />
          </div>
          <div className='stats'>
            <div className='pokemon-types'>
              {
                pokemon.types.map(({type}, id) => (
                  <div key={`pokemon-type-${type.name}-${id}`}>
                    {type.name}
                  </div>
                ))
              }
            </div>
            <div className="pokemon-stats bordered">
              <span>HT {pokemon.height}</span>
              <hr />
              <span>WT {pokemon.weight}</span>
            </div>
          </div>
        </div>
      </div>
      <div className='description bordered'>
        <p>
          {species?.form_descriptions[0].description}
        </p>
      </div>
    </main>
  </div>
)
