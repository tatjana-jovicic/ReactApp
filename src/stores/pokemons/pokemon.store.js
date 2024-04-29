import { create } from "zustand";

export const usePokemonStore = create((set) => ({
  pokemons: [
    {
      id: 1,
      title: "Blastoise",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full//009.png",
      description: "Water",
    },
    {
      id: 2,
      title: "Caterpie",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full//010.png",
      description: "Bug",
    },
    {
      id: 3,
      title: "Blastoise",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full//009.png",
      description: "Bug",
    },
    {
      id: 4,
      title: "Butterfree",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full//012.png",
      description: "Bug, Flying",
    },
    {
      id: 5,
      title: "Snorlax",
      image:
        "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/143.png",
      description: "Normal",
    },
    {
      id: 6,
      title: "Seahorse",
      image: "https://pngimg.com/d/seahorse_PNG6.png",
      description: "Water",
    },
    {
      id: 7,
      title: "Kindhearted",
      image:
        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6e9e96e4-b8e9-46f8-84cc-e329d41dfa2f/ddl8gmx-910fc694-2ebd-4422-9533-414ea722ff74.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzZlOWU5NmU0LWI4ZTktNDZmOC04NGNjLWUzMjlkNDFkZmEyZlwvZGRsOGdteC05MTBmYzY5NC0yZWJkLTQ0MjItOTUzMy00MTRlYTcyMmZmNzQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.9Qc8yqyxDRdWe1P3c_NxDNNNN33pHTbrk3MP8pYE9zU",
      description: "Fire",
    },
    {
      id: 8,
      title: "Pikachu",
      image:
        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6e214fae-adb1-4d5e-a245-57c0539c2072/ddmuqbm-1c40a0af-f73c-4918-a586-8816f81a4e93.png/v1/fill/w_475,h_475/shiny_pikachu_by_conceptshinies_ddmuqbm-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NDc1IiwicGF0aCI6IlwvZlwvNmUyMTRmYWUtYWRiMS00ZDVlLWEyNDUtNTdjMDUzOWMyMDcyXC9kZG11cWJtLTFjNDBhMGFmLWY3M2MtNDkxOC1hNTg2LTg4MTZmODFhNGU5My5wbmciLCJ3aWR0aCI6Ijw9NDc1In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.nnLHCOdO-53A6wgtM3u5b7xOkYSi3OWPil4_SPP5r-s",
      description: "Electric",
    },
  ],
  visiblePokemons: 4,
  loadMorePokemons: () => {
    set((state) => ({ visiblePokemons: state.visiblePokemons + 4 }));
  },
}));
