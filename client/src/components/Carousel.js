import React from "react";
import { Carousel, Image } from "react-bootstrap";

const CarouselX = () => {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <Image src="../assets/images/harrypotter.jpg" thumbnail/>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselX;
