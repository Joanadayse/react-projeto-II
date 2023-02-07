import axios from "axios";
import { useState } from "react";
import { corFundoCard } from "../Functions/backColors";

const usePokemon = () => {
    const [pokemon, setPokemon] = useState([]);
   
    function type(res) {
        const t = [];
        if (res.data.types.length === 1) {
            t.push(res.data.types[0].type.name);
        } else {
            t.push(res.data.types[0].type.name);
            t.push(res.data.types[1].type.name);
        }

        return t;
    }
    function stats(res) {
        const s = [];
        res.data.stats.map((stat) => {
            s.push({
                name: stat.stat.name,
                base_stat: stat.base_stat,
            });
        });
        return s;
    }
    const request = async (url) => {
        try {
            const res = await axios.get(url)
            setPokemon({
                name: res.data.name,
                id: res.data.id,
                moves: {
                    ataque1: res.data.moves[0].move.name,
                    ataque2: res.data.moves[1].move.name,
                    ataque3: res.data.moves[2].move.name,
                    ataque4: res.data.moves[3].move.name,
                },
                sprites: {
                    frontDefault: res.data.sprites.front_default,
                    backDefault: res.data.sprites.back_default,
                    default: res.data.sprites.other.home.front_default
                },
                types: type(res), 
                stats: stats(res),
                backColors: corFundoCard(res.data.types[0].type.name)
            });
        } catch (error) {
            console.log(error);
        }
    }
    return {
        pokemon, request
    }
}

export default usePokemon

