import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Formulario.css';
import axios from 'axios';

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

  const iniciarSesion = async () => {
  try {
    const response = await axios.post('http://localhost:8000/api/iniciarSesion', {
  "correoElectronico": email,
  "contrasena": password
});
  console.log('Usuario inició sesión', response.data);
  } catch (error) {
    console.error('Error al registrar usuario:', error.response?.data || error.message);
  }
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
          <button onClick={iniciarSesion} type="submit" className="formulario-login-boton">Ingresar</button>
        </form>
      </div>
    </>
  );
};

export default Login;




