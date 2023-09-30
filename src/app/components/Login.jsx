import React from "react";

function Login() {
  return (
    <div
      style={{
        margin: 20,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h2>Iniciar Sesión</h2>
      <form>
        <label htmlFor="username">Usuario:</label>
        <input type="text" id="username" name="username" />
        <br />
        <label htmlFor="password">Contraseña:</label>
        <input type="password" id="password" name="password" />
        <br />
        <br />
        <button style={{ marginLeft: 78 }} type="button">
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
}

export default Login;
