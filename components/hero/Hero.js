import React from 'react';
import styled from "styled-components";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Slider from './Sliders';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const  HeroMain=styled.div`
    width: 80%;
    margin: auto;
    margin-top: 60px;
    height: auto;
    @media (max-width:500px){
        width: 90%;
    }
`
const SideBar=styled.div`
    width: 100%;
`
const RightBar=styled.div`
    @media (max-width:500px){
        width: 100%;

    }
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
                       cfewdfw
                    </RightBar>
                </Grid>
            </Grid>
        </Box>
       </HeroMain>
  )
}
