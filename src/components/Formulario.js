import React, { useState } from "react";

function Formulario({ consultarAPIPelicula }) {
  const [busqueda, agregarBusqueda] = useState({
    titulo: ""
  });

  // Función para actualizar el state de los inputs
  const actualizarState = e => {
    agregarBusqueda({
      [e.target.name]: e.target.value
    });
  };

  // Cuando hacemos submit al form
  const enviarInformacion = e => {
    e.preventDefault();

    consultarAPIPelicula(busqueda);
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
                  <input
                    type="text"
                    className="form-control"
                    name="titulo"
                    placeholder="Titulo película"
                    onChange={actualizarState}
                    required
                  />
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
