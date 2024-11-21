import React from 'react';
import { Link } from 'react-router-dom';
import Productos from './Productos.jsx'; 
import "../css/novedades.css";
import polloAsadoB from '../Img/pollo-brocheta.jpg';
import polloAsadoP from '../Img/pollo-picante.jpg';
import polloAsadoH from '../Img/pollo-hierbas.jpg';
import polloAsadoR from '../Img/pollo-restaurante.jpg';
import pollo from '../Img/pollo1.jpg';

function Inicio() {
  return (
    <div>
      {/* Bienvenida */}
      <section className="section">
        <div className="contenedor-g">
          <h2 className="titulo-sección">¡Bienvenidos a nuestro restaurante!</h2>
          <div className="columns is-vcentered">
            <div className="column is-half1">
              <img src={polloAsadoR} alt="Imagen bienvenida" className="img-bienvenida" />
            </div>
            <div className="column is-half1">
              <p>
                En nuestro restaurante, nos enorgullecemos de ofrecer una experiencia culinaria única,
                donde cada platillo es preparado con ingredientes frescos y de la mejor calidad. ¡Ven y disfruta de
                nuestra especialidad en pollos asados y mucho más!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Novedades */}
      <section className="section">
        <div className="contenedor-g">
          <h2 className="titulo-sección">Novedades del Menú</h2>

          <div className="columns is-multiline">
            {/* Cuadro de Novedad 1 */}
            <div className="column is-4">
              <Link to="/productos">
              <div className="novedad-box">
                <img src={polloAsadoB} alt="Pollo Asado en Brocheta" />
                <div className="contenido">
                  <h3>Pollo Asado en Brocheta</h3>
                  <p>Ahora podrás disfrutar de nuestro delicioso pollo asado servido en brocheta. Perfecto para compartir con los que más quieres.</p>
                </div>
              </div>
              </Link>
            </div>

            {/* Cuadro de Novedad 2 */}
            <div className="column is-4">
              <Link to="/productos">
              <div className="novedad-box">
                <img src={polloAsadoH} alt="Pollo Asado con Hierbas" />
                <div className="contenido">
                  <h3>Pollo Asado con Hierbas</h3>
                  <p>Un clásico reinventado con una mezcla de hierbas frescas que aportan un sabor único y delicioso, para aquellos que buscan un sabor más refinado.</p>
                </div>
              </div>
              </Link>
            </div>

            {/* Cuadro de Novedad 3 */}
            <div className="column is-4">
              <Link to="/productos">
              <div className="novedad-box">
                <img src={polloAsadoP} alt="Pollo Asado Picante" />
                <div className="contenido">
                  <h3>Pollo Asado Picante</h3>
                  <p>Para los amantes del picante, ahora ofrecemos pollo asado con un toque de salsa picante especial. ¿Te atreves a probarlo?</p>
                </div>
              </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Sobre Nosotros */}
      <section className="section">
        <div className="contenedor-g">
          <h2 className="titulo-sección">Sobre nosotros</h2>
          <div className="columns is-vcentered">
            <div className="column is-half2">
              <p>
                Nuestro restaurante ha estado sirviendo a la comunidad durante más de 20 años, ofreciendo
                platillos que combinan tradición y creatividad. Nos esforzamos por mantener un ambiente acogedor
                y brindar a nuestros clientes una experiencia memorable en cada visita.
              </p>
            </div>
            <div className="column is-half2">
              <img src={pollo} alt="Imagen de trayectoria"/>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Inicio;
