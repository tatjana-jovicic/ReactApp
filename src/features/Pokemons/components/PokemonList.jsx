import "../styles/Pokemon.css";

const PokemonList = ({ pokemon }) => {
  return (
    <div className="pokemonStyle">
      <img src={pokemon.image} alt={pokemon.title} />
      <h3>{pokemon.title}</h3>
      <p>{pokemon.description}</p>
    </div>
  );
};
export default PokemonList;
