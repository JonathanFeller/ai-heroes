import React from "react";
import Slider from "react-slick";
import "../App.css";

const Example = () => {
  var settings = {
    dots: true,
    slidesToShow: 3
  };

  return (
    <div style={{ padding: '80px' }}>
      <Slider {...settings}>
        <div>
          <img src="http://placekitten.com/g/400/200" />
        </div>
        <div>
          <img src="http://placekitten.com/g/400/200" />
        </div>
        <div>
          <img src="http://placekitten.com/g/400/200" />
        </div>
        <div>
          <img src="http://placekitten.com/g/400/200" />
        </div>
      </Slider>
    </div>
  );
}

export default Example;