import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    quantity: 20
}

const pokemonShowSlice = createSlice({
    initialState,
    name: 'quantity',
    reducers: {
        quantityPokemon: (state, {payload}) => {
            const newQuantity = payload
            state.quantity = newQuantity
        }
    }
})

export const {quantityPokemon} = pokemonShowSlice.actions

export default pokemonShowSlice.reducer