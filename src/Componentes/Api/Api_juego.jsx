import { useEffect, useState } from "react";
import PokemonService from "/src/Api/PokemonService.js";
import { urlIMGPokemon } from "/src/Api/Constantes.js";
import "/src/css/Api_juego.css";
import { Grid, Box, Button, Alert } from "@mui/material";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import Logo from "/src/Img/Logo.png";
import Snackbar from "@mui/material/Snackbar";

export default function Api_juego() {
  const [pokemon, setPokemon] = useState({});
  const [pokemones, setPokemones] = useState([]);
  const [randomPokemon, setRandomPokemon] = useState([]);
  const [open, setOpen] = useState(false);
  const [tipoAlerta, setTipoAlerta] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [perdio, setPerdio] = useState(false);
  const [puntaje, setPuntaje] = useState(0);
  const [score, setScore] = useState(0);
  const [seleccion, setSeleccion] = useState(null);
  const tiempo = 3000;

  const fnListarPokemones = async () => {
    const data = await PokemonService.listarPokemones();
    setPokemones(data.results);
    fnGenerarPokemon(data.results);
  };

  const fnRandom = (max) => {
    return Math.floor(Math.random() * max);
  };

  const fnGenerarPokemon = (data) => {
    let array = [];
    let maxPok = 4;
    let indice = 0;
    let indexPok;
    do {
      indexPok = fnRandom(data.length);

      if (array.filter((x) => x.name == data[indexPok].name).length == 0) {
        let item = data[indexPok];

        item.id = item.url.split("/")[6];
        array[indice] = item;
        indice++;
      }
    } while (indice < maxPok);

    indexPok = fnRandom(array.length);
    setPokemon(array[indexPok]);
    setRandomPokemon(array);
    setSeleccion(null);
    setScore(fnRecuperarScore());
    
  };

  const fnNuevaPartida = () => {
    setPerdio(false);
    setPuntaje(0);
    fnGenerarPokemon(pokemones);
  };

  const fnRecuperarScore = () => {
    if (localStorage.getItem('score') != null){
      return parseInt(localStorage.getItem('score'));
    }
    return 0;
  };

  const fnGuardarScore = () => {
    if (puntaje > score) {
      localStorage.setItem('score',puntaje);
    }
  };

  const fnEscoger = (item) => {
    setOpen(true);
    if (item.name == pokemon.name) {
      setTipoAlerta('success');
      setMensaje('Correcto, el pokemon fue ' + pokemon.name);
      setPuntaje(puntaje + 10);
      setTimeout(() => {
        fnGenerarPokemon(pokemones);
      }, tiempo);
    } else {
      fnGuardarScore();
      setTipoAlerta('error');
      setMensaje('Incorrecto el pokemon fue ' + pokemon.name +  ':(');
      setPerdio(true);
      setScore(fnRecuperarScore());
    }
    setSeleccion(item);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    fnListarPokemones();
  }, []);

  return (
    <>
      <div className="bodyJuego">
        {/* <h1>Pokemon: {pokemon.name}</h1> */}

        <Snackbar open={open} autoHideDuration={tiempo} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity={tipoAlerta}
            variant="filled"
            sx={{ width: "100%" }}
          >
            {mensaje}
          </Alert>
        </Snackbar>
        <Grid container justifyContent="center" className="puntuacion">
          <Grid container justifyContent="center">
            <img src={Logo} alt="Logo " className="logoPoke" />
          </Grid>
          <Grid item xs={6} md={6}>
            <h1>Score : {score}</h1>
          </Grid>
          <Grid item xs={6} md={6}>
            <h1>Puntaje : {puntaje}</h1>
          </Grid>
        </Grid>

        <Grid container justifyContent="center">
          <Grid item xs={6} md={6}>
            <Box p={2}>
              {pokemon.id != undefined && (
                <img
                  src={urlIMGPokemon + pokemon.id + ".png"}
                  alt=""
                  className={seleccion == null ? "pokemon-dark" : ""}
                />
              )}
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box>
              <Button
                onClick={() => fnNuevaPartida()}
                color={"primary"}
                variant={"contained"}
                size={"small"}
                style={{ textAlign: "center", marginTop: "10px" }}
                startIcon={<AutorenewIcon></AutorenewIcon>}
                disabled={!perdio}
              >
                Nueva Partida
              </Button>

              {randomPokemon.map((item, index) => (
                <Button
                  key={index}
                  variant="contained"
                  color="info"
                  className="buttonJuego"
                  sx={{ p: 2 }}
                  style={{ marginTop: "10px" }}
                  disabled={perdio || seleccion}
                  onClick={() => fnEscoger(item)}
                >
                  {item.name}
                </Button>
              ))}
            </Box>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
