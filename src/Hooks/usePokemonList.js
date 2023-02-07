import axios from "axios";
import { useState } from "react";


export default function usePokemonList() {
    const [pokemons, setPokemons] = useState({
        count: "",
        next: "",
        previous: "",
        results: [],
    });
  
    const request = async (url) => {
        try {
            const res = await axios.get(url)
            setPokemons({
                count: res.data.count,
                next: res.data.next,
                previous: res.data.previous,
                results: res.data.results,
            });
        } catch (error)  {
            console.log(error);
        }
    }
    return {
        pokemons, request
    }
}

