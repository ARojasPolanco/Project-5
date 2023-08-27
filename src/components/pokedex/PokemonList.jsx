import PokemonCard from "./PokemonCard"

const PokemonList = ({ pokemons }) => {
  return (
    <section className="grid p-2 px-4 gap-8 grid-cols-[repeat(auto-fit,_minmax(280px,_1fr))] place-items-center">
      {
        pokemons.map((pokemon) => <PokemonCard key={pokemon.url} pokemonUrl={pokemon.url} />)
      }
    </section>
  )
}

export default PokemonList