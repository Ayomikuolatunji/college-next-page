import React from 'react';
import styled from "styled-components";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Slider from './Sliders';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import rightImg from "../../public/img/unsplash_-2vD8lIhdnw.png"
import vector from "../../public/img/Vector.png"


const  HeroMain=styled.div`
    width: 80%;
    margin: auto;
    margin-top: 60px;
    height: auto;
    position: relative;
    @media (max-width:500px){
        width: 90%;
        margin-top: 90px;
    }
`
const SideBar=styled.div`
    width: 100%;
`
const RightBar=styled.div`
        width: 100%;
        position: relative;
`
export default function Hero() {


  return (
       <HeroMain>
        <Box>
            <Grid container spacing={2} columns={12}>
                <Grid item xs={12} md={6}>
                     <SideBar>
                          <Slider/>
                     </SideBar>
                </Grid>
                <Grid item xs={12} md={6}>
                    <RightBar>
                       <div className="over-lap z-10">
                          <Image src={rightImg} alt="img-right" className='max-w-full' />
                       </div>
                       <div className="back-img absolute -z-10 top-0 right-0">
                         <Image src={vector} alt="img-right" className='max-w-full' />
                       </div>
                    </RightBar>
                </Grid>
            </Grid>
        </Box>
       </HeroMain>
  )
}
