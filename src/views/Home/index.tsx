import React from 'react'
import { useRef } from 'react'
import {
  useNavigate
} from "react-router-dom";
import HomeLayout from './Layout'
import { useSearchPokemonByNameMutation } from '../../store/pokemonService'

export default () => {
  const searchRef = useRef<HTMLInputElement>()
  const [searchPokemonByName, { isLoading, error }] = useSearchPokemonByNameMutation();
  let navigate = useNavigate();
  
  const onSearchHandler = async (event) => {
    event.preventDefault();

    const pokemonName = searchRef.current?.value
    const response = await searchPokemonByName(pokemonName as string)
    response.data && navigate(`/${pokemonName}`)
  }
  console.log({ isLoading, error })
  return <HomeLayout isLoading={isLoading} error={error} searchValue={searchRef as React.MutableRefObject<HTMLInputElement>} onSearchHandler={onSearchHandler} />
}
