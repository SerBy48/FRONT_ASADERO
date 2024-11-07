import "../css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer has-text-black">
      <div className="container">
        <div className="columns">
          <div className="column">
            <h3 className="title is-5 has-text-black">Asadero El Gallito</h3>
            <p className="has-text-black">
              Disfruta de los mejores platos y la más alta calidad en nuestro
              asadero. Visítanos o haz tu pedido en línea.
            </p>
          </div>

          <div className="column">
            <h3 className="title is-5 has-text-black">Horarios de Atención</h3>
            <p className="has-text-black">Lunes a Viernes: 9:00 AM - 8:00 PM</p>
            <p className="has-text-black">
              Sábados y Domingos: 10:00 AM - 6:00 PM
            </p>
          </div>

          <div className="column">
            <h3 className="title is-5 has-text-black">Síguenos</h3>
            <div className="social-icons">
                <a href="#" className="icon has-text-black social-icon">
                <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="icon has-text-black social-icon">
                <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="icon has-text-black social-icon">
                <i className="fab fa-instagram"></i>
                </a>
            </div>
            </div>

        </div>

        <div className="has-text-centered has-text-black">
          <p>&copy; 2024 Asadero El Gallito. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
