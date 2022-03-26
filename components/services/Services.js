import React from 'react';
import styled from "styled-components";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';


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
export default function Services() {
  return (
    <ServicePage>
         <Header>
               <h1>Our services</h1>
               <p>
                   We provide the best and quality courses for users, we believe strongly on giving users value hence we ensure to stand by our principles and give only the best of service
                </p>
         </Header>

    </ServicePage>
  )
}
