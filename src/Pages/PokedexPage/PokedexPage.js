import React, { useEffect } from "react";
import Header from "../../components/Header/Header";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import { useNavigate } from "react-router-dom";
import { CardsContainer } from "./styles";
import usePokemonList from "../../Hooks/usePokemonList";
import { URL_BASE } from "../../Constants/apiConstants";
import usePokemons from "../../Hooks/usePokemons";

const PokedexPage = () => {
  const navigate = useNavigate();

  const { pokemons } = usePokemons();


  return (
    <div>
      <Header />
      <CardsContainer>
        {pokemons.map((pokemon) => {
          return <PokemonCard key={pokemon.id} pokemon={pokemon} />;
        })}
      </CardsContainer>
    </div>
  );
};

export default PokedexPage;
