const Card = ({ pokemon }) => {
  return (
    <div className='card-container'>
      <img
        src={pokemon.sprites.front_default}
        alt={`The image of ${pokemon.name}`}
      />
      <div className='card-name'>Name: {pokemon.name}</div>
      <div className='card-info'>Height: {pokemon.height}</div>
      <div className='card-info'>Weight: {pokemon.weight}</div>
      <div className='card-info'>
        Types:
        {pokemon.types.map((type, idx) => (
          <div key={idx}>{type.type.name}</div>
        ))}
      </div>
    </div>
  );
};

export default Card;
