import { configureStore } from '@reduxjs/toolkit'
import pokedexReducer from '../functions/pokedex.service'

export const store = configureStore({
  reducer: {
    pokedex: pokedexReducer,
  },
})