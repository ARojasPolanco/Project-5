import PokemonList from "../components/pokedex/PokemonList"
import usePokedex from "../components/hooks/usePokedex"
import { paginateData } from "../components/utils/pagination"
import { useState } from "react"
import Pagination from "../components/pokedex/Pagination"

const Pokedex = () => {
    const [currentPage, setCurrentPage] = useState(1)

    const { name,
        pokemonName,
        handleChange,
        setPokemonName,
        pokemonType,
        setPokemonType,
        pokemonByName,
        types
    } = usePokedex()

    const { itemsInCurrentPage,
        lastPages,
        pagesInCurrentBlock
    } = paginateData(pokemonByName, currentPage)

    return (
        <main className="bg-medium-gray min-h-screen w-full">
            <section className="text-center py-6 flex flex-col gap-4">
                <p className="text-lg font-bold font-Montse">Welcome <span className="text-lg font-Montse font-bold text-fire-bg capitalize">{name}</span></p>
                <form className="flex flex-col min-[500px]:flex-row justify-center items-center gap-2">
                    <div>
                        <input className="rounded-full p-2 px-4 outline-none" value={pokemonName} onChange={handleChange(setPokemonName)} placeholder="search pokemon..." type="text" />
                    </div>

                    <select className="rounded-full p-2 outline-none" value={pokemonType} onChange={handleChange(setPokemonType)}>
                        <option value="">All pokemon</option>
                        {
                            types.map((type) => <option key={type.name} value={type.name} className="capitalize">{type.name}</option>)
                        }
                    </select>
                </form>
            </section>

            <Pagination lastPages={lastPages} pagesInCurrentBlock={pagesInCurrentBlock} setCurrentPage={setCurrentPage} currentPage={currentPage} />

            <PokemonList pokemons={itemsInCurrentPage} />
        </main>
    )
}

export default Pokedex