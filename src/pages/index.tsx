import Pagination from "../components/Pagination";
import PokeItem from "../components/PokeItem";
import Container from "@material-ui/core/Container";
import Link from "next/link";
import { useState } from "react";
import { IResults, IPokeList, fetchPokemonData } from "../lib/api";
import { GetStaticProps } from "next";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  listContainer: {
    display: "grid",
    alignItems: "center",
  },

  bodyHeight: {
    minHeight: "calc(100vh - 7rem)",
  },
});

interface IHomeProps {
  data: IPokeList;
}

export default function Home({ data }: IHomeProps) {
  const { results } = data;
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const initialPosts = results.slice(0, limit);
  const [pokeList, setPokeList] = useState<IResults[]>(initialPosts);
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);

  const gotoNextPage = (): void => {
    const offset = pageNumber * limit;
    setPokeList(results.slice(offset, (pageNumber + 1) * limit));
    setPageNumber((prevState) => prevState + 1);
    setIsButtonDisabled(false);
  };

  const gotoPreviousPage = (): void => {
    if (pageNumber === 2) {
      setIsButtonDisabled(true);
    }
    if (pageNumber !== 1) {
      const offset = (pageNumber - 2) * limit;
      setPokeList(results.slice(offset, (pageNumber - 1) * limit));
      return setPageNumber((prevState) => prevState - 1);
    }
    return setPokeList(initialPosts);
  };

  const classes = useStyles();

  return (
    <Container
      className={`${classes.listContainer} ${classes.bodyHeight}`}
      maxWidth="sm">
      {pokeList.map((item) => {
        const data = {
          name: item.name,
          id: item.url.split("/").slice(-2, -1).toString(),
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
        isButtonDisabled={isButtonDisabled}
      />
    </Container>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await fetchPokemonData();

  return {
    props: {
      data,
    },
  };
};
