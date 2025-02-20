const PokemonCard = ({ pokemonData }) => {
  return (
    <li
      id="pokemon_card"
      className="flex items-center justify-center flex-col gap-6"
    >
      <figure>
        <img
          src={pokemonData.sprites.other.dream_world.front_default}
          alt={pokemonData.name}
          className="h-[100px] bg-green-200 py-3 px-4 rounded-full"
        />
      </figure>
      {/* pokemon name */}
      <h1 className="font-medium">
        {pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1)}
      </h1>
      {/* pokemon_info pokemon_hightlight */}
      <div>
        <p className="bg-green-600 py-1 px-4 w-fit rounded-full text-white font-medium">
          {pokemonData.types
            .map(
              (currType) =>
                currType.type.name.charAt(0).toUpperCase() +
                currType.type.name.slice(1)
            )
            .join(", ")}
        </p>
      </div>
      <div id="grid_3_cols" className="grid grid-cols-3 gap-3 text-[14px]">
        <p id="pokemon_info">
          <span className="font-medium">Height: </span>
          {pokemonData.height}
        </p>
        <p id="pokemon_info">
          <span className="font-medium">Weight: </span>
          {pokemonData.weight}
        </p>
        <p id="pokemon_info">
          <span className="font-medium">Speed: </span>
          {pokemonData.stats[5].base_stat}
        </p>
      </div>
      <div id="grid_3_cols" className="grid grid-cols-3">
        <div
          id="pokemon_info"
          className="flex items-center justify-center flex-col"
        >
          <p>{pokemonData.base_experience}</p>
          <span className="font-medium">Experience:</span>
        </div>
        <div
          id="pokemon_info"
          className="flex items-center justify-center flex-col"
        >
          <p>{pokemonData.stats[1].base_stat}</p>
          <span className="font-medium">Attack:</span>
        </div>
        <div
          id="pokemon_info"
          className="flex items-center justify-center flex-col"
        >
          <p>
            {pokemonData.abilities
              .map((abilityInfo) => abilityInfo.ability.name)
              .slice(0, 1)
              .join(", ")}
          </p>
          <span className="font-medium">Abilities:</span>
        </div>
      </div>
    </li>
  );
};

export default PokemonCard;
