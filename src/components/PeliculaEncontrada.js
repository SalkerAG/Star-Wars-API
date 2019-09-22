import React, { Fragment } from "react";
import { Link } from "react-router-dom";
function PeliculaEncontrada({ pelicula }) {
  if (Object.keys(pelicula).length === 0) return null;
  var idAPI = pelicula.url.substr(31, 1);
  return (
    <Fragment>
      <h2>
        <p className="text-center">
          ¡Se ha encontrado una película correspondiente al criterio de
          búsqueda!
        </p>
      </h2>
      <div className="container-fluid">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">{pelicula.title}</h4>
            <div className="card-text">
              <p>Episodio: {pelicula.episode_id}.</p>
              <p>Director: {pelicula.director}</p>
              <p>Producida: {pelicula.producer}</p>
              <p>Lanzamiento: {pelicula.release_date}</p>
              <Link
                to={`/pelicula/${idAPI}`}
                className="btn btn-primary"
                params={{ id: idAPI }}
              >
                ¡Más información!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
export default PeliculaEncontrada;
