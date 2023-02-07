export const goToHome = (navigate) => {
    navigate("/");
  };

export const goToDetailsPage = (navigate, pokemonName) => {
  navigate(`/details`);
};

export const goToList = (navigate) => {
    navigate("/pokedex");
  };