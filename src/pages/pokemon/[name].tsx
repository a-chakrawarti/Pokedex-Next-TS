import Head from "next/head";
import PokeDetails from "../../components/PokeDetails";
import capitalize from "../../lib/capitalize";
import { makeStyles } from "@material-ui/core/styles";
import classes from "*.module.css";

interface IDataProps {
  abilities: {
    ability: { name: string; url: string };
    is_hidden: boolean;
    slot: number;
  }[];
  height: string;
  weight: string;
  moves: { move: { name: string; url: string }; version_group_details: [] }[];
  sprites: { other: { dream_world: { front_default: string } } };
}

interface InfoPageProps {
  data: IDataProps;
  name: string;
}

const useStyles = makeStyles({
  bodyHeight: {
    minHeight: "calc(100vh - 7rem)",
    display: "flex",
    alignItems: "center",
  },
});

const InfoPage = ({ data, name }: InfoPageProps) => {
  const { abilities, height, weight, moves, sprites } = data;
  const {
    other: {
      dream_world: { front_default },
    },
  } = sprites;

  const pokeDetails = {
    name,
    abilities,
    height,
    weight,
    moves,
    front_default,
  };

  const classes = useStyles();

  return (
    <div className={classes.bodyHeight}>
      <Head>
        <title>Pokémon - {capitalize(name)}</title>
      </Head>
      <PokeDetails pokeDetails={pokeDetails} />
    </div>
  );
};

export default InfoPage;

interface QueryProp {
  query: {
    name: string;
  };
}

export const getServerSideProps = async ({ query }: QueryProp) => {
  const { name } = query;
  const URL = `https://pokeapi.co/api/v2/pokemon/${name}`;

  const res = await fetch(URL);
  const data = await res.json();

  return {
    props: { data, name },
  };
};
