import React, { useState, useEffect, Fragment } from "react";
import Header from "./components/Header";

import MostrarPelicula from "./components/MostrarPelicula";
import MostrarPersonaje from "./components/MostrarPersonaje";
import Axios from "axios";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  // Cargar las peliculas de localStorage
  let peliculasIniciales = JSON.parse(localStorage.getItem("pelis"));
  if (!peliculasIniciales) {
    peliculasIniciales = [];
  }

  //Estados requeridos

  const [pelicula, setPelicula] = useState({});
  const [peliculas] = useState(peliculasIniciales);
  const [personajes, setPersonajes] = useState([]);

  const introducirPelicula = pelicula => {
    var introducir = true;
    if (Object.keys(peliculas).length === 0) {
      peliculas.push(pelicula);
      localStorage.setItem("pelis", JSON.stringify(peliculas));
    } else {
      // eslint-disable-next-line array-callback-return
      peliculas.map((element, index) => {
        if (element.title === pelicula.title) {
          introducir = false;
        }
      });
      if (introducir) {
        peliculas.push(pelicula);
        localStorage.setItem("pelis", JSON.stringify(peliculas));
      }
    }
  };

  const consultarAPIPelicula = async busqueda => {
    const { titulo } = busqueda;

    //Replazamos los espacions blancos por simbolos + para realizar la búsqueda mejor
    var nuevoTitulo = titulo.split(/[ ]+/).join("+");

    // Consultar a la API
    const url = `https://www.swapi.co/api/films/?search=${nuevoTitulo}`;
    const resultado = await Axios(url);
    if (resultado.data.count === 0) {
      alert("No se han encontrado coincidencias con la búsqueda");
      return;
    }

    // Almacenamos la pelicula en el state
    introducirPelicula(resultado.data.results[0]);
    setPelicula(resultado.data.results[0]);

    // eslint-disable-next-line array-callback-return
  };

  // Al pasar un array vacio solo se va a ejecutar la primera vez
  useEffect(() => {
    const consultarAPIPersonaje = async () => {
      const url = "https://www.swapi.co/api/people/";
      const resultado = await Axios(url);
      setPersonajes(resultado.data.results);
    };
    consultarAPIPersonaje();
  }, []);

  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            return (
              <Fragment>
                <Header
                  consultarAPIPelicula={consultarAPIPelicula}
                  peliculas={peliculas}
                  personajes={personajes}
                  pelicula={pelicula}
                />
              </Fragment>
            );
          }}
        />
        <Route
          exact
          path="/pelicula/:id"
          render={props => {
            return <MostrarPelicula pelicula={pelicula} props={props} />;
          }}
        />
        <Route
          exact
          path="/personaje/:id"
          render={props => {
            return <MostrarPersonaje props={props} />;
          }}
        ></Route>
      </Switch>
    </Router>
  );
};

export default App;
