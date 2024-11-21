import axios from "axios";

class PokemonService{
    url = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=600";

    async listarPokemones(){
        const response =await axios.get(this.url);
        return response.data;
    }

}
export default new PokemonService();