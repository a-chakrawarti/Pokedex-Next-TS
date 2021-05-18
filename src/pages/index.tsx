import Pagination from "../components/Pagination";
import PokeItem from "../components/PokeItem";
import Link from "next/link";
import { useState } from "react";
import { fetchPokemonData } from "../api/fetchPokemonData";

const URL = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=250";

export default function Home({ data }) {
  const { results } = data;

  const [pageNumber, setPageNumber] = useState(1);

  const [limit, setLimit] = useState(10);

  const initialPosts = results.slice(0, limit);

  const [pokeList, setPokeList] = useState(initialPosts);

  const gotoNextPage = () => {
    const offset = pageNumber * limit;
    setPokeList(results.slice(offset, (pageNumber + 1) * limit));
    setPageNumber((prevState) => prevState + 1);
  };

  const gotoPreviousPage = () => {
    if (pageNumber !== 1) {
      const offset = (pageNumber - 2) * limit;
      setPokeList(results.slice(offset, (pageNumber - 1) * limit));
      return setPageNumber((prevState) => prevState - 1);
    }
    return setPokeList(initialPosts);
  };

  return (
    <div>
      Page: {pageNumber}
      <hr />
      {pokeList.map((item) => {
        const data = {
          name: item.name,
          id: item.url.split("/").slice(-2, -1),
        };
        return (
          <Link key={item.name} href={`/pokemon/${item.name}`}>
            <a>
              <PokeItem data={data} />
            </a>
          </Link>
        );
      })}
      <Pagination
        gotoNextPage={gotoNextPage}
        gotoPreviousPage={gotoPreviousPage}
      />
    </div>
  );
}

export async function getStaticProps() {
  const data = await fetchPokemonData();

  return {
    props: {
      data,
    },
  };
}
