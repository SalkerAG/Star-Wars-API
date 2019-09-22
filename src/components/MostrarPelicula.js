import React, { useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

const MostrarPelicula = ({ pelicula, props }) => {
  if (Object.keys(pelicula).length === 0)
    pelicula = props.location.state.pelicula.pelicula;

  //Estado para los personajes de la película
  const [personajes] = useState([]);

  //Metodo para obtener los datos de la API de personajes
  const consultarAPIPersonajes = async () => {
    pelicula.characters.forEach(async element => {
      let url = `${element}`;
      const resultado = await Axios(url);
      var elemento = document.createElement("li");

      elemento.innerHTML = resultado.data.name;
      document.getElementById("navp").appendChild(elemento);
      personajes.push(resultado.data.name);
    });
  };

  useEffect(() => {
    consultarAPIPersonajes();
  });

  return (
    <Fragment>
      <div className="container">
        <div className="text-center mt-3">
          <h2>INFORMACIÓN DE LA PELÍCULA</h2>
        </div>
      </div>
      <div className="container-fluid mt-4">
        <div className="row">
          <div className="col-sm-8">
            <div className="container">
              <section className="body-crawl star-wars mt-5">
                <div className="crawl">
                  <div className="title">
                    <p>Episode {pelicula.episode_id}</p>
                    <h1>{pelicula.title}</h1>
                  </div>
                  <p>{pelicula.opening_crawl}</p>
                </div>
              </section>
            </div>
            <div className="btn-crawl mt-5 ml-5">
              <Link
                to={"/"}
                onClick={() => (window.location.href = "/")}
                className="btn-crawl btn btn-primary"
              >
                Volver al buscador
              </Link>
            </div>
          </div>
          <div className="col-sm-4">
            <h2>{pelicula.title}</h2>
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">{pelicula.title}</h4>
                <div className="card-text">
                  <p>Episodio: {pelicula.episode_id}.</p>
                  <p>Director: {pelicula.director}</p>
                  <p>Producida: {pelicula.producer}</p>
                  <p>Lanzamiento: {pelicula.release_date}</p>
                  <p>Personajes:</p>
                  <ul id="navp"></ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default MostrarPelicula;
