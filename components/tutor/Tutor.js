import { Box, Grid } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import styled from "styled-components";
import tutor from "../../public/img/tutor.png"


const TutorStyle=styled.div`
  width: 80%;
  margin:100px auto;

`;

const Main=styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;


  div p{
    font-family: 'Lato';
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 30px;
    
    /* or 167% */
    color: #7D7987;
  }
  .content{
      margin-top: -120px;
  }
  .content button{
      border: 1px solid red;
      color: #000;
      padding: 10px 30px;
      margin-top: 30px;
      border-radius: 7px;
  }

`
export default function Tutor() {
  return (
    <TutorStyle>
         <Box>
             <Grid container xs={6} style={{margin:"auto"}}>
                 <Main>
                     <div className="titlee">
                         <h1>Become a Tutor</h1>
                     </div>
                     <div className='max-w-full mx-auto'>
                         <Image
                           src={tutor}
                           alt={"tutor png"}
                         />
                     </div>
                     <div className="content  sm:text-center">
                         <p>
                           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur fuga amet incidunt ducimus excepturi odit molestiae sed illum voluptatem provident, id laboriosam. Ab, iusto quam exercitationem magni, ea nisi molestias soluta facilis incidunt non dignissimos illo eligendi assumenda necessitatibus rem aliquam pariatur, vero dolores aut iure voluptas asperiores. Quibusdam quae exercitationem ullam maxime nesciunt ea dolorem obcaecati voluptatibus eveniet facere?
                         </p>
                         <button>Sign up</button>
                     </div>
                 </Main>
             </Grid>
         </Box>
    </TutorStyle>
  )
}
