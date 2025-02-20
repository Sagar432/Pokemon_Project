import { use, useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";

const Pokemon = () => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  const API = "https://pokeapi.co/api/v2/pokemon?limit=32";

  const fetchPokemon = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();
      //   console.log(data);

      const detailedPokemonData = data.results.map(async (currPokemon) => {
        // console.log(currPokemon.url);
        const res = await fetch(currPokemon.url);
        const data = await res.json();
        // console.log(data);
        return data;
      });
      //   setPokemon(detailedPokemonData);
      //   console.log(detailedPokemonData);
      const detailedResponse = await Promise.all(detailedPokemonData);
      console.log(detailedResponse);
      setPokemon(detailedResponse);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(error);
    }
  };

  //   console.log(pokemon);

  useEffect(() => {
    fetchPokemon();
  }, []);

  // search functionality
  const searchData = pokemon.filter((currPokemon) =>
    currPokemon.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <>
        <div className="text-4xl">Loading...</div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <h1>{error.message}</h1>
      </>
    );
  }

  return (
    <>
      <section id="mainContainer" className="h-full w-full bg-blue-200 pb-10">
        <h1 className="text-3xl font-medium text-center py-5">
          Lets Catch Pokemon
        </h1>
        {/* pokemon search */}
        <div id="pokemon_search" className="text-center mb-10">
          <input
            type="text"
            placeholder="Search Pokemon"
            className="border py-1 px-2 outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Pokemon Card Main */}
        <div className="w-full h-[90%] bg-amber-20">
          <ul
            id="cards"
            className="flex items-center justify-center flex-wrap gap-10"
          >
            {/* {pokemon.map((currPokemon) => { */}
            {searchData.map((currPokemon) => {
              return (
                <div
                  key={currPokemon.id}
                  className="bg-white h-[380px] w-[340px] py-4 px-4 shadow-2xl rounded-md hover:scale-105 transition-all duration-300 ease-in"
                >
                  <PokemonCard pokemonData={currPokemon} />
                </div>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Pokemon;
