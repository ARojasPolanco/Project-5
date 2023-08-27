import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: ''
}

const trainerSlice = createSlice({
  initialState,
  name: 'trainer',
  reducers: {
    loginTrainer: (state, action) => {
      const newName = action.payload
      state.name = newName
    }
  }
});

export const { loginTrainer } = trainerSlice.actions

export default trainerSlice.reducer