import { useState } from "react";
import "../css/Reservas.css";
import Reservas_header from "./Reservas_header";

const Reservas = () => {
  const [reservations, setReservations] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    people: "",
    date: "",
    phone: "",
    email: "",
    descrip: "",
  });

  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const correctPassword = "Gallito123";
  const [notification, setNotification] = useState(""); // Estado para la notificación

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (password === correctPassword) {
      setIsAuthenticated(true);
    } else {
      alert("Contraseña incorrecta");
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setReservations([...reservations, formData]);
    setFormData({ name: "", people: "", date: "", phone: "", email: "" });
    setNotification("¡Reserva completada con éxito!"); // Muestra la notificación
    setTimeout(() => setNotification(""), 3000);
  };

  return (
    <>
      <div>
        <Reservas_header></Reservas_header>
      </div>
      <div className="container-reserva-notification">
        {notification && (
          <div className="notification-reserva is-success">{notification}</div>
        )}
      </div>
      <div className="container container-reserva">
        <div className="box box-reserva">
          <h2 className="title title-reserva is-4">
            Reserva tu mesa en Asadero <span>¡El Gallito!</span>
          </h2>
          <form className="reservation-form" onSubmit={handleSubmit}>
            <div className="field">
              <label className="label label-reserva">Nombre de reserva</label>
              <div className="control">
                <input
                  className="input input-reserva"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Nombre"
                  required
                />
              </div>
            </div>
            <div className="field">
              <label className="label label-reserva">Número de personas</label>
              <div className="control">
                <input
                  className="input input-reserva"
                  type="number"
                  name="people"
                  value={formData.people}
                  onChange={handleChange}
                  min="1"
                  max="10"
                  placeholder="1"
                  required
                />
              </div>
            </div>
            <div className="field">
              <label className="label label-reserva">Fecha de reserva</label>
              <div className="control">
                <input
                  className="input input-reserva"
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  min={new Date().toISOString().split("T")[0]}
                  max={
                    new Date(
                      new Date().setFullYear(new Date().getFullYear() + 1)
                    )
                      .toISOString()
                      .split("T")[0]
                  }
                  required
                />
              </div>
            </div>
            <div className="field">
              <label className="label label-reserva">Teléfono</label>
              <div className="control">
                <input
                  className="input input-reserva"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Teléfono"
                  required
                />
              </div>
            </div>
            <div className="field">
              <label className="label label-reserva">Correo electrónico</label>
              <div className="control">
                <input
                  className="input input-reserva"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Correo"
                  required
                />
              </div>
            </div>
            <div className="field">
              <label className="label label-reserva">
                Hora de llegada e info adicional
              </label>
              <div className="control">
                <input
                  className="input input-reserva"
                  type="text"
                  name="descrip"
                  value={formData.descrip}
                  onChange={handleChange}
                  placeholder="Hora de llegada y demás"
                  required
                />
              </div>
            </div>
            <button
              className="button button-reserva is-fullwidth"
              type="submit"
            >
              Reservar
            </button>
          </form>
        </div>

        <div className="box box-reserva mt-5">
          {!isAuthenticated ? (
            <form onSubmit={handlePasswordSubmit}>
              <h3 className="title is-5">
                Ingresa la contraseña para ver las reservas
              </h3>
              <div className="field">
                <div className="control">
                  <input
                    className="input input-reserva"
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>
              <button className="button button-reserva is-waring" type="submit">
                Ver reservas
              </button>
            </form>
          ) : (
            <>
              <h3 className="title title-reserva is-5">Reservas Guardadas</h3>
              {reservations.length === 0 ? (
                <p className="has-text-grey">Aún no hay reservas.</p>
              ) : (
                <ul>
                  {reservations.map((reservation, index) => (
                    <li
                      key={index}
                      className="notification notification-reserva is-info mb-2"
                    >
                      <strong>{reservation.name}</strong> reservó para{" "}
                      {reservation.people} personas el día {reservation.date}.
                      <br />
                      <strong>Teléfono:</strong> {reservation.phone} <br />
                      <strong>Correo:</strong> {reservation.email} <br />
                      <strong>Hora y Comentarios:</strong> {reservation.descrip}
                    </li>
                  ))}
                </ul>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Reservas;
