import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components"
export default class Testimonial extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
    };
    return (
      <div>
        <Slider ref={c => (this.slider = c)} {...settings}>
          <div key={1}>
            <h3>1</h3>
          </div>
          <div key={2}>
            <h3>2</h3>
          </div>
        </Slider>
        <div style={{ textAlign: "center" }}>
          <button className="button" onClick={this.previous}>
            Previous
          </button>
          <button className="button" onClick={this.next}>
            Next
          </button>
        </div>
      </div>
    );
  }
}