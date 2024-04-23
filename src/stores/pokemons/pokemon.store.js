import { create } from "zustand";

export const usePokemonStore = create((set) => ({
  Pokemons: [],
  visiblePokemons: 4,
  loadMorePokemons: () => {
    set((state) => ({ visiblePokemons: state.visiblePokemons + 4 }));
  },
}));
