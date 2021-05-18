const PokeDetails = ({ pokeDetails }) => {
  const { name, abilities, height, weight, moves, front_default } = pokeDetails;
  return (
    <div>
      <div>
        <img src={front_default} alt={name} />
        <div>
          <span>{name}</span>
          <span>
            Height: <span>{height} cm</span>
          </span>
          <span>
            Weight: <span>{weight} kg</span>
          </span>
          <div>
            Abilities:
            {abilities.map((item, index) => (
              <span key={index}>{item.ability.name}</span>
            ))}
          </div>
        </div>
      </div>
      <details>
        <summary>Moves ( {moves.length} )</summary>
        <div>
          {moves.map((item, index) => {
            return <span key={index}>{item.move.name}</span>;
          })}
        </div>
      </details>
    </div>
  );
};

export default PokeDetails;
