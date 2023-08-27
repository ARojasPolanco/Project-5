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
            <section className="text-center py-6 flex flex-col gap-4">
                <p className="text-lg font-bold font-Montse">Welcome <span className="text-lg font-Montse font-bold text-fire-bg capitalize">{name}</span></p>
                <form className="flex justify-center items-center">
                    <div>
                        <input value={pokemonName} onChange={handleChange(setPokemonName)} placeholder="search pokemon..." type="text" />
                    </div>

                    <select value={pokemonType} onChange={handleChange(setPokemonType)}>
                        <option value="">All pokemon</option>
                        <option value="normal">Normal</option>
                        <option value="fighting">Fighting</option>
                        <option value="flying">Flying</option>
                        <option value="poison">Poison</option>
                        <option value="ground">Ground</option>
                        <option value="rock">Rock</option>
                        <option value="bug">Bug</option>
                        <option value="ghost">Ghost</option>
                        <option value="steel">Steel</option>
                        <option value="fire">Fire</option>
                        <option value="water">Water</option>
                        <option value="grass">Grass</option>
                        <option value="electric">Electric</option>
                        <option value="psychic">Psychic</option>
                        <option value="ice">Ice</option>
                        <option value="dragon">Dragon</option>
                        <option value="dark">Dark</option>
                        <option value="fairy">Fairy</option>
                        <option value="unknown">Unknown</option>
                        <option value="shadow">Shadow</option>
                    </select>
                </form>
            </section>


            <PokemonList pokemons={pokemonByName} />
        </main>
    )
}

export default Pokedex