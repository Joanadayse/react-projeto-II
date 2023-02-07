import bug from "../assets/pokemon-types/bug.png";
import dark from "../assets/pokemon-types/dark.png";
import dragon from "../assets/pokemon-types/dragon.png";
import electric from "../assets/pokemon-types/electric.png";
import fairy from "../assets/pokemon-types/fairy.png";
import fighting from "../assets/pokemon-types/fighting.png";
import fire from "../assets/pokemon-types/fire.png";
import flying from "../assets/pokemon-types/flying.png";
import ghost from "../assets/pokemon-types/ghost.png";
import grass from "../assets/pokemon-types/grass.png";
import ground from "../assets/pokemon-types/ground.png";
import ice from "../assets/pokemon-types/ice.png";
import normal from "../assets/pokemon-types/normal.png";
import poison from "../assets/pokemon-types/poison.png";
import psychic from "../assets/pokemon-types/psychic.png";
import rock from "../assets/pokemon-types/rock.png";
import steel from "../assets/pokemon-types/steel.png";
import water from "../assets/pokemon-types/water.png";


export function cardTypes(type) {
    switch (type) {
        case "fire":
            return fire;
        case "grass":
            return grass;
        case "electric":
            return electric;
        case "water":
            return water
        case "ground":
            return ground
        case "rock":
            return rock
        case "fairy":
            return fairy
        case "poison":
            return poison
        case "bug":
            return bug
        case "dragon":
            return dragon
        case "psychic":
            return psychic
        case "flying":
            return flying
        case "fighting":
            return fighting
        case "normal":
            return normal
        case "dark":
            return dark
        case "steel":
            return steel
        case "ice":
            return ice
        case "ghost":
            return ghost
        default:
            break;
    }
  }