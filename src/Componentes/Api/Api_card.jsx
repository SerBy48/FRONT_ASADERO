import { useEffect, useState } from "react";
import "/src/css/Api_card.css";
import axios from "axios";
import { URL_ESPECIES, URL_EVOLUCIONES, URL_POKEMON } from "../../Api/apiRest";

// eslint-disable-next-line react/prop-types
export default function Api_card({ card }) {
  const [itemPokemon, setItemPokemon] = useState({});
  const [especiePokemon, setEspeciePokemon] = useState({});
  const [evoluciones, setEvoluciones] = useState([]);

  useEffect(() => {
    const dataPokemon = async () => {
      // eslint-disable-next-line react/prop-types
      const api = await axios.get(`${URL_POKEMON}/${card.name}`);

      setItemPokemon(api.data);
    };
    dataPokemon();
  }, [card]);

  useEffect(() => {
    const dataEspecie = async () => {
      // eslint-disable-next-line react/prop-types
      const URL = card.url.split("/");

      const api = await axios.get(`${URL_ESPECIES}/${URL[6]}`);

      setEspeciePokemon({
        url_especie: api?.data?.evolution_chain,
        data: api?.data,
      });
    };
    dataEspecie();
  }, [card]);

  useEffect(() => {
    async function getpokemonImagen(id) {
      const response = await axios.get(`${URL_POKEMON}/${id}`);

      return response?.data?.sprites?.other["official-artwork"]?.front_default;
    }


    if (especiePokemon?.url_especie) {

      const obtenerEvoluciones = async () => {
            const arrayEvoluciones = [];
            const URL = especiePokemon?.url_especie?.url?.split("/");
            const api = await axios.get(`${URL_EVOLUCIONES}/${URL[6]}`);

            const URL2 = api?.data?.chain?.species?.url?.split("/")

            const img1 =await getpokemonImagen(URL2[6]);
            arrayEvoluciones.push({
                img: img1,
                name:api?.data?.chain?.species?.name,
            })

            if(api?.data?.chain?.evolves_to?.length !== 0 ){
                const DATA2 = api?.data?.chain?.evolves_to[0]?.species
                const ID = DATA2?.url?.split("/")
                const img2 = await getpokemonImagen(ID[6])

                arrayEvoluciones.push({
                    img: img2,
                    name:DATA2?.name,
                })

                if (api?.data?.chain?.evolves_to[0]?.evolves_to?.length !== 0) {
                    const DATA3 = api?.data?.chain?.evolves_to[0]?.evolves_to[0]?.species
                    const ID = DATA3?.url?.split("/")
                    const img3 = await getpokemonImagen(ID[6])

                    arrayEvoluciones.push({
                        img: img3,
                        name:DATA3?.name,
                    })
                
                }
            }



            setEvoluciones(arrayEvoluciones)
            // const img1 = await getpokemonImagen{api.}
        };
        obtenerEvoluciones();
    }
  }, [especiePokemon]);


  let pokeId = itemPokemon?.id?.toString();

  if (pokeId?.length == 1) {
    pokeId = "00" + pokeId;
  } else if (pokeId?.length == 2) {
    pokeId = "0" + pokeId;
  }
  return (
    <div className="card">
      <img
        className="img_poke"
        src={itemPokemon?.sprites?.other["official-artwork"]?.front_default}
        alt="pokemon"
      />
      <div className={`bg-${especiePokemon?.data?.color?.name} sub_card`}>
        <strong className="id_card"># {pokeId} </strong>
        <strong className="name_card"> {itemPokemon.name} </strong>
        <h4 className="altura_poke">Altura: {itemPokemon.height}0 cm</h4>
        <h4 className="peso_poke">Peso: {itemPokemon.weight} Kg</h4>
        <h4 className="habitat_poke">
          Habitat: {especiePokemon?.data?.habitat?.name}
        </h4>
        <div className="div_stats">
          {itemPokemon?.stats?.map((sta, index) => {
            return (
              <h6 key={index} className="item_stats">
                <span className="name"> {sta.stat.name}</span>
                <progress value={sta.base_stat} max={110}>
                  {" "}
                </progress>
                <span className="numero"> {sta.base_stat}</span>
              </h6>
            );
          })}
        </div>
        <div className="div_type_color">
          {itemPokemon?.types?.map((ti, index) => {
            return (
              <h6 key={index} className={`color-${ti.type.name} color_type`}>
                {""}
                {ti.type.name}
                {""}
              </h6>
            );
          })}
        </div >
          
        <div className="div_evolucion">
        {evoluciones.map((evo, index) => {
            return(
            // eslint-disable-next-line react/jsx-key
            <div key={index} className="item_evo">
                <img src={evo.img} alt="   " className="img"/>
                <h6>{evo.name}</h6>
            </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
