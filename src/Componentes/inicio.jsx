import React from 'react';
import { Link } from 'react-router-dom';
import "../css/carrusel-novedades.css"
import polloAsado2 from '../Img/pollo-asado2.jpg';
import polloAsado3 from '../Img/pollo-asado3.jpg';
import polloAsadoB from '../Img/pollo-brocheta.jpg';
import polloAsadoC from '../Img/pollo-combo.jpg';
import polloAsadoP from '../Img/pollo-picante.jpg';
import polloAsadoS from '../Img/pollo-salsas.jpg';
import polloAsadoV from '../Img/pollo-vino.jpg';
import polloAsadoBB from '../Img/pollo-bbq.jpg';


function Inicio() {
  return (
    <div>
      {/* Carrusel */}
      <section className="section">
        <div className="container">
          <h2 className="title has-text-centered">¡Bienvenidos a nuestro restaurante!</h2>
          <div className="carousel">
            
            {/* Carrusel de Imágenes */}
            
            <div className="carousel-item">
              <img src={polloAsado2} alt="Pollo asado 2" className="carousel-image" />
            </div>
            <div className="carousel-item">
              <img src={polloAsado3} alt="Pollo asado 3" className="carousel-image" />
            </div>
          </div>

          {/* Controles del Carrusel */}
          <div className="carousel-navigation">
            <button className="button is-primary is-small" aria-label="previous">
              <span className="icon is-small">
                <i className="fas fa-chevron-left"></i>
              </span>
            </button>
            <button className="button is-primary is-small" aria-label="next">
              <span className="icon is-small">
                <i className="fas fa-chevron-right"></i>
              </span>
            </button>
          </div>
        </div>

      </section>


      {/* Sección de Novedades */}
      <section className="section">
        <div className="container">
          <h2 className="title has-text-centered">Novedades del Menú</h2>

          <div className="columns is-multiline">
            {/* Cuadro de Novedad 1 */}
            <div className="column is-4">
              <div className="novedad-box">
                <img src={polloAsadoB} alt="Pollo Asado en Brocheta" />
                <div className="content">
                  <h3>Pollo Asado en Brocheta</h3>
                  <p>Ahora podrás disfrutar de nuestro delicioso pollo asado servido en brocheta. Perfecto para compartir.</p>
                  <a href="/productos" className="button">Saber más</a>
                </div>
              </div>
            </div>

            {/* Cuadro de Novedad 2 */}
            <div className="column is-4">
              <div className="novedad-box">
                <img src={polloAsadoC} alt="Pollo asado Combo Familiar" />
                <div className="content">
                  <h3>Combo Familiar</h3>
                  <p>Estrenamos el combo familiar, que incluye pollo asado y una selección de guarniciones variadas. ¡Ideal para toda la familia!</p>
                  <a href="/productos" className="button">Saber más</a>
                </div>
              </div>
            </div>

            {/* Cuadro de Novedad 3 */}
            <div className="column is-4">
              <div className="novedad-box">
                <img src={polloAsadoP} alt="Pollo Asado Picante" />
                <div className="content">
                  <h3>Pollo Asado Picante</h3>
                  <p>Para los amantes del picante, ahora ofrecemos pollo asado con un toque de salsa picante especial. ¿Te atreves a probarlo?</p>
                  <a href="/productos" className="button">Saber más</a>
                </div>
              </div>
            </div>

            {/* Cuadro de Novedad 4 */}
            <div className="column is-4">
              <div className="novedad-box">
                <img src={polloAsadoS} alt="Pollo Asado con Salsas Especiales" />
                <div className="content">
                  <h3>Pollo Asado con Salsas Especiales</h3>
                  <p>Agregamos una nueva opción a nuestro menú: pollo asado acompañado de deliciosas salsas especiales. ¡No te lo puedes perder!</p>
                  <a href="/productos" className="button">Saber más</a>
                </div>
              </div>
            </div>

            {/* Cuadro de Novedad 5 */}
            <div className="column is-4">
              <div className="novedad-box">
                <img src={polloAsadoV} alt="Pollo Asado al Vino Tinto" />
                <div className="content">
                  <h3>Pollo al Vino Tinto</h3>
                  <p>Una receta especial para los amantes del buen vino. Pollo cocinado a fuego lento con vino tinto y especias, ¡te sorprenderá!</p>
                  <a href="/productos" className="button">Saber más</a>
                </div>
              </div>
            </div>

            {/* Cuadro de Novedad 6 */}
            <div className="column is-4">
              <div className="novedad-box">
                <img src={polloAsadoBB} alt="Pollo BBQ" />
                <div className="content">
                  <h3>Pollo Asado con Salsa BBQ</h3>
                  <p>¡Prueba nuestra nueva receta de pollo BBQ con un toque especial!</p>
                  <a href="/productos" className="button">Saber más</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default Inicio;
