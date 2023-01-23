import React from 'react'
import { Pokemon, PokemonSpecies } from '../../store/types'
import NavBar from './NavBar'

interface PokemonLayoutProps {
  pokemon?: Pokemon
  species?: PokemonSpecies
  isLoadingPokemon: boolean
  getPokemonError: any
  getSpeciesError: any
  isLoadingSpecies: boolean

}
export default ({ pokemon, species, getPokemonError, isLoadingPokemon, getSpeciesError, isLoadingSpecies }: PokemonLayoutProps) => (
  <div className=''>
    <NavBar />
    <main className="container pokemon-information">
      {
        isLoadingPokemon && <img className='spin' src='/assets/pokeball.png' alt="pokeball sprite" />
      }
      {
        !pokemon ? (<span>{getPokemonError.data}</span>) : (<>
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

              {
                isLoadingSpecies ? <img className='spin' src='/assets/pokeball.png' alt="pokeball sprite" /> : <p className='pokemon-types'>
                  {
                    pokemon.types.map(({ type }, id) => (
                      <span key={`pokemon-type-${type.name}-${id}`} className={type.name}>
                        {type.name}
                      </span>
                    ))
                  }
                </p>
              }
            </div>
            <div className='detailed-information'>
              <div className="item bordered">
                <img src='https://archives.bulbagarden.net/media/upload/7/7f/Bag_Items_HGSS_pocket_icon.png' alt={`${pokemon.held_items.length > 0 ? pokemon.held_items[0]?.item?.name : 'Item'} held`} />
              </div>
              <div className='stats'>
                <div className="pokemon-stats bordered">
                  <span>HT {pokemon.height}</span>
                  <hr />
                  <span>WT {pokemon.weight}</span>
                </div>
              </div>
            </div>
          </div>
          <div className='description bordered'>
            {
              isLoadingSpecies ? <img className='spin' src='/assets/pokeball.png' alt="pokeball sprite" /> : getSpeciesError ? <span>{getSpeciesError.data}</span> : <p>
                {species?.form_descriptions[0]?.description ?? species?.flavor_text_entries[2].flavor_text}
              </p>
            }
          </div>
        </>)
      }
    </main>
  </div>
)
