import React from "react";
import { Glide } from "react-glide"
import CardInfo from "./Card"

const Carousel = () => {
  return (
    <div>
      <Glide>
        <CardInfo />
      </Glide>
    </div>
  );
};

export default Carousel;
