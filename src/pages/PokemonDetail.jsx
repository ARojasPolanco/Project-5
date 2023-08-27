import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getPokemonById } from "../services/pokemons"
import StatsBarList from "../components/pokemonDetail/StatsBarList"

const PokemonDetail = () => {
    const [pokemonData, setPokemonData] = useState(null)

    const { pokemonId } = useParams()

    useEffect(() => {
        getPokemonById(pokemonId)
            .then((data) => setPokemonData(data))
            .catch((err) => console.log(err))
    }, [])

    return (
        <main className="flex justify-center items-center bg-flying-bg h-screen p-4">
            <div className="division bg-red-pokeball h-full w-full absolute top-0 left-0"></div>
            <div className="division bg-black-pokeball h-full w-full absolute top-0 -left-10"></div>
            <article className="w-[min(100%,_400px)] z-50">
                <header>
                    <div>
                        <img src={pokemonData?.image} alt="" />
                    </div>
                </header>
                <section>
                    <span>#{pokemonData?.id}</span>
                    <StatsBarList stats={pokemonData?.stats} />
                </section>
            </article>
        </main>
    )
}

export default PokemonDetail