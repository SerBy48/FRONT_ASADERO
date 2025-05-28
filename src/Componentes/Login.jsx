import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Formulario.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mostrarContrasena, setMostrarContrasena] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Aquí podrías conectar con tu backend para validar credenciales
    if (email && password) {
      console.log('Inicio de sesión exitoso');
      navigate('/'); // Redirige al inicio
    } else {
      alert('Por favor, completa todos los campos');
    }
  };

  const toggleContrasena = () => {
    setMostrarContrasena(!mostrarContrasena);
  };

  return (
    <>
      {/* Eslogan debajo de la navbar */}
      <div className="formulario-login-eslogan-navbar">
        ¡Gana puntos cada vez que inicies sesión!
      </div>

      <div className="formulario-login-container">
        <form onSubmit={handleLogin} className="formulario-login-form">
          <h2 className="formulario-login-title">Iniciar Sesión</h2>

          <input
            type="email"
            className="formulario-login-input"
            placeholder="Correo Electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <div className="formulario-login-password-container">
            <input
              type={mostrarContrasena ? 'text' : 'password'}
              className="formulario-login-input"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className="formulario-login-toggle-btn"
              onClick={toggleContrasena}
            >
              {mostrarContrasena ? 'Ocultar' : 'Mostrar'}
            </button>
          </div>

          <button type="submit" className="formulario-login-boton">Ingresar</button>
        </form>
      </div>
    </>
  );
};

export default Login;




