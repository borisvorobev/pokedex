import React from 'react';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import HomeLayout from './Layout';
import { useSearchPokemonByNameMutation } from '../../store/pokemonService';

export default () => {
  const searchRef = useRef<HTMLInputElement>();
  const [searchPokemonByName, { isLoading, error, data }] =
    useSearchPokemonByNameMutation();
  const navigate = useNavigate();

  const onSearchHandler = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    const pokemonName = searchRef.current?.value;
    await searchPokemonByName(pokemonName as string);
  };

  if (data) navigate(`/${data.name}`);

  return (
    <HomeLayout
      isLoading={isLoading}
      error={error}
      searchValue={searchRef as React.MutableRefObject<HTMLInputElement>}
      onSearchHandler={onSearchHandler}
    />
  );
};
