import React from 'react';
import './index.css'; // Asegúrate de tener este archivo para los estilos

const Register = () => {
  return (
    <div className="register-container">
      <nav>
        <div className="logo">
          <img src="../images/logo.png" alt="Logo" />
        </div>
        <ul>
          <li><a href="/">Inicio</a></li>
          <li><a href="/login">Iniciar Sesión</a></li>
        </ul>
      </nav>
      <div className="hero">
        <div className="register-box">
          <h2>Registro</h2>
          <form>
            <div className="input-group">
              <label htmlFor="username">Nombre de usuario</label>
              <input type="text" id="username" required />
            </div>
            <div className="input-group">
              <label htmlFor="email">Correo electrónico</label>
              <input type="email" id="email" required />
            </div>
            <div className="input-group">
              <label htmlFor="password">Contraseña</label>
              <input type="password" id="password" required />
            </div>
            <div className="input-group">
              <label htmlFor="confirm-password">Confirmar contraseña</label>
              <input type="password" id="confirm-password" required />
            </div>
            <button type="submit" className="register-button">Registrar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
