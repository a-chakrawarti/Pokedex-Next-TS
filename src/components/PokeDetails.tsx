const PokeDetails = ({ pokeDetails }) => {
  const { name, abilities, height, weight, moves, front_default } = pokeDetails;
  return (
    <div className="info-body">
      <div className="attribute-block">
        <img src={front_default} alt="pokemon" />
        <div className="attribute-info">
          <span className="title-tag">{name}</span>
          <span>
            Height: <span className="attribute-data">{height} cm</span>
          </span>
          <span>
            Weight: <span className="attribute-data">{weight} kg</span>
          </span>
          <div className="flex-list-row">
            Abilities:
            {abilities.map((item, index) => (
              <span className="attribute-data ability-tag" key={index}>
                {item.ability.name}
              </span>
            ))}
          </div>
        </div>
      </div>
      <details className="moves">
        <summary className="title-tag">Moves ( {moves.length} )</summary>
        <div className="flex-list-row">
          {moves.map((item, index) => {
            return (
              <span className="moves-tag" key={index}>
                {item.move.name}
              </span>
            );
          })}
        </div>
      </details>
    </div>
  );
};

export default PokeDetails;
