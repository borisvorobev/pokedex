import React from 'react';
import { useParams, useNavigate, Navigate } from 'react-router-dom';
import {
  useGetPokemonByNameQuery,
  useGetPokemonSpeciesByNameQuery,
} from '../../store/pokemonService';
import PokemonLayout from './Layout';

export default () => {
  const { name } = useParams();
  const navigate = useNavigate();
  if (name === undefined || name?.length < 1) navigate('/');
  const {
    data: pokemon,
    error: getPokemonError,
    isLoading: isLoadingPokemon,
  } = useGetPokemonByNameQuery(name as string);
  const {
    data: species,
    error: getSpeciesError,
    isLoading: isLoadingSpecies,
  } = useGetPokemonSpeciesByNameQuery(name as string);

  if (isLoadingPokemon)
    return (
      <main className="container pokemon-information">
        <img
          className="spin"
          src="/assets/pokeball.png"
          alt="pokeball sprite"
        />
      </main>
    );
  if (getPokemonError) {
    alert(
      `The pokemon's name ${name} is not valid, please search for another pokemon`,
    );
    return <Navigate to="/" replace={true} />;
  } else
    return (
      <PokemonLayout
        pokemon={pokemon}
        species={species}
        getPokemonError={getPokemonError}
        getSpeciesError={getSpeciesError}
        isLoadingPokemon={isLoadingPokemon}
        isLoadingSpecies={isLoadingSpecies}
      />
    );
};
