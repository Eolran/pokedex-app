import { createSlice } from '@reduxjs/toolkit'

const initialState = localStorage.getItem("pokedexList") ?JSON.parse(localStorage.getItem("pokedexList")): [];

export const pokedexReducer = createSlice({
    name: 'pokedexReducer',
    initialState,
    reducers: {
        ADD: (state, action) => {
            state.push(action.payload); 
            localStorage.setItem("pokedexList", JSON.stringify(state));
        },
        REMOVE: (state, actions) => {
            state.splice(state.findIndex((pokemon) => pokemon.name === actions.payload.name),1)
            localStorage.setItem("pokedexList", JSON.stringify(state) );
        }
    },
})

// Action creators are generated for each case reducer function
export const { ADD, REMOVE } = pokedexReducer.actions

export default pokedexReducer.reducer