import PokemonList from "../components/pokedex/PokemonList"
import usePokedex from "../components/hooks/usePokedex"

const Pokedex = () => {
    const { name,
        pokemonName,
        handleChange,
        setPokemonName,
        pokemonType,
        setPokemonType,
        pokemonByName } = usePokedex()

    return (
        <main>
            <section>
                <p><span>Welcome {name}</span></p>
                <form>
                    <div>
                        <input value={pokemonName} onChange={handleChange(setPokemonName)} placeholder="search pokemon..." type="text" />
                    </div>

                    <select value={pokemonType} onChange={handleChange(setPokemonType)}>
                        <option value="">all pokemon</option>
                        <option value="rock">rock</option>
                    </select>
                </form>
            </section>


            <PokemonList pokemons={pokemonByName} />
        </main>
    )
}

export default Pokedex