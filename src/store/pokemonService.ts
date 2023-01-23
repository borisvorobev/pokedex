import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Pokemon, PokemonSpecies } from "./types";

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query<Pokemon, string>({
      query: (name) => `pokemon/${name}`,
    }),
    getPokemonSpeciesByName: builder.query<PokemonSpecies, string>({
      query: (name) => `pokemon-species/${name}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPokemonByNameQuery, useGetPokemonSpeciesByNameQuery } = pokemonApi;
