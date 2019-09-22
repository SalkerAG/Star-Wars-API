import React from "react";
import { Link } from "react-router-dom";

const ListadoPersonajes = ({ personaje }) => {
  var idAPI = personaje.url.substr(32, 2);
  return (
    <div className="container-fluid">
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">{personaje.name}</h4>
          <div className="card-text">
            <p>Género: {personaje.gender}</p>
            <p>Peso: {personaje.mass} kgs.</p>
            <p>Altura: {personaje.height} cms.</p>
            <p>Fecha de nacimiento: {personaje.birth_year}</p>
          </div>
          <Link
            to={{
              pathname: `/personaje/${idAPI}`,
              state: { personaje: { personaje } }
            }}
            className="btn btn-primary"
          >
            ¡Más información!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ListadoPersonajes;
