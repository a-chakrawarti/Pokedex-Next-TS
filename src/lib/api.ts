// API `https://pokeapi.co/api/v2/pokemon?offset=0&limit=${limit}`;

export interface IResults {
  name: string;
  url: string;
}

export interface IPokeList {
  count: number;
  next: string;
  previous: string;
  results: IResults[];
}

async function getCount(): Promise<number> {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=1`);
  const data = await res.json();

  const { count } = data;
  return count;
}

export async function fetchPokemonData(): Promise<IPokeList> {
  const limit = await getCount();
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon?offset=0&limit=${limit}`
  );
  const data = await res.json();

  return data;
}
