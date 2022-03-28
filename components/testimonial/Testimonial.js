import { Box, Grid } from "@mui/material";
import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components"


const TesTimonialstyle=styled.div`
    width: 70%;
    height: auto;
    margin:30px  auto;
    background: linear-gradient(208.18deg, #FB3846 9.05%, #B84A51 76.74%);
    border-radius: 24px;

    @media (max-width:640px){
        width: 94%;
        margin-top: 100px;
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

        @media (max-width:640px){
            font-size: 28px;
        }
    }

    @media (max-width:640px){
      padding-left:3px;
      padding-right: 3px;
    }
`
const Left=styled.div`
   display: flex;
   align-items: center;

   h1{
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 48px;
    /* identical to box height, or 218% */
    color: #FFFFFF;
    mix-blend-mode: normal;
    }
    h3{
        font-family: 'Lato';
        font-style: normal;
        font-weight: 400;
        font-size: 25px;
        line-height: 48px;
        /* identical to box height, or 267% */
        color: rgba(255, 255, 255, 0.85);
        mix-blend-mode: normal;
    }
`

const Right=styled.div`
   h1{
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 19px;
    line-height: 30px;
    /* or 158% */
    color: rgba(255, 255, 255, 0.9);
    mix-blend-mode: normal;
   }
`

const SliderStyle=styled.div`
  width: 80%;
  padding: 30px 0 60px 0;
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
      fade:true
    };
    return (
      <TesTimonialstyle>
          <Title>
                <h1>See what people are saying about College</h1>
          </Title>
          <SliderStyle>
                <Slider ref={c => (this.slider = c)} {...settings}>
                {data?.map((each,i)=>{
                    return <Box key={i}>
                        <Grid container columns={12}>
                                <Grid md={6} xs={12}>
                                    <Left>
                                            <div className="img">
                                                <img
                                                src={each.img}
                                                alt="testimonial img"
                                                 className="rounded-full border-4 border-white"
                                                />
                                            </div>
                                            <div className="title ml-4">
                                                <h1>{each.name}</h1>
                                                <h3>{each.school}</h3>
                                            </div>
                                    </Left>
                                </Grid>
                                <Grid md={6} xs={12}>
                                    <Right>
                                        <h1>
                                            {each.testimony}
                                        </h1>
                                    </Right>
                                </Grid>
                        </Grid>
                    </Box>
                })}
                </Slider>
          </SliderStyle>
      </TesTimonialstyle>
    );
  }
}