import "./Pokemons.css";
import PokemonList from "./components/PokemonList";
// import { pokemons } from "../../data/pokemons";
import { usePokemonStore } from "../../stores/pokemons/pokemon.store";

const Pokemons = () => {
  const { pokemons, visiblePokemons, loadMorePokemons } = usePokemonStore();

  const loadVisible = pokemons.slice(0, visiblePokemons);

  console.log(loadVisible, "loadVisible");
  console.log(pokemons, "pokemons");
  console.log(visiblePokemons, "visiblePokemons");

  return (
    <>
      <ul className="pokemons_list">
        {loadVisible.map((pokemon) => (
          <li>
            <PokemonList key={pokemon.id} pokemon={pokemon} />
          </li>
        ))}
      </ul>
      {visiblePokemons < pokemons.length && (
        <button className="load_more" onClick={() => loadMorePokemons()}>
          Load More
        </button>
      )}
    </>
  );
};
export default Pokemons;
