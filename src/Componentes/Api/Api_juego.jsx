import { useEffect, useState } from "react";
import PokemonService from "/src/Api/PokemonService.js"


export default function Api_juego() {

  const [pokemon, setPokemon] = useState({});
  const [pokemones, setPokemones] = useState([]);
  const [randomPokemon, setRandomPokemon] = useState([]);

  const fnListarPokemones = async () =>{
    const data = await PokemonService.listarPokemones();
    setPokemones(data.results);
    fnGenerarPokemon(data.results);
  }


  const fnRandom = (max) =>{
    return  Math.floor(Math.random() * max);
  }

  const fnGenerarPokemon = (data) => {
    let array = [];
    let maxPok = 4;
    let indice = 0;
    let indexPok;
    do{
      indexPok = fnRandom(data.length);

      if(array.filter(x=>x.name ==data[indexPok].name).length==0){
        let item = data[indexPok];
        item.id =item.url.split('/')[6];
        array[indice] = item;
       indice++;
      }
    }while(indice<maxPok);

    indexPok = fnRandom(array.length);
    setPokemon(array[indexPok]);
    setRandomPokemon(array);
  }

  const fnNuevaPartida =() =>{
    fnGenerarPokemon(pokemones)
  }

  useEffect(() => {
    fnListarPokemones();
  }, []);

  return <>
    
    <div>
      <h1>Pokemon: {pokemon.name}</h1>
      <button onClick={()=>fnNuevaPartida(pokemones)}>Nueva Partida</button>
    </div>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
        {
          randomPokemon.map((item, index) =>(
            <tr key={index}>
              <td>
                {item.id}
              </td>
              <td>
                {item.name}
              </td>
              <td>
                {item.url}
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
  </>
  
  }

  
  
