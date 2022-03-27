import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components"


const TesTimonialstyle=styled.div`
    width: 80%;
    height: 425px;
    margin:30px  auto;
    background: linear-gradient(208.18deg, #FB3846 9.05%, #B84A51 76.74%);
    border-radius: 24px;

`
const Title=styled.div`
    padding: 20px 0;
    text-align: center;

    h1{
        font-family: 'Lato';
        font-style: normal;
        font-weight: 700;
        font-size: 36px;
        line-height: 48px;
        /* identical to box height, or 133% */
        color: #FFFFFF;
        mix-blend-mode: normal;
    }
  
`
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
      <TesTimonialstyle>
          <Title>
                <h1>See what people are saying about College</h1>
          </Title>
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
      </TesTimonialstyle>
    );
  }
}