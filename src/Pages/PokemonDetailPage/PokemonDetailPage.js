import { useLocation } from "react-router-dom"
import Header from "../../components/Header/Header"

const PokemonDetailPage = () => {
  const {state} = useLocation()
  return (
    <div>
      <Header pokemon={state}/>
      {state.name}
    </div>
  )
}

export default PokemonDetailPage