import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Formulario.css';

const Register = () => {
  const [nombre, setNombre] = useState('');
  const [celular, setCelular] = useState('');
  const [cedula, setCedula] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    if (nombre && celular && cedula && email && password) {
      console.log('Registro exitoso');
      navigate('/Login'); // Redirige al login después de registrarse
    } else {
      alert('Por favor, completa todos los campos');
    }
  };

  return (
    <div className="formulario-registro-container">
      <form onSubmit={handleRegister} className="formulario-registro-form">
        <h2 className="formulario-registro-title">Registro de Usuario</h2>
        <input
          type="text"
          className="formulario-registro-input"
          placeholder="Nombre completo"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
        <input
          type="tel"
          className="formulario-registro-input"
          placeholder="Número de celular"
          value={celular}
          onChange={(e) => setCelular(e.target.value)}
          required
        />
        <input
          type="text"
          className="formulario-registro-input"
          placeholder="Cédula"
          value={cedula}
          onChange={(e) => setCedula(e.target.value)}
          required
        />
        <input
          type="email"
          className="formulario-registro-input"
          placeholder="Correo Electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          className="formulario-registro-input"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="formulario-registro-boton">Registrarse</button>
      </form>
    </div>
  );
};

export default Register;



