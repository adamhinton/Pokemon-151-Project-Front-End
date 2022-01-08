import React from "react";

const SinglePokemon = (props) => {
  //Each poke is a single pokemon's data, being passed in as props.
  const { poke, isShiny } = props;
  const { name, type, dexEntry, height, weight, id, num } = poke;

  return (
    <div className="pokemon-card" data-testid="pokemon-card">
      {/* Pokemon's name and pokedx id#*/}
      <h2 className="poke-name card-item">
        {name} <span className="dex-id">#{id}</span>
      </h2>

      {/* Basic type information. Singular if only one type, plural if two types. */}
      {type[1] ? (
        <h3 className="poke-type card-item">
          {type[0]} / {type[1]}{" "}
        </h3>
      ) : (
        <h3 className="poke-type card-item">{type}</h3>
      )}

      {/* Returns info about weight and height */}
      <h4 className="height-weight card-item">
        Height: {height} <br />
        Weight: {weight}
      </h4>

      {/* image of each pokemon */}
      <div className="img-container card-item">
        {/* Displays either the shiny or normal form of the pokemon based on user preference */}
        {isShiny ? (
          <img
            className="poke-img"
            src={`https://www.serebii.net/Shiny/SWSH/${num}.png`}
            alt={name}
          />
        ) : (
          <img
            className="poke-img"
            src={`https://www.serebii.net/swordshield/pokemon/${num}.png`}
            alt={name}
          />
        )}
      </div>

      {/* The pokemon's dex entry, which is basic tidbits about the pokemon */}
      <p className="card-item">{dexEntry}</p>
    </div>
  );
};

export default SinglePokemon;
