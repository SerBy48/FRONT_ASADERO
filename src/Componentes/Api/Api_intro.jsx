import '/src/css/Api_intro.css'
import { Link } from 'react-router-dom';

export default function Api_intro() {
  return (
    <section className="hero is-fullwidth is-bold">
    <div className="hero-body">
        <div className="container has-text-centered">
        <h1 className="title welcome-text">
            ¡Bienvenidos a la Pokédex del Asadero  "El Gallito"!
        </h1>
        <Link to="/juego" className="button is-large is-warning play-button">
          ¡Juega a "¿Quién es ese Pokémon?"!
        </Link>
        <p className="subtitle welcome-subtitle">
            Descubre todos los Pokémon, sus evoluciones, y mucho más. 
            Explora un mundo de criaturas increíbles y conviértete en un verdadero maestro Pokémon.
            <span className='is-large is-warning'>Gana grandes recompensas cuando seas un verdadero maestro pokemon.</span> 
        </p>
        </div>
    </div>
</section>

  )
}
