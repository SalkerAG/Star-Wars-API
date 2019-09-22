import React from "react";
import Slider from "react-slick";
import ListadoPersonajes from "./ListadoPersonajes";

const Carrusel = ({ personajes }) => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    accessibility: false,
    arrows: false,
    autoplaySpeed: 3000,
    autoplay: true
  };
  return (
    <Slider {...settings}>
      {personajes.map((personaje, index) => (
        <ListadoPersonajes key={index} personaje={personaje} />
      ))}
    </Slider>
  );
};

export default Carrusel;
