//aca estaran todos los thunks relacions a pokemon
//peticiones http fetch etc

import { pokemonApi } from "../../../api/pokemonApi"
import { setPokemons, startLoadingPokemon } from "./pokemonSlice"

export const getPokemons = (page = 0) => {
    return async (dispatch, getState) => {
        dispatch(startLoadingPokemon())
        //TODO : realizar peticion http
        // const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`)
        // const data = await resp.json();
        // console.log(data)
        // console.log(data)
        const { data } = await pokemonApi.get(`/pokemon?limit=10&offset=${page * 10}`);
        dispatch(setPokemons({ pokemons: data.results, page: page + 1 }));
    }
}