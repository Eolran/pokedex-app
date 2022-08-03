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

export function getPokemonSpecies(id) {
    const [pokemonSpecies, setPokemonSpecies] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon-species/'+id);
            setPokemonSpecies(data);
        }
        fetchData();
    }, []); 

    return pokemonSpecies;
}

export function getEvolutionChain(id) {
    const [EvolutionChain, setEvolutionChain] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const { data } = await axios.get('https://pokeapi.co/api/v2/evolution-chain/'+id);
            setEvolutionChain(data);
        }
        fetchData();
    }, []); 

    return EvolutionChain;
}

export function getAbility(id) {
    const [pokeAbility, setPokeAbility] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const { data } = await axios.get('https://pokeapi.co/api/v2/ability/'+id);
            setPokeAbility(data);
        }
        fetchData();
    }, []); 

    return pokeAbility;
}