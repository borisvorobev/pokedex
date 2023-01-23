type PokemonAbility = {
  is_hidden: boolean;
  ability: { name: string };
};

type PokemonSprites = {
  front_default: string;
  other?: { home?: { front_default?: string } };
};

export type Pokemon = {
  id: number;
  name: string;
  height: number;
  weight: number;
  abilities?: PokemonAbility[];
  heldItems: Array<{ item: { name: string } }>;
  sprites?: PokemonSprites;
  types: Array<{ type: { name: string } }>;
};

export type PokemonSpecies = {
  flavor_text_entries: Array<{ flavor_text: string }>;
  form_descriptions: Array<{ description: string }>;
};
