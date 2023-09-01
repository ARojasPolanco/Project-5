
import PokemonList from "../components/pokedex/PokemonList"
import usePokedex from "../components/hooks/usePokedex"
import { paginateData } from "../components/utils/pagination"
import { useState } from "react"
import Pagination from "../components/pokedex/Pagination"
import { useDispatch, useSelector } from "react-redux"
import { quantityPokemon } from "../store/slices/pokemonsShow.slice"

const Pokedex = () => {
    const [currentPage, setCurrentPage] = useState(1)

    const dispatch = useDispatch()
    const {quantity} =useSelector(store => store.quantity)

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
    } = paginateData(pokemonByName, currentPage, quantity)

const handleChangeQuantityPokemons = (e) => {
    const valueRangePokemon = e.target.value
    dispatch(quantityPokemon(valueRangePokemon))
}


    return (
        <main className="bg-medium-gray min-h-screen w-full dark:bg-special-blue dark:text-white transition-colors">
            <section className="text-center py-6 flex flex-col gap-4">
                <p className="text-lg font-bold font-Montse">Welcome <span className="text-lg font-Montse font-bold text-fire-bg capitalize">{name}</span></p>
                <form className="flex flex-col min-[500px]:flex-row justify-center items-center gap-2">
                    <div>
                        <input className="rounded-full p-2 px-4 outline-none dark:bg-special-dark-blue transition-colors" value={pokemonName} onChange={handleChange(setPokemonName)} placeholder="search pokemon..." type="text" />
                    </div>

                    <select className="rounded-full p-2 outline-none dark:bg-special-dark-blue transition-colors" value={pokemonType} onChange={handleChange(setPokemonType)}>
                        <option value="">All pokemon</option>
                        {
                            types.map((type) => <option key={type.name} value={type.name} className="capitalize">{type.name}</option>)
                        }
                    </select>
                    <div className="flex gap-2 font-Montse font-bold transition-colors">
                        <input type="range" min={4} max={20} step={4} onChange={handleChangeQuantityPokemons} value={quantity} className="rangeBar bg-medium-gray dark:bg-special-blue transition-colors"/>
                        <span className="w-8">{quantity}</span>
                    </div>
                </form>
            </section>

            <Pagination lastPages={lastPages} pagesInCurrentBlock={pagesInCurrentBlock} setCurrentPage={setCurrentPage} currentPage={currentPage} />

            <PokemonList pokemons={itemsInCurrentPage} />
        </main>
    )
}

export default Pokedex