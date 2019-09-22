import React, { Fragment } from "react";
import Formulario from "./Formulario";
import ListadoPeliculas from "./ListadoPeliculas";
import PeliculaEncontrada from "./PeliculaEncontrada";
import Carrusel from "./Carrusel";

const Header = ({ consultarAPIPelicula, peliculas, personajes, pelicula }) => {
  return (
    <Fragment>
      <Formulario consultarAPIPelicula={consultarAPIPelicula} />
      <div className="container-fluid mt-4">
        <div className="row">
          <div className="col-sm-2">
            <h3>Ultimas búsquedas realizadas</h3>
            {peliculas.map((pelicula, index) => (
              <ListadoPeliculas key={index} index={index} pelicula={pelicula} />
            ))}
          </div>
          <div className="col-sm-8">
            <PeliculaEncontrada pelicula={pelicula} />
          </div>
          <div className="col-sm-2">
            <h3>Carrusel de personajes</h3>
            <Carrusel personajes={personajes} />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
