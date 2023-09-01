import { useEffect, useState } from "react"
import { getPokemonByUrl } from "../../services/pokemons"
import StatList from "./StatList"
import { bgStylePokemonType, bgUnderColorByType, borderStyledPokemonByPokemonType, textColorByType } from "../shared/pokemons"
import { Link } from "react-router-dom"

const PokemonCard = ({ pokemonUrl }) => {
  const [pokemonInfo, setPokemonInfo] = useState(null)
  const [pokeballTransition, setPokeballTransition] = useState(true)
  const [squareTransition, setSquareTransition] = useState(false)

  useEffect(() => {
    getPokemonByUrl(pokemonUrl)
      .then((data) => {
        setPokemonInfo(data)
        setPokeballTransition(false)
        setSquareTransition(true)
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <div className={`hover:-translate-y-2 h-[280px] aspect-square relative border-[4px] top-0 right-0 z-10 overflow-hidden ${squareTransition ? borderStyledPokemonByPokemonType[pokemonInfo?.types[0]] + " rounded-3xl" : 'border-black rounded-full'} transition-all duration-500 bg-white dark:bg-special-dark-blue`}>
      <div className={`w-full h-1/2 relative ${pokeballTransition ? 'top-[140px] bg-bug-bg' : '-top-10'} transition-all duration-700`}>
        <div className="bg-red-pokeball z-20 h-full w-full border-b-4 dark:border-black absolute bottom-[140px]"></div>
        <div className="absolute h-[80px] aspect-square rounded-full bg-white z-20 left-[100px] bottom-[100px] border-8 after:block after:content-[''] after:h-8 after:aspect-square after:bg-white after:rounded-full after:absolute after:left-1/2 after:-translate-x-1/2 after:top-1/2 after:-translate-y-1/2 after:border-4 after:border-black dark:border-black"></div>
      </div>
      <div className={`bg-white h-1/2 w-full absolute z-10 border-t-4 ${pokeballTransition ? 'bottom-0 ' : '-bottom-[140px]'} transition-all duration-700 dark:border-black`}></div>
      <Link
        to={'/pokedex/' + pokemonInfo?.id}
        className={`h-[280px] aspect-square absolute text-center capitalize font-Montse -mt-[140px] rounded-3xl`}>
        <header className={`h-[100px] relative ${bgStylePokemonType[pokemonInfo?.types[0]]}`}>
          <div className="absolute left-1/2 -translate-x-1/2 -bottom-2 h-[110px] aspect-square">
            <img className="h-full w-full object-contain" src={pokemonInfo?.image} alt="" />
          </div>
        </header>
        <section className="font-Inter">
          <h3 className="text-lg font-bold">{pokemonInfo?.name}</h3>
          <h4 className='text-md font-normal text-white flex gap-2 justify-center items-center'>
            <span className={`px-2 rounded-full ${bgUnderColorByType[pokemonInfo?.types[0]]}`}>{pokemonInfo?.types[0]}</span>
            {
              pokemonInfo?.types[1] && <span className={`px-2 rounded-full ${bgUnderColorByType[pokemonInfo?.types[1]]}`}>{pokemonInfo?.types[1]}</span>
            }
          </h4>
          <h5 className="text-sm mb-2">Types</h5>
          <hr />
          <StatList stats={pokemonInfo?.stats} />
        </section>
      </Link>
    </div>

  )
}

export default PokemonCard