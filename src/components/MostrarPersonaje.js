import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

const MostrarPersonaje = ({ props }) => {
  var personaje = props.location.state.personaje.personaje;
  const [photos] = useState([]);
  var key = "13707655-063ce9aae3e69fb14064ef33f";

  const consultarAPIPeliculas = async () => {
    personaje.films.forEach(async element => {
      let url = `${element}`;
      const resultado = await Axios(url);
      var elemento = document.createElement("li");
      elemento.innerHTML = resultado.data.title;
      document.getElementById("peliculas").appendChild(elemento);
    });
  };

  const consultarAPIEspecies = async () => {
    let url = `${personaje.homeworld}`;
    const resultado = await Axios(url);
    var elemento = document.createElement("li");

    elemento.innerHTML = resultado.data.name;
    document.getElementById("planeta").appendChild(elemento);
  };

  const consultarAPIPlaneta = async () => {
    personaje.species.forEach(async element => {
      let url = `${element}`;
      const resultado = await Axios(url);

      var elemento = document.createElement("li");
      elemento.innerHTML = resultado.data.name;
      document.getElementById("especies").appendChild(elemento);
    });
  };

  const consultarAPIImagen = async () => {
    var nuevoNombre = personaje.name.split(/[ ]+/).join("+");
    let url = `https://pixabay.com/api/?key=${key}&q=${nuevoNombre}&image_type=photo`;
    const resultado = await Axios(url);
    var imagenes = resultado.data.hits;

    imagenes.forEach(async imagen => {
      photos.push(imagen);
    });

    photos.forEach(async imagen => {
      var elto = document.createElement("div");
      elto.className = "card";
      elto.style = "width: 100%";
      elto.id = `imag${imagen.largeImageURL}`;
      document.getElementById("imagenes").appendChild(elto);

      var elemento =
        "<img src='" +
        imagen.largeImageURL +
        "' className='card-img-top' alt='" +
        imagen.largeImageURL +
        "' style='height: 100%; width: 100%; object-fit: contain'/>";
      console.log(elemento);
      document.getElementById(
        `imag${imagen.largeImageURL}`
      ).innerHTML = elemento;
    });
  };

  useEffect(() => {
    consultarAPIPeliculas();
    consultarAPIEspecies();
    consultarAPIPlaneta();
    consultarAPIImagen();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Fragment>
      <div className="container">
        <div className="text-center mt-3">
          <h2>INFORMACIÓN DEL PERSONAJE</h2>
        </div>
      </div>
      <div className="container-fluid mt-4">
        <div className="row">
          <div className="col-sm-8">
            <h2>{personaje.name}</h2>
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">{personaje.name}</h4>
                <div className="card-text">
                  <p>Año de nacimiento: {personaje.birth_year}.</p>
                  <p>Color de ojos: {personaje.eye_color}</p>
                  <p>Género: {personaje.gender}</p>
                  <p>Color de pelo: {personaje.hair_color}</p>
                  <p>Altura: {personaje.height} cms.</p>
                  <p>Peso: {personaje.mass} kgs.</p>
                  <p>Color de piel: {personaje.skin_color}</p>
                  <p>Planeta de origen: </p>
                  <ul id="planeta"></ul>
                  <p>Especies: </p>
                  <ul id="especies"></ul>
                </div>
              </div>
            </div>

            <Link
              to={"/"}
              onClick={() => (window.location.href = "/")}
              className="btn-crawl btn btn-primary mt-3"
            >
              Volver al buscador
            </Link>
          </div>
          <div className="col-sm-4">
            <h2>Peliculas</h2>
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Peliculas del personaje</h4>
                <div className="card-text">
                  <p>Peliculas:</p>
                  <ul id="peliculas"></ul>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Fotos del personaje</h4>
                <div className="card-text">
                  <div className="container center" id="imagenes"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

/* <Slider {...settings}>
  {imagenes.map(async (imagen, index) => (
    <ListadoImagenes key={index} imagen={imagen} />
  ))}
</Slider>; */

export default MostrarPersonaje;
