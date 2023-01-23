import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Pokemon, PokemonSpecies } from "./types";

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query<Pokemon, string>({
      query: (name) => `pokemon/${name}`,
      transformResponse: (response: Pokemon) => {
        const saved = localStorage.getItem("pokedex-history") ?? "[]";
        const historyArray = JSON.parse(saved as string);
        if (Array.isArray(historyArray)) {
          historyArray.push(response.name);
          localStorage.setItem("pokedex-history", JSON.stringify([...new Set(historyArray)]));
        }
        return response;
      },
    }),
    getPokemonSpeciesByName: builder.query<PokemonSpecies, string>({
      query: (name) => `pokemon-species/${name}`,
    }),
    searchPokemonByName: builder.mutation< Pokemon, string>({
      query: (name) => `pokemon/${name}`,
      transformResponse: (response: Pokemon ) => {
        const saved = localStorage.getItem("pokedex-history") ?? "[]";
        const historyArray = JSON.parse(saved as string);
        if (Array.isArray(historyArray)) {
          historyArray.push(response.name);
          localStorage.setItem("pokedex-history", JSON.stringify([...new Set(historyArray)]));
        }
        return response;
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetPokemonByNameQuery,
  useGetPokemonSpeciesByNameQuery,
  useSearchPokemonByNameMutation,
} = pokemonApi;
