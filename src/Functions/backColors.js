export const colors = {
    fire: "#EAAB7D",
    grass: "#729F92",
    electric: "#ECD846",
    water: "#71C3FF",
    ground: "#d27f50",
    rock: "#d4bf8c",
    fairy: "#f293e8",
    poison: "#ac56c3",
    bug: "#76A866",
    dragon: "#0470db",
    psychic: "#f87c7a",
    flying: "#9bb3ee",
    fighting: "#d54452",
    normal: "#BF9762",
    dark:"#5f606d",
    steel:"#5596a4",
    ice:"#7ed4c9",
    ghost:"#6970c5"
  };
  export function corFundoCard(type) {
    switch (type) {
        case "fire":
            return colors.fire;
        case "grass":
            return colors.grass;
        case "electric":
            return colors.electric;
        case "water":
            return colors.water
        case "ground":
            return colors.ground
        case "rock":
            return colors.rock
        case "fairy":
            return colors.fairy
        case "poison":
            return colors.poison
        case "bug":
            return colors.bug
        case "dragon":
            return colors.dragon
        case "psychic":
            return colors.psychic
        case "flying":
            return colors.flying
        case "fighting":
            return colors.fighting
        case "normal":
            return colors.normal
        case "dark":
            return colors.dark
        case "steel":
            return colors.steel
        case "ice":
            return colors.ice
        case "ghost":
            return colors.ghost
        default:
            break;
    }
  }