import React, { Component } from "react";
import Slider from "react-slick";

export default class PreviousNextMethods extends Component {
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
      dots: false,
      accessibility:false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <Slider ref={c => (this.slider = c)} {...settings}>
          <div key={1}>
            <h3 className="text font-mono text-3xl tracking-wide font-extrabold">The Best of College Education at your finger tips</h3>
              <p className="">Get the best of academic experience all at your finger tips from recieving of lecture to getting of solutions at complex questions.",
              btn:"play store"
              </p>
          </div>
          <div key={2}> 
          <h3>The Best of College Education at your finger tips</h3>
              <p>Get the best of academic experience all at your finger tips from recieving of lecture to getting of solutions at complex questions.",
              btn:"play store"
              </p>
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