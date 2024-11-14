import { useEffect, useState } from "react";
import Api_Header from "./Api/Api_Header";
import axios from "axios";
import { URL_POKEMON } from "../Api/apiRest";
import Api_card from "./Api/Api_card";
import '../css/api.css';
import * as FaIcons from 'react-icons/fa';
import Api_intro from "./Api/Api_intro";
import JuegoPokemon from "../Componentes/Api/Api_juego.jsx"; // Importa el componente del juego

export default function Api() {
  const [arrayPokemon, setArrayPokemon] = useState([]);
  const [globalPokemon, setGlobalPokemon] = useState([]);
  const [xpage, setXpage] = useState(1);
  const [search, setSearch] = useState('');
  const [mostrarJuego, setMostrarJuego] = useState(false); // Nuevo estado para controlar la vista


  const handleRegresar = () => {
    setMostrarJuego(false);
  };

  useEffect(() => {
    const api = async () => {
      const limit = 15;
      const xp = (xpage - 1) * limit;
      const apiPoke = await axios.get(`${URL_POKEMON}/?offset=${xp}&limit=${limit}`);

      setArrayPokemon(apiPoke.data.results);
    };
   
    api();
    getGlobalPokemon();
  }, [xpage]);

  const getGlobalPokemon = async () => {
    const res = await axios.get(`${URL_POKEMON}?offset=0&limit=1000`);
    const promises = res.data.results.map(pokemon => pokemon);
    const results = await Promise.all(promises);
    setGlobalPokemon(results);
  };

  const obtenerSearch = (e) => {
    const texto = e.toLowerCase();
    setSearch(texto);
    setXpage(1);
  };

  const filterPokemons = search?.length > 0
    ? globalPokemon?.filter(pokemon => pokemon?.name?.includes(search))
    : arrayPokemon;

  return (
    <div className="Api_home">
      {mostrarJuego ? (
        <JuegoPokemon onRegresar={handleRegresar} />
      ) : (
        <>
          <Api_intro />
          <Api_Header obtenerSearch={obtenerSearch} />
          
          <section className="section_paginacion">
            <div className="div_paginacion">
              <span className="item_izquierdo"
                onClick={() => xpage > 1 && setXpage(xpage - 1)}
              >
                {""}<FaIcons.FaAngleLeft />{""}
              </span>
              <span className="item">{xpage}</span>
              <span className="item">DE</span>
              <span className="item">{Math.round(globalPokemon?.length / 15)}</span>
              <span className="item_derecho"
                onClick={() => xpage < 67 && setXpage(xpage + 1)}
              >
                {""}<FaIcons.FaAngleRight />{""}
              </span>
            </div>
          </section>

          <div className="card_content">
            {filterPokemons.map((card, index) => (
              <Api_card key={index} card={card} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
