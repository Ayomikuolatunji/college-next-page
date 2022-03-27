import { Box, Grid } from '@mui/material';
import React from 'react';
import styled from "styled-components";
import tutor from "../../public/img/unsplash_-2vD8lIhdnw.png"


const TutorStyle=styled.div`
  width: 80%;
  margin:100px auto;

`;


export default function Tutor() {
  return (
    <TutorStyle>
         <Box>
             <Grid container xs={6}>
                 <Main>

                 </Main>
             </Grid>
         </Box>
    </TutorStyle>
  )
}
