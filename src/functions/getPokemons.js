import { useState, useEffect } from 'react';
import axios from 'axios';

export function usePokemons() {
    const [pokemons, setPokemons] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/');
            setPokemons(data.results);
        }
        fetchData();
    }, []); 

    return pokemons;
}

export function getPokemon() {
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/1');
            setPokemon(data);
        }
        fetchData();
    }, []); 

    return pokemon;
}