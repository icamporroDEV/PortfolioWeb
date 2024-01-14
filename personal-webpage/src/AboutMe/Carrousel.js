import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const Carrousel = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true, // Habilita el modo centrado
    prevArrow: <CustomPrevArrow />, // Usa tu componente personalizado para la flecha anterior
    nextArrow: <CustomNextArrow />, // Usa tu componente personalizado para la flecha siguiente
  };

  const imageStyles = {
    width: '60%', 
    height:'auto',
    margin: '0 auto', 
    display: 'block', 
  };

  return (
    <Slider {...settings}>
      {images?.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`Slide ${index + 1}`} style={imageStyles} />
        </div>
      ))}
    </Slider>
  );
};

const CustomPrevArrow = (props) => (
  <div
    {...props}
    style={{ ...props.style, left: '10px', zIndex: 1 }} // Ajusta la posición según tus necesidades
  />
);

const CustomNextArrow = (props) => (
  <div
    {...props}
    style={{ ...props.style, right: '10px', zIndex: 1 }} // Ajusta la posición según tus necesidades
  />
);

export default Carrousel;



