import { useEffect, useState } from "react";

const FetchApiAsyncAwait = () => {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

  // fetching the apiData using Async_Await { try() catch() }

  const API = "https://pokeapi.co/api/v2/pokemon/pikachu";

  const fetchPokemon = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();
      setPokemon(data);
      setLoading(false);
    } catch {
      console.log(err);
      setErr(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  console.log(pokemon);

  if (loading) {
    return (
      <>
        <div className="text-4xl">Loading...</div>
      </>
    );
  }

  if (err) {
    return (
      <>
        <div>
          <h1>Error: {err.message}</h1>
        </div>
      </>
    );
  }

  return (
    <>
      <section id="container">
        <header>
          <h1>Lets Catch Pokemon</h1>
        </header>
        <ul id="card_demo">
          <li id="pokemon_card">
            <figure>
              <img
                src={pokemon.sprites.other.dream_world.front_default}
                alt="card_img"
              />
            </figure>
            <h1>{pokemon.name}</h1>
            <div id="grid_3_cols">
              <p id="pokemon_info">
                Height: <span>{pokemon.height}</span>
              </p>
              <p id="pokemon_info">
                Weight: <span>{pokemon.weight}</span>
              </p>
              <p id="pokemon_info">
                Speed: <span>{pokemon.stats[5].base_stat}</span>
              </p>
            </div>
          </li>
        </ul>
      </section>
    </>
  );
};

export default FetchApiAsyncAwait;
