import { useState } from 'react';
import '../css/styles.css'; 

const Reseñas = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [tableNumber, setTableNumber] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);
  const [reviews, setReviews] = useState([]);
  const [successMessage, setSuccessMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating === 0) {
      alert("Por favor, elige una calificación de 1 a 5 estrellas.");
      return;
    }
    const newReview = { name, lastName, tableNumber, email, comment, rating };
    setReviews([...reviews, newReview]);
    setName('');
    setLastName('');
    setTableNumber('');
    setEmail('');
    setComment('');
    setRating(0);
    setSuccessMessage(true);

    setTimeout(() => setSuccessMessage(false), 3000);
  };

  const handleStarClick = (star) => {
    setRating(star);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="box">
        <h3 className="title is-4 has-text-centered" style={{ color: '#C40C0C', fontSize: '32px', fontFamily: 'Roboto', lineHeight: '1.5' }}>Deja tu Reseña</h3>

        {successMessage && <p className="has-text-success has-text-centered" style={{ fontSize: '14px', fontFamily: 'Roboto', lineHeight: '1.5' }}>¡Reseña enviada con éxito!</p>}

        <div className="field">
          <input
            className="input"
            type="text"
            placeholder="NOMBRE"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{ fontSize: '16px', fontFamily: 'Roboto', lineHeight: '1.5' }}
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
            style={{ fontSize: '16px', fontFamily: 'Roboto', lineHeight: '1.5' }}
          />
        </div>
        <div className="field">
          <input
            className="input"
            type="number"
            placeholder="NUMERO DE MESA"
            value={tableNumber}
            onChange={(e) => setTableNumber(e.target.value)}
            required
            style={{ fontSize: '16px', fontFamily: 'Roboto', lineHeight: '1.5' }}
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
            style={{ fontSize: '16px', fontFamily: 'Roboto', lineHeight: '1.5' }}
          />
        </div>
        <div className="field">
          <textarea
            className="textarea"
            placeholder="COMENTARIO DEL LUGAR"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
            style={{ fontSize: '16px', fontFamily: 'Roboto', lineHeight: '1.5' }}
          ></textarea>
        </div>

        <div className="field">
          <label className="label" style={{ fontSize: '24px', fontFamily: 'Roboto', lineHeight: '1.5', color: '#C40C0C' }}>Calificación</label>
          <div className="control rating-stars">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                style={{
                  fontSize: '1.5rem',
                  cursor: 'pointer',
                  color: star <= rating ? '#FFD700' : '#ccc'
                }}
                onClick={() => handleStarClick(star)}
              >
                ★
              </span>
            ))}
          </div>
        </div>

        <div className="control">
          <button 
            type="submit" 
            className="button is-fullwidth"
            style={{ backgroundColor: '#3DC2EC', color: 'white', fontSize: '16px', fontFamily: 'Roboto', border: 'solid' }}
          >
            ENVIAR
          </button>
        </div>
      </form>

      <div className="section">
        <h3 className="title is-4 has-text-centered" style={{ color: '#C40C0C', fontSize: '24px', fontFamily: 'Roboto', lineHeight: '1.5' }}>Reseñas</h3>
        {reviews.length > 0 ? (
          <div className="resena-container">
            {reviews.map((review, index) => (
              <div key={index} className="resena">
                <p style={{ fontSize: '16px', fontFamily: 'Roboto' }}><strong>Nombre:</strong> {review.name} {review.lastName}</p>
                <p style={{ fontSize: '16px', fontFamily: 'Roboto' }}><strong>Número de Mesa:</strong> {review.tableNumber}</p>
                <p style={{ fontSize: '16px', fontFamily: 'Roboto' }}><strong>Correo Electrónico:</strong> {review.email}</p>
                <p style={{ fontSize: '16px', fontFamily: 'Roboto' }}><strong>Comentario:</strong> {review.comment}</p>
                <p style={{ fontSize: '16px', fontFamily: 'Roboto' }}><strong>Calificación:</strong> {'★'.repeat(review.rating)}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="has-text-centered" style={{ fontSize: '14px', fontFamily: 'Roboto', color: 'black' }}>No hay reseñas aún.</p>
        )}
      </div>
    </div>
  );
};

export default Reseñas;