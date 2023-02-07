import { useContext, useEffect } from "react"
import usePokemon from "../../Hooks/usePokemon"
import { CatchButton, Container, DetalsButton, Pokeball, Pokemon, PokemonName, PokemonNumber, PokemonType, TypesContainer } from "./styles"
import pokeball from '../../assets/pngwing 2.png'
import { cardTypes } from "../../Functions/cardTypes"
import { useNavigate } from "react-router-dom"
import { goToDetailsPage } from "../../routes/coordinator"
import { GlobalContext } from "../../contexts/GlobalContext"


const PokemonCard = ({pokemon}) => {
  const navigate = useNavigate()

  const context= useContext(GlobalContext)
  const {  addToPokedex, removeFromPokedex , inPokedex}= context.managePokedex
  
 const buttonPokemon =()=>{
 if(inPokedex(pokemon)){
  return  <CatchButton background={"#ff6262"} color={"#fff"} onClick={()=>{removeFromPokedex(pokemon)}}>excluir</CatchButton>

 }else{
  return  <CatchButton background={"#fff"} color={"#000"}  onClick={()=>{addToPokedex(pokemon)}}>adicionar</CatchButton>
 }

 }
  return (
<Container backColors={"#316520"}>
      <div>
        <PokemonNumber>{pokemon.id}</PokemonNumber>
        <PokemonName>{pokemon.name}</PokemonName>
        <TypesContainer>
        {pokemon.types.map((type) => {
                return <PokemonType key={type} src={cardTypes(type)} alt='' />
            })}
        </TypesContainer>
        <button onClick={() => goToDetailsPage(navigate)}>Detalhes</button>
      </div>
      <div>
        <Pokemon src={pokemon.sprites.default} alt={pokemon.name}/>
       {buttonPokemon()}
      </div>
      <Pokeball src={pokeball} alt="pokeball" />
    </Container>
  )
}

export default PokemonCard