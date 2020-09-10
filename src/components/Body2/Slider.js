import React, { Component } from "react";
import Slick from "react-slick";
import styles from './Body2.module.css';
import './slick.css';


class Slider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows:false
    };
    return (
      <div>
        <Slick  {...settings}>
          <div>
                <div></div>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slick>
      </div>
    );
  }
}


export default Slider;