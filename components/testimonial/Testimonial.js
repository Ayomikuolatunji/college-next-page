import { Box, Grid } from "@mui/material";
import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components"


const TesTimonialstyle=styled.div`
    width: 70%;
    height: 425px;
    margin:30px  auto;
    background: linear-gradient(208.18deg, #FB3846 9.05%, #B84A51 76.74%);
    border-radius: 24px;

    @media (max-width:640px){
        width: 94%;
    }

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
        margin-top: 40px;
    }
`
const Left=styled.div`
   display: flex;
`

const Right=styled.div`

`

const SliderStyle=styled.div`
  width: 80%;
  margin:30px auto;
`
const data=[
    {
        name:"Abraham Rashford",
        school:"Fupre",
        testimony:"“Wow I love this app and I Love the fact that i can watch videos at my own conviencie without breaking the bank with data.",
        img:"img/t1.png"
    },
    {
        name:"Chika Nonso",
        school:"Fupre",
        testimony:"“Wow I love this app and I Love the fact that i can watch videos at my own conviencie without breaking the bank with data.",
        img:"img/t1.png"
    },
     {
        name:"Adams Bayo",
        school:"Fupre",
        testimony:"“Wow I love this app and I Love the fact that i can watch videos at my own conviencie without breaking the bank with data.",
        img:"img/t1.png"
    }
]
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
          <SliderStyle>
                <Slider ref={c => (this.slider = c)} {...settings}>
                {data?.map(each=>{
                    return <Box>
                        <Grid container columns={12}>
                                <Grid md={12}>
                                    <Left>
                                            <div className="img">
                                                <img
                                                src={each.img}
                                                alt="testimonial img"
                                                 className="rounded-full border-4 border-white"
                                                />
                                            </div>
                                            <div className="title">
                                                
                                            </div>
                                    </Left>
                                </Grid>
                                <Grid md={12}>
                                    <Right>
                                        
                                    </Right>
                                </Grid>
                        </Grid>
                    </Box>
                })}
                </Slider>
          </SliderStyle>
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