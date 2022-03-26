import React from 'react';
import styled from "styled-components";
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import Image from 'next/image';
import sa from "../../public/img/s (1).png"
import sb from "../../public/img/s(2).png"
import sc from "../../public/img/s(3).png"
import sBg from "../../public/img/sBg.png"



const ServicePage=styled.div`
   width: 80%;
    margin: auto;
    margin-top: 60px;
    height: auto;
    position: relative;
    @media (max-width:500px){
        width: 90%;
        margin-top: 20px;
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

      @media (max-width:640px){
          width: 80%;
      }
`
const Item=styled.div`
    width: 350px;
    height: 354px;
    background: #FFFFFF;
    box-shadow: 10px 40px 50px rgba(229, 233, 246, 0.4);
    border-radius: 20px;
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
export default function Services() {
  return (
    <ServicePage>
         <Header>
               <h1>Our services</h1>
               <p>
                   We provide the best and quality courses for users, we believe strongly on giving users value hence we ensure to stand by our principles and give only the best of service
                </p>
         </Header>
         <ContentGrid>
              <Box>
                 <Grid container spacing={2}>
                    <Grid h1 xs={12} md={4}>
                        <Item>
                           <Image
                              src={sa}
                              alt="img"
                              width={95}
                              height={95}
                           />
                           <h2>Quality</h2>
                           <p>
                           We ensure that all our course contents are screened to the maximum to ensure that the best and only the best quality is shown.
                           </p>
                        </Item>
                    </Grid>
                    <Grid h1 xs={12} md={4}>
                      <Item>
                        <Image
                              src={sb}
                              alt={"img"}
                              width={95}
                              height={95}
                           />
                           <h2>24/7 Support</h2>
                           <p>
                           Customer service is extremely important in bringing you top notch educational services.
                           </p>
                        </Item>
                    </Grid>
                    <Grid h1 xs={12} md={4}>
                    <Item>
                        <Image
                              src={sc}
                              alt={"img"}
                              width={95}
                              height={95}
                           />
                           <h2>Quick Response</h2>
                           <p>
                           We ensure that all our course contents are screened to the maximum to ensur that the best and only the best quality is shown.
                           </p>
                        </Item>
                    </Grid>
                 </Grid>
              </Box>
         </ContentGrid>
    </ServicePage>
  )
}
