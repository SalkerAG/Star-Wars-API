import React, { useState } from "react";
import Select from "react-select";

function Formulario({ consultarAPIPelicula }) {
  // const [busqueda, agregarBusqueda] = useState({
  //   titulo: ""
  // });
  const [opcionSeleccionada, setOpcionSelecionada] = useState({
    value: "",
    label: ""
  });
  const options = [
    { value: "A New Hope", label: "A New Hope" },
    { value: "Attack of the Clones", label: "Attack of the Clones" },
    { value: "The Phantom Menace", label: "The Phantom Menace" },
    { value: "Revenge of the Sith", label: "Revenge of the Sith" },
    { value: "Return of the Jedi", label: "Return of the Jedi" },
    { value: "The Empire Strikes Back", label: "The Empire Strikes Back" },
    { value: "The Force Awakens", label: "The Force Awakens" }
  ];

  // // Función para actualizar el state de los inputs
  // const actualizarState = e => {
  //   agregarBusqueda({
  //     [e.target.name]: e.target.value
  //   });
  // };

  // Cuando hacemos submit al form
  const enviarInformacion = e => {
    e.preventDefault();
    console.log(opcionSeleccionada);
    consultarAPIPelicula(opcionSeleccionada);
  };

  return (
    <div className="container">
      <div className="row">
        <form
          onSubmit={enviarInformacion}
          className="col card text-white bg-transparent  mb-5 pt-5 pb-2"
        >
          <fieldset>
            <legend className="text-center">
              Buscador Peliculas Star Wars
            </legend>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <Select
                    placeholder="Titulo"
                    value={opcionSeleccionada}
                    onChange={value => setOpcionSelecionada(value)}
                    className="text-dark"
                    options={options}
                  />
                  {/* <input
                    type="text"
                    className="form-control"
                    name="titulo"
                    placeholder="Titulo película"
                    onChange={actualizarState}
                    required
                  /> */}
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <button
                    type="submit"
                    className="form-control btn btn-primary float-right"
                  >
                    Buscar
                  </button>
                </div>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default Formulario;
