import { useState, useEffect } from 'react';
import axios from 'axios';

export function usePokemons() {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/');
            setPokemons(data.results);
        }
        fetchData();
    }, []); 

    return pokemons;
}

export function getPokemon(id) {
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/'+id);  
            setPokemon(data);
        }
        fetchData();
    }, []); 

    return pokemon;
}

export function getAbility() {
    const [pokeAbility, setPokeAbility] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const { data } = await axios.get('https://pokeapi.co/api/v2/ability/65');
            setPokeAbility(data);
        }
        fetchData();
    }, []); 

    return pokeAbility;
}