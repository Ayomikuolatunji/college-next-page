import { Box, Grid } from '@mui/material';
import Image from 'next/image';
import React from 'react'
import styled from "styled-components";
import c1 from "../../public/img/c1.png"
import c2 from "../../public/img/c2.png"
import c3 from "../../public/img/c3.png"
import cBg from "../../public/img/cBg.png"
import cs1 from "../../public/img/cs1.png"
import cs2 from "../../public/img/cs2.png"


const CoursesStyle=styled.div`
   width: 70%;
   margin: 30px auto 40px auto;
   position: relative;
`
const Title=styled.div`
     margin: 30px;
     text-align: center;
     h1{
        font-family: 'Lato';
        font-style: normal;
        font-weight: 700;
        font-size: 36px;
        line-height: 56px;
        /* identical to box height, or 156% */
        color: #1F1534;
        position: relative;
        mix-blend-mode: normal;
      
        :after{
            content:"";
            position: absolute;
            margin:120px auto 0 auto;
            bottom: 0;
            right: 0;
            left: 0;
            width: 56px;
            height: 2px;
            background: #1F1534;
            border-radius: 5px;
        }
    }
`
const Item=styled.div`
      width: 350px;
      height: 412px;
      background: #FFFFFF;
      /* drop shadow */
      box-shadow: 10px 40px 50px rgba(229, 233, 246, 0.4);
      border-radius: 20px; 

      h1{
        font-family: 'Lato';
        font-style: normal;
        font-weight: 700;
        font-size: 21px;
        line-height: 32px;
        /* or 152% */
        color: #000000;
        mix-blend-mode: normal;
      }
      h3{
        font-family: 'Lato';
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 28px;
        /* identical to box height, or 175% */
        color: #7D7987;
        mix-blend-mode: normal;
        margin: 8px 0;

      }
`
export default function Course() {
  return (
    <CoursesStyle>
       <Title className="title">
            <h1>Explore Courses</h1>
        </Title>
        <Box style={{marginTop:"20px"}}>
            <Grid container div columns={12}>
                 <Grid item md={4} xs={12}>
                     <Item>
                          <div className="img-container">
                              <Image
                               src={c1}
                               alt={"img-c1"}
                              />
                          </div>
                          <h1>Introduction to General Physics PHY111</h1>
                          <h3> By Emmanuel King..</h3>
                          <div className="start">
                             <Image
                               src={cs1}
                               alt="imaage-cs1"
                             />
                          </div>


                          <div className="play-course">
                              <button>Play course</button>
                          </div>
                     </Item>
                 </Grid>
                 <Grid item md={4} xs={12}>
                     <Item>
                          <div className="img-container">
                              <Image
                               src={c2}
                               alt={"img-c1"}
                              />
                          </div>
                          <h1>Introduction to General Physics PHY111</h1>
                          <h3> By Emmanuel King..</h3>
                          <div className="start">
                             <Image
                               src={cs2}
                               alt="imaage-cs1"
                             />
                          </div>
                     </Item>
                 </Grid>
                 <Grid item md={4} xs={12}>
                     <Item>
                          <div className="img-container">
                              <Image
                               src={c3}
                               alt={"img-c1"}
                              />
                          </div>
                          <h1>Introduction to General Physics PHY111</h1>
                          <h3> By Emmanuel King..</h3>
                          <div className="start">
                             <Image
                               src={cs2}
                               alt="imaage-cs1"
                             />
                          </div>
                     </Item>
                 </Grid>
            </Grid>
        </Box>
        <div className="bg-background absolute top-0 right-0 -z-10">
          <Image
            src={cBg}
            alt="bg"
          />
        </div>
    </CoursesStyle>
  )
}
