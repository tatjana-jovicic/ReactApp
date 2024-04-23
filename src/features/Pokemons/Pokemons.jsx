import "./Pokemons.css";
import Pokemon from "./components/Pokemon";
import { pokemons } from "../../data/pokemons";
import { usePokemonStore } from "../../stores/pokemons/pokemon.store";

const Pokemons = () => {
  const { visiblePokemons, loadMorePokemons } = usePokemonStore();

  return (
    <>
      <ul className="pokemons_list">
        {pokemons.splice(0, visiblePokemons).map((pokemon) => (
          <li>
            <Pokemon key={pokemon.id} pokemon={pokemon} />
          </li>
        ))}
      </ul>
      {/* {visiblePokemons < pokemons.length && ( */}
      <button className="load_more" onClick={() => loadMorePokemons()}>
        Load More
      </button>
      {/* )} */}
    </>
  );
};
export default Pokemons;
