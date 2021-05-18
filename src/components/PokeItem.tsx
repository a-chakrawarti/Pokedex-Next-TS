const PokeItem = ({ data }) => {
  const { name, id } = data;
  return (
    <div>
      <span>{id}</span>
      <span>{name}</span>
    </div>
  );
};

export default PokeItem;
