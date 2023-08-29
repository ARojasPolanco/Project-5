import axios from "axios"

export const getAllPokemons = async () => {
    const URL = `https://pokeapi.co/api/v2/pokemon?limit=1281/`
    const { data } = await axios.get(URL)
    return data.results;
}

export const getAllTypes = async () => {
    const { data } = await axios.get("https://pokeapi.co/api/v2/type")
    return data.results
}

export const getPokemonsByType = async (pokemonType, limit) => {
    const url = `https://pokeapi.co/api/v2/type/${pokemonType}/?limit=${limit}/`
    const { data } = await axios.get(url)
    const formatPokemons = data.pokemon.map(({ pokemon }) => pokemon)
    return formatPokemons;
}

export const getPokemonById = async (pokemonId) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`
    const { data } = await axios.get(url)
    const pokemon = {
        id: data.id,
        name: data.name,
        types: formatTypes(data.types),
        stats: formatStats(data.stats),
        abilities: formatAbilities(data.abilities),
        moves: formatMoves(data.moves),
        image: data.sprites.other["official-artwork"].front_default,
        weight: data.weight,
        height: data.height,
        abilities: data.abilities,
        moves: data.moves
    }
    return pokemon;
}

export const getPokemonByUrl = async (pokemonUrl) => {
    const { data } = await axios.get(pokemonUrl)
    const pokemon = {
        id: data.id,
        name: data.name,
        types: formatTypes(data.types),
        stats: formatStats(data.stats),
        image: data.sprites.other["official-artwork"].front_default,
    }
    return pokemon;
}

const formatStats = (stats) => {
    return stats.map((stat) => ({
        name: stat.stat.name,
        value: stat.base_stat
    }))
}

const formatTypes = (types) => {
    return types.map((type) => type.type.name)
}

const formatAbilities = (abilities) => {
    return abilities.map((ability) => ability.ability.name)
}

const formatMoves = (moves) => {
    return moves.map((move) => move.move.name)
}

