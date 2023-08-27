import { useEffect, useState } from "react"
import { getPokemonByUrl, joinPokemonTypes } from "../../services/pokemons"
import StatList from "./StatList"
import { bgStylePokemonType, borderStyledPokemonByPokemonType, textColorByType } from "../shared/pokemons"
import { Link } from "react-router-dom"

const PokemonCard = ({ pokemonUrl }) => {
  const [pokemonInfo, setPokemonInfo] = useState(null)

  useEffect(() => {
    getPokemonByUrl(pokemonUrl)
      .then((data) => setPokemonInfo(data))
      .catch((err) => console.log(err))
  }, [])

  return (
    <div className="h-[280px] aspect-square relative border-[4px] border-black rounded-full top-0 right-0 z-10 overflow-hidden">
      <div className="bg-red-pokeball h-1/2 w-full absolute z-10 border-b-4"></div>
      <div className="absolute h-[80px] aspect-square rounded-full bg-white z-20 left-[100px] bottom-[100px] border-8 after:block after:content-[''] after:h-8 after:aspect-square after:bg-white after:rounded-full after:absolute after:left-1/2 after:-translate-x-1/2 after:top-1/2 after:-translate-y-1/2 after:border-4 after:border-black"></div>
      <div className="bg-white h-1/2 w-full absolute bottom-0 z-10 border-t-4"></div>
      <Link
        to={'/pokedex/' + pokemonInfo?.id}
        className={`h-[280px] aspect-square absolute text-center capitalize border-[2px] rounded-lg font-Montse ${borderStyledPokemonByPokemonType[pokemonInfo?.types[0]]}`}>
        <header className={`h-[100px] relative ${bgStylePokemonType[pokemonInfo?.types[0]]}`}>
          <div className="absolute left-1/2 -translate-x-1/2 -bottom-2 h-[110px] aspect-square">
            <img className="h-full w-full object-contain" src={pokemonInfo?.image} alt="" />
          </div>
        </header>
        <section className="font-Inter">
          <h3 className="text-lg font-bold">{pokemonInfo?.name}</h3>
          <h4 className='text-lg font-bold'>{joinPokemonTypes(pokemonInfo?.types)}</h4>
          <h5 className="text-sm mb-2">Types</h5>
          <hr />
          <StatList stats={pokemonInfo?.stats} />
        </section>
      </Link>
    </div>

  )
}

export default PokemonCard