import PokeDetails from "../../components/PokeDetails";

const InfoPage = ({ data, name }) => {
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

  return (
    <div>
      <PokeDetails pokeDetails={pokeDetails} />
    </div>
  );
};

export default InfoPage;

export const getServerSideProps = async (context) => {
  const { name } = context.query;
  const URL = `https://pokeapi.co/api/v2/pokemon/${name}`;

  const res = await fetch(URL);
  const data = await res.json();

  return {
    props: { data, name },
  };
};
