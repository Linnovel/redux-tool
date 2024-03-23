import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "./store/slices/pokemon/thunks";

const PokemonApp = () => {
  //para despachar cualquier accion del store
  const dispatch = useDispatch();
  //selector
  const { pokemons, isLoading, page } = useSelector((state) => state.pokemons);
  // console.log(pokemons);
  // console.log(isLoading);
  // console.log(page);

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  return (
    <>
      <h1>pokemos app</h1>
      <hr />
      <span>Loading: {isLoading ? "True" : "False"}</span>
      <ul>
        {pokemons.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <button
        disabled={isLoading}
        // onClick={() => dispatch()}
        onClick={() => dispatch(getPokemons(page))}
      >
        Next
      </button>
    </>
  );
};

export default PokemonApp;
