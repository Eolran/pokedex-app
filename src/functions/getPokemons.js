import { useState, useEffect } from 'react';
import axios from 'axios';

//Récupération Liste Pokemon
export function usePokemons(url) {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const { data } = await axios.get(url);
            console.log(data);
            setPokemons(data.results);
        }
        fetchData();
    }, []); 

    return pokemons;
}

//Récupération URL prochaine Liste Pokemon
export function nextPokemons(url) {
    const [pokemonsNext, setPokemonsNext] = useState("");

    useEffect(() => {
        async function fetchData() {
            const { data } = await axios.get(url);
            setPokemonsNext(data.next);
        }
        fetchData();
    }, []); 
    console.log(pokemonsNext)
    return pokemonsNext;
}

//Récupération détail Pokemon
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

//Récupération détail Espèce Pokemon
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

//Récupération Objet Evolution
export async function getEvolutionChain(id) {

    const { data } = await axios.get(id);
    return data;
}

//Récupération Objet Passif Pokemon
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