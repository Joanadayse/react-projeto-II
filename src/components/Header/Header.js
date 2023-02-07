import { useLocation, useNavigate } from "react-router-dom";
import { goToHome, goToList } from "../../routes/coordinator";
import { Button, Title, Container } from "./styles";

function Header() {
  const location = useLocation();

  const navigate = useNavigate();

  const renderHeader = () => {
    switch (location.pathname) {
      case "/":
        return (
          <>
            <div className="imagem">
              <img
                alt="PokéAPI"
                src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
              />
            </div>
            <Button onClick={() => goToList(navigate)}>Ver pokedex</Button>
          </>
        );
      case "/pokedex":
        return (
          <>
          <div className="imagem">
              <img
                alt="PokéAPI"
                src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
              />
            </div>
            <Button onClick={() => goToHome(navigate)}>
            Ver lista de Pokemons
          </Button>
           
          
          </>
         
        );
      default:
        return (
          <>
            <Title>Detalhes</Title>
            <Button onClick={() => goToHome(navigate)}>
              Voltar para a PokéDex
            </Button>
          </>
        );
    }
  };

  return <Container>{renderHeader()}</Container>;
}

export default Header;
