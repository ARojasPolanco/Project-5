import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { getAllPokemons, getAllTypes, getPokemonsByType } from "../../services/pokemons"

//component logic separation "pokédex.jsx"

const usePokedex = () => {
    const [pokemons, setPokemons] = useState([])
    const [pokemonName, setPokemonName] = useState('')
    const [pokemonType, setPokemonType] = useState('')
    const [pokemonLimit, setPokemonLimit] = useState(0)
    const [types, setTypes] = useState([])

    const { name } = useSelector(store => store.trainer)

    const handleChange = (setState) => (e) => {
        setState(e.target.value)
    }

    const pokemonByName = pokemons.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(pokemonName.toLowerCase())
    );

    useEffect(() => {
        if (!pokemonType) {
            getAllPokemons()
                .then((data) => setPokemons(data))
                .catch((err) => console.log(err))
        }
    }, [pokemonType]);

    useEffect(() => {
        if (pokemonType) {
            getPokemonsByType(pokemonType).then((data) => setPokemons(data))
        }
    }, [pokemonType])

    useEffect(() => {
        getAllTypes().then((data) => setTypes(data))
            .catch((err) => console.log(err))
    }, [])

    return {
        handleChange,
        name,
        pokemonName,
        handleChange,
        setPokemonName,
        pokemonType,
        setPokemonType,
        pokemonByName,
        types
    }

}


export default usePokedex