import Pagination from "../components/Pagination";
import PokeItem from "../components/PokeItem";
import Link from "next/link";
import { useState } from "react";

const URL = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=250";

export default function Home({ data }) {
  const { results } = data;

  const [pageNumber, setPageNumber] = useState(1);

  const [limit, setLimit] = useState(10);

  const [pokeList, setPokeList] = useState(results.slice(0, limit));

  console.log(pokeList);
  const gotoNextPage = () => {
    console.log("next Clicked");
    setPageNumber((prevPage) => {
      setPokeList(results.slice(prevPage * limit, (prevPage + 1) * limit));
      return prevPage + 1;
    });
  };

  const gotoPreviousPage = () => {
    console.log("Prev Clicked");
    if (pageNumber === 1 || pageNumber < 0) {
    }
    setPageNumber((prevPage) => {
      setPokeList(results.slice(prevPage * limit, (prevPage - 1) * limit));
      return prevPage - 1;
    });
  };
  return (
    <div>
      {pokeList.map((item, index) => {
        const data = {
          name: item.name,
          id: index,
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
  const res = await fetch(URL);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
