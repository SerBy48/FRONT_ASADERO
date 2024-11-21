import "../css/Reservas_header.css";

export default function Reservas_header() {
  return (
    <section className="reservation-section">
  <div className="reservation-container">
    <h1 className="reservation-title">
      ¡Reserva tu Mesa Ahora y Vive una Experiencia Inolvidable!
    </h1>
    <p className="reservation-subtitle">
      Haz tu reserva y te confirmaremos rápidamente por WhatsApp o correo
      electrónico.
      <strong>¡Tus datos están 100% seguros!</strong>
    </p>

    <div className="reservation-fixed-layout">
      <div className="reservation-box reservation-success-box">
        <h2 className="reservation-box-title">Seguridad en tus Datos</h2>
        <p className="reservation-box-text">
          Confirma tu reserva sabiendo que tu información está protegida.
        </p>
      </div>
      <div className="reservation-box reservation-warning-box">
        <h2 className="reservation-box-title">Confirmación Rápida</h2>
        <p className="reservation-box-text">
          Recibe tu confirmación por WhatsApp o correo electrónico en pocos
          minutos.
        </p>
      </div>
    </div>

    <div className="reservation-content">
      <p className="reservation-text">
        ¡Estamos listos para ofrecerte un servicio excepcional y una experiencia
        única! No te pierdas la oportunidad de disfrutar de nuestros deliciosos
        platillos.
        <strong>¡Te esperamos con muchas ganas de atenderte!</strong>
      </p>
    </div>
  </div>
</section>

  );
}
