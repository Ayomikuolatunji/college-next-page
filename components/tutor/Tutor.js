import { Box, Grid } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import styled from "styled-components";
import tutor from "../../public/img/tutor.png"


const TutorStyle=styled.div`
  width: 80%;
  margin:100px auto;

  @media (max-width:640px){
      width: 90%;
  }

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
  .title {
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
        margin-bottom: 20px;

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
  }
  .content{
      margin-top: -120px;

      @media (max-width:640px){
          margin-top: 0;
      }
  }
  .content button{
    border: 1.4px solid rgba(251, 56, 70, 0.6);
    box-sizing: border-box;
    border-radius: 55px;
    margin-top: 30px;
    color: rgba(251, 56, 70, 0.6);
    border-radius: 7px;
    padding: 15px 30px;
    :hover{
        background-color: #FB3846;
        transition: all 0.5 ease;
        color:#FFF;
    }
  }

`
export default function Tutor() {
  return (
    <TutorStyle>
         <Box>
             <Grid container xs={12} md={6} style={{margin:"auto"}}>
                 <Main>
                     <div className="title">
                         <h1>Become a Tutor</h1>
                     </div>
                     <div className='max-w-full mx-auto'>
                         <Image
                           src={tutor}
                           alt={"tutor png"}
                         />
                     </div>
                     <div className="content  sm:text-center text-justify">
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
