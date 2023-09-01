import { configureStore } from "@reduxjs/toolkit";
import trainerSlice from "./slices/trainer.slice";
import pokemonsShowSlice from "./slices/pokemonsShow.slice";

export default configureStore({
    reducer: {
      trainer: trainerSlice,
      quantity: pokemonsShowSlice
    }
})