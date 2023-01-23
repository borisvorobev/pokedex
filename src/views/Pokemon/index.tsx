import React from 'react'
import { useGetPokemonByNameQuery, useGetPokemonSpeciesByNameQuery } from '../../store/pokemonService'
import PokemonLayout from './Layout'



export default () => {
  const { data: pokemon, error: getPokemonError, isLoading: isLoadingPokemon } = useGetPokemonByNameQuery('bulbasaur')
  const { data: species, error: getSpeciesError, isLoading: isLoadingSpecies } = useGetPokemonSpeciesByNameQuery('bulbasaur');

  return <PokemonLayout pokemon={pokemon} species={species} />
}
