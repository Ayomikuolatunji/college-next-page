import React from 'react';
import styled from "styled-components";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


const  HeroMain=styled.div`
    width: 80%;
    margin: auto;
    background-color: green;
    margin-top: 60px;
    height: auto;
`
const SideBar=styled.div`
   
`
const RightBar=styled.div`
    width: 90%;
    margin: auto;
`
export default function Hero() {
    const sliders=[
        {
          topic:"The Best of College Education at your finger tips",
          text:"Get the best of academic experience all at your finger tips from recieving of lecture to getting of solutions at complex questions.",
          btn:"play store"
        },
        {
          topic:"The Best of College Education at your finger tips",
          text:"Get the best of academic experience all at your finger tips from recieving of lecture to getting of solutions at complex questions.",
           btn:"play store"
        }
    ]

  return (
       <HeroMain>
        <Box>
            <Grid container spacing={2} columns={12}>
                <Grid item xs={12} md={6}>
                     <SideBar>
                          <div>
                            <h1>
                            </h1>
                            <p>
                                </p>
                                <button>Play store</button>
                            </div>
                            <div>
                            <h1>The Best of College
                             Education at your finger tips
                            </h1>
                            <p>Get the best of academic experience all at your finger tips from recieving of lecture to getting of solutions at complex
                            questions.
                            </p>
                            <button>Apple store</button>
                            </div>
                     </SideBar>
                </Grid>
                <Grid item xs={12} md={6}>
                    <RightBar>

                    </RightBar>
                </Grid>
            </Grid>
        </Box>
       </HeroMain>
  )
}
