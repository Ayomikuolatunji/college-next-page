import { Box,Grid } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import styled from "styled-components";
import learn from "../../public/img/learn.png"

const LearnStyled=styled.div`
  width: 70%;
  margin:150px auto;
    

  @media (max-width:640px){
      width: 90%;
      margin-top: 100px;
  }
`
const LeftItem=styled.div`
   margin-top: 100px;

  @media (max-width:640px){
      margin-top: 0;
  }
     h1{
        font-family: 'Lato';
        font-style: normal;
        font-weight: 700;
        font-size: 36px;
        line-height: 48px;
        /* or 133% */
        color: #000000;
        mix-blend-mode: normal;
     }
     p{
        font-family: 'Lato';
        font-style: normal;
        font-weight: 300;
        font-size: 18px;
        line-height: 30px;
        /* or 167% */
        color: #7D7987;
        mix-blend-mode: normal;
     }
`
export default function Learn() {
  return (
    <LearnStyled>
        <Box>
            <Grid container columns={12}>
               <Grid item md={6} xs={12}>
                    <LeftItem>
                        <h1>Learn at your own pace</h1>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, dicta amet? Tenetur veritatis dolores obcaecati dolorem repudiandae iure blanditiis, placeat perspiciatis asperiores cumque quos. Quasi, facere, beatae consequuntur, iste quia nisi ipsum eaque omnis atque totam eius deserunt reprehenderit enim temporibus. Ad ullam laborum quos, quam ab accusantium molestiae? Dolore?
                        </p>
                    </LeftItem>
               </Grid>
               <Grid item md={6} xs={12}>
                   <div>
                       <Image 
                        src={learn}
                        alt={"learn png"}
                       />
                   </div>
               </Grid>
            </Grid>
        </Box>
    </LearnStyled>
  )
}
