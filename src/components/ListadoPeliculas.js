import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function ListadoPeliculas({ pelicula }) {
  var idAPI = pelicula.url.substr(31, 1);
  if (pelicula === {}) return null;

  return (
    <Fragment>
      <div className="container-fluid">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">{pelicula.title}</h4>
            <div className="card-text">
              <p>Episodio: {pelicula.episode_id}.</p>
              <p>Director: {pelicula.director}</p>
              <Link
                to={{
                  pathname: `/pelicula/${idAPI}`,
                  state: { pelicula: { pelicula } }
                }}
                className="btn btn-primary"
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
export default ListadoPeliculas;
