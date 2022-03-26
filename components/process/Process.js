import React from 'react';
import styled from "styled-components";
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import Image from 'next/image';
import pa from "../../public/img/p1.png";
import pb from "../../public/img/p2.png";
import pc from "../../public/img/p3.png";


const ServicePage=styled.div`
    width: 80%;
    margin: auto;
    margin-top: 90px;
    height: auto;
    position: relative;
    @media (max-width:500px){
        width: 90%;
        margin-top: 60px;
    }
`

const Header=styled.div`
  width: 50%;
  margin: auto;
  text-align: center;
  @media (max-width:500px){
      width: 100%;
  }
  /* innner elements */
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
const ContentGrid=styled.div`
      margin-top: 50px;
      width: 70%;
      margin-left: auto;
      margin-right: auto;
      position: relative;
      @media (max-width:640px){
          width: 70%;
      }
`
const Item=styled.div`
    width: 350px;
    height: 354px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;

    @media (max-width:640px){
        margin-top: 10px;
    }
    h2{
        font-family: 'Lato';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 56px;
        color: #1F1534;
        mix-blend-mode: normal;
     }
     h1{
        font-family: 'Lato';
        font-style: normal;
        font-weight: 400;
        font-size: 36px;
        line-height: 43px;
        color: rgba(251, 56, 70, 0.5);
     }
    p{
        font-family: 'Lato';
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 28px;
        color: #7D7987;
        mix-blend-mode: normal;
    }
`
export default function Process() {
  return (
    <ServicePage>
         <Header>
               <h1>Let’s see how it works</h1>
         </Header>
         <ContentGrid>
              <Box>
                 <Grid container spacing={4}>
                    <Grid h1 xs={12} md={4}>
                        <Item>
                           <Image
                              src={pa}
                              alt="img"
                              width={95}
                              height={95}
                           />
                            <h2>Create Account </h2>
                            <h1>1</h1>
                            <p>
                            Set up your account with a few quick and easy steps for access to the services
                            </p>
                        </Item>
                    </Grid>
                    <Grid h1 xs={12} md={4}>
                      <Item>
                        <Image
                              src={pb}
                              alt={"img"}
                              width={95}
                              height={95}
                           />
                           <h2>Select Course </h2>
                           <h1>2</h1>
                           <p>
                           A list of courses would be displayed based on your institution and level selected
                           </p>
                        </Item>
                    </Grid>
                    <Grid h1 xs={12} md={4}>
                    <Item>
                        <Image
                              src={pc}
                              alt={"img"}
                              width={95}
                              height={95}
                           />
                           <h2>Subscribe</h2>
                           <h1>3</h1>
                           <p>
                           Click the subscribe button and pay the charge for the selected course amd enjoy
                           </p>
                        </Item>
                    </Grid>
                 </Grid>
              </Box>
         </ContentGrid>
    </ServicePage>
  )
}
