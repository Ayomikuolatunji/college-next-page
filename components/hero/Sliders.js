import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components"
import {FcNext,FcPrevious} from "react-icons/fc"
import {BsApple} from "react-icons/bs"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const Content=styled.div`

  h3{
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    font-size: 45px;
    line-height: 56px;
    /* or 124% */
    color: #1F1534;
    mix-blend-mode: normal;

    @media (max-width:500px){
      line-height:36px;
      font-size:35px;
    }
  }
  p{
    font-family: 'Lato';
    font-style: normal;
    font-weight: 300;
    font-size: 21px;
    line-height: 32px;
    margin-top:10px;
    margin-bottom:50px;    /* or 152% */
    color: #7D7987;
    mix-blend-mode: normal;

    @media (max-width:500px){
      line-height:25px;
      font-size:15px;
    }
  }
  .playstore{
      padding: 10px 25px;
      border-radius:10px;
      background: #FB3846;
      color:#fff;
  }
`
const PrevNext=styled.div`
    
`
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
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="sm:mt-24">
        <Slider ref={c => (this.slider = c)} {...settings}>
          <Content key={1}>
            <h3>The Best of College Education at your finger tips</h3>
              <p className="">Get the best of academic experience all at your finger tips from recieving of lecture to getting of solutions at complex questions.",
              btn:"play store"
              </p>
              <button className="playstore"><BsApple className="inline mb-1 mr-1"/>Playstore</button>
          </Content>
          <Content key={2}> 
          <h3>The Best of College Education at your finger tips</h3>
              <p>Get the best of academic experience all at your finger tips from recieving of lecture to getting of solutions at complex questions.",
              btn:"play store"
              </p>
              <button className="playstore"><BsApple className="inline mb-1 mr-1"/>Applestore</button>
          </Content>
        </Slider>
        <PrevNext  className="mt-5 flex justify-between w-12">
          <button className="button" onClick={this.previous}>
             <FcPrevious className="bg-gray-200 p-2 text-white text-4xl rounded-sm"/>
          </button>
          <button className="button" onClick={this.next}>
             <FcNext className="bg-gray-200 p-2 text-white text-4xl rounded-sm ml-3"/>
          </button>
        </PrevNext>
      </div>
    );
  }
}