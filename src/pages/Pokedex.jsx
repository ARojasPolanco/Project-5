import { useSelector } from "react-redux"
import store from "../store"
import { useEffect, useState } from "react"
import { getAllPokemons } from "../services/pokemons"
import PokemonList from "../components/pokedex/PokemonList"

const Pokedex = () => {
const [pokemons, setPokemons] = useState([])

    const {name} = useSelector(store => store.trainer)

    useEffect(() => {
     getAllPokemons()
     .then((data) => setPokemons(data))
     .catch((err) => console.log(err))
    }, [])

    return (
        <main>
            <section>
                <p><span>Welcome {name}</span></p>
                <form>
                <div>
                    <input placeholder="search pokemon..." type="text" />
                    <button>Search</button>
                </div>

                <select>
                    <option value="">all pokemon</option>
                </select>
                </form>
            </section>


            <PokemonList pokemons={pokemons}/>
        </main>
    )
}

export default Pokedex