import { Box, Grid } from '@mui/material';
import Image from 'next/image';
import React from 'react'
import {BsPlayCircle,BsArrowRight} from "react-icons/bs"
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

   @media (max-width:640px){
     width: 80%;
     margin-top: 160px;
   }
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
      height: auto;
      background: #FFFFFF;
      /* drop shadow */
      box-shadow: 10px 40px 50px rgba(229, 233, 246, 0.4);
      border-radius: 20px; 
        @media (max-width:640px){
          margin-top: 30px;
        }
      h1{
        font-family: 'Lato';
        font-style: normal;
        font-weight: 700;
        font-size: 21px;
        line-height: 32px;
        /* or 152% */
        color: #000000;
        mix-blend-mode: normal;
        padding:0 8px;
      }
      h3{
        font-family: 'Lato';
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 28px;
        padding: 0 8px;
        /* identical to box height, or 175% */
        color: #7D7987;
        mix-blend-mode: normal;
   

      }
      .btn{
        background-color: #1c87c9;
        -webkit-border-radius: 60px;
        border-radius: 60px;
        border: none;
        color: #eeeeee;
        cursor: pointer;
        display: inline-block;
        font-family: sans-serif;
        text-align: center;
        text-decoration: none;
        animation: glowing 1300ms infinite;

         @keyframes glowing {
            0% {
              background-color: #2ba805;
              box-shadow: 0 0 3px #2ba805;
            }
            50% {
              background-color: #49e819;
              box-shadow: 0 0 10px #49e819;
            }
            100% {
              background-color: #2ba805;
              box-shadow: 0 0 3px #2ba805;
            }
        }
         @keyframes glowing {
            0% {
              background-color: #2ba805;
              box-shadow: 0 0 5px #2ba805;
            }
            50% {
              background-color: #49e819;
              box-shadow: 0 0 20px #49e819;
            }
            100% {
              background-color: #2ba805;
              box-shadow: 0 0 5px #2ba805;
            }
          }
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
                          <div className="img-container relative">
                              <Image
                               src={c1}
                               alt={"img-c1"}
                              />
                              <BsPlayCircle className='absolute top-1/2 text-5xl left-1/2 -translate-x-1/2 -translate-y-1/2 btn'/>
                          </div>
                        <div className="py-8">
                          <h1>Introduction to General Chemistry CHM111</h1>
                            <h3> By Emmanuel King..</h3>
                            <div className="start px-2">
                              <Image
                                src={cs1}
                                alt="imaage-cs1"
                              />
                            </div>
                            <div className="play-course px-2 mt-4">
                                <button className='text-red-500'>Play course <BsArrowRight className="text-red-500 inline ml-3 text-2xl"/></button>
                            </div>
                        </div>
                     </Item>
                 </Grid>
                 <Grid item md={4} xs={12}>
                     <Item>
                          <div className="img-container relative">
                              <Image
                               src={c2}
                               alt={"img-c1"}
                              />
                               <BsPlayCircle className='absolute top-1/2 text-5xl left-1/2 -translate-x-1/2 -translate-y-1/2 btn'/>
                          </div>
                          <div className='py-8'>
                            <h1>Introduction to General Computer CSC211</h1>
                            <h3> By Emmanuel King..</h3>
                            <div className="start px-2">
                              <Image
                                src={cs2}
                                alt="imaage-cs1"
                              />
                            </div>
                            <div className="play-course px-2 mt-4">
                                <button className='text-red-500'>Play course <BsArrowRight className="text-red-500 inline ml-3 text-2xl"/></button>
                            </div>
                          </div>
                     </Item>
                 </Grid>
                 <Grid item md={4} xs={12}>
                     <Item>
                          <div className="img-container relative">
                              <Image
                               src={c3}
                               alt={"img-c1"}
                              />
                               <BsPlayCircle className='absolute top-1/2 text-5xl left-1/2 -translate-x-1/2 -translate-y-1/2 btn'/>
                          </div>
                         <div className='py-8'>
                          <h1>Introduction to General Physics PHY111</h1>
                            <h3> By Emmanuel King..</h3>
                            <div className="start px-2">
                              <Image
                                src={cs2}
                                alt="imaage-cs1"
                              />
                            </div>
                            <div className="play-course px-2 mt-4">
                                <button className='text-red-500'>Play course <BsArrowRight className="text-red-500 inline ml-3 text-2xl"/></button>
                            </div>
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
