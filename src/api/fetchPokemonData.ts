import { getCount } from "./getCount";

export async function fetchPokemonData() {
  const limit = await getCount();
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon?offset=0&limit=${limit}`
  );
  const data = await res.json();

  return data;
}
