import { Box, Grid } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import styled from "styled-components";
import tutor from "../../public/img/unsplash_-2vD8lIhdnw.png"


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

`
export default function Tutor() {
  return (
    <TutorStyle>
         <Box>
             <Grid container xs={6} style={{margin:"auto"}}>
                 <Main>
                     <div className='max-w-full w-7/12 mx-auto'>
                         <Image
                           src={tutor}
                           alt={"tutor png"}
                         />
                     </div>
                     <div className="content mt-3 ">
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
