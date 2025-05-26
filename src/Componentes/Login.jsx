import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Formulario.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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

  return (
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
        <input
          type="password"
          className="formulario-login-input"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="formulario-login-boton">Ingresar</button>
      </form>
    </div>
  );
};

export default Login;



