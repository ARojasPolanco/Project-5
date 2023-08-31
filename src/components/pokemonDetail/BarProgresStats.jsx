import PokemonDetail from "../../pages/PokemonDetail"
import { bgStatsPokemonType, bgStylePokemonType } from "../shared/pokemons"

const BarProgresStats = ({ stat, types }) => {

    const getPercentBarProgress = (statValue) => {
        const MAX_STAT_VALUE = 255
        const persent = (100 * statValue / MAX_STAT_VALUE)
        return `${persent}%`
    }

    return (
        <article className="w-full px-4">
            <section className="flex justify-between px-2">
                <h5>{stat.name}</h5>
                <span>{stat.value}/255</span>
            </section>
            <div className="h-2 min-[900px]:h-6 bg-medium-gray rounded-md overflow-hidden">
                <div style={{ width: getPercentBarProgress(stat.value) }} className={`h-full  ${bgStatsPokemonType[types[0]]}`}></div>
            </div>
        </article>
    )
}

export default BarProgresStats