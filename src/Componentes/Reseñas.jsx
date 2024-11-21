import { useState } from "react";
import "../css/styles.css";
import mesas from "../Img/mesasreseñas.jpeg";

const Reseñas = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [tableNumber, setTableNumber] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);
  const [reviews, setReviews] = useState([]);
  const [successMessage, setSuccessMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating === 0) {
      alert("Por favor, elige una calificación de 1 a 5 estrellas.");
      return;
    }
    if (!isValidTableNumber(tableNumber)) {
      alert("Solo puedes elegir un número de mesa entre 1 y 21.");
      return;
    }
    const newReview = {
      name,
      lastName,
      tableNumber,
      email,
      comment,
      rating,
      usefulCount: 0,
      notUsefulCount: 0,
    };

    setReviews([...reviews, newReview]);
    setName("");
    setLastName("");
    setTableNumber("");
    setEmail("");
    setComment("");
    setRating(0);
    setSuccessMessage(true);

    setTimeout(() => setSuccessMessage(false), 3000);
  };

  const handleStarClick = (star) => {
    setRating(star);
  };

  const handleUsefulClick = (index) => {
    const updatedReviews = [...reviews];
    updatedReviews[index].usefulCount += 1;
    setReviews(updatedReviews);
  };

  const handleNotUsefulClick = (index) => {
    const updatedReviews = [...reviews];
    updatedReviews[index].notUsefulCount += 1;
    setReviews(updatedReviews);
  };

  const isValidTableNumber = (value) => {
    const num = parseInt(value, 10);
    return !isNaN(num) && num >= 1 && num <= 21;
  };

  const handleTableNumberChange = (e) => {
    const value = e.target.value;
    if (value === "" || isValidTableNumber(value)) {
      setTableNumber(value);
    }
  };

  const averageRating = (
    reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length ||
    0
  ).toFixed(1);

  return (
    <div className="container columns">
      {/* Mapa de Mesas */}
      <div className="column is-half">
        <div className="box mesas-box">
          <h3 className="mesa-title">MESAS</h3>
          <img src={mesas} alt="pollo" className="mesas-image" />
        </div>
      </div>

      {/* Formulario de Reseña */}
      <div className="column is-two-thirds">
        <form onSubmit={handleSubmit} className="box">
          <h3 className="form-title">Deja tu Reseña</h3>

          {successMessage && (
            <p className="confirmar has-text-centered">
              ¡Reseña enviada con éxito!
            </p>
          )}
          <div className="field">
            <input
              className="input"
              type="text"
              placeholder="NOMBRE"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="field">
            <input
              className="input"
              type="text"
              placeholder="APELLIDOS"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div className="field">
            <input
              className="input"
              type="number"
              placeholder="NUMERO DE MESA (1-21)"
              value={tableNumber}
              onChange={handleTableNumberChange}
              required
            />
          </div>
          <div className="field">
            <input
              className="input"
              type="email"
              placeholder="CORREO ELECTRONICO"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="field">
            <textarea
              className="textarea"
              placeholder="COMENTARIO DEL LUGAR"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              required
            ></textarea>
          </div>

          <div className="field">
            <label className="rating-title">Calificación</label>
            <div className="control rating-stars">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className={`star ${star <= rating ? "selected" : ""}`}
                  onClick={() => handleStarClick(star)}
                >
                  ★
                </span>
              ))}
            </div>
          </div>

          <div className="control">
            <button type="submit" className="submit-button">
              ENVIAR
            </button>
          </div>
        </form>
      </div>

      {/* Sección de Reseñas */}
      <div className="reseñas-container">
        <h3 className="average-rating">
          Calificación promedio: {averageRating} ★
        </h3>
        {reviews.length > 0 ? (
          <div className="columns is-multiline is-mobile">
            {reviews.map((review, index) => (
              <div key={index} className="column is-one-quarter">
                <div className="resena">
                  <p>
                    <strong>Nombre:</strong> {review.name} {review.lastName}
                  </p>
                  <p>
                    <strong>Número de Mesa:</strong> {review.tableNumber}
                  </p>
                  <p>
                    <strong>Correo Electrónico:</strong> {review.email}
                  </p>
                  <p>
                    <strong>Comentario:</strong> {review.comment}
                  </p>
                  <p>
                    <strong>Calificación:</strong> {"★".repeat(review.rating)}
                  </p>
                  <div>
                    <button
                      onClick={() => handleUsefulClick(index)}
                      className="useful-button"
                    >
                      Útil ({review.usefulCount})
                    </button>

                    <button
                      onClick={() => handleNotUsefulClick(index)}
                      className="not-useful-button"
                    >
                      No Útil ({review.notUsefulCount})
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="has-text-centered">No hay reseñas aún.</p>
        )}
      </div>
    </div>
  );
};

export default Reseñas;
