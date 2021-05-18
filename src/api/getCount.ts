// API `https://pokeapi.co/api/v2/pokemon?offset=0&limit=${limit}`;

export async function getCount() {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=1`);
  const data = await res.json();

  const { count } = data;
  return count;
}
