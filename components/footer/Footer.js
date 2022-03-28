import { Box, Grid } from '@mui/material';
import Image from 'next/image';
import React from 'react'
import styled from "styled-components";
import logo from "../../public/img/MAIN LOGO.png"

const Footerstyle=styled.div`
    position: relative;
    width: 100%;
    padding: 0 0 100px 0;
    background: rgba(251, 56, 70, 0.9);
    margin-top: 200px;
`

const FooterWrapper=styled.div`
   width: 70%;
   padding-top: 80px;
   margin: auto;
   height: auto;

   @media (max-width:640px){
       width: 90%;
   }

   .title{
    font-family: 'Lato';
    font-style: normal;
    font-weight: 500;
    font-size: 23px;
    line-height: 28px;
    /* or 156% */
    color: #FFFFFF;
    mix-blend-mode: normal;
 
    @media (max-width:640px){
        font-weight: 300;
    }
   }

   ul li{
    font-family: 'Lato';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 38px;
    /* or 211% */
    color: #FFFFFF;
    mix-blend-mode: normal;
   }
`
export default function Footer() {
  return (
    <Footerstyle>
          <FooterWrapper>
               <Box>
                   <Grid columns={12} container>
                        <Grid xs={12} md={3}>
                            <div className="img flex items-center">
                                <Image
                                   src={logo}
                                   alt={"logo"}
                                   width={70}
                                   height={70}
                                />
                                <h1 className='text-white ml-2 text-2xl'>College</h1>
                            </div>
                            <p className='title'>
                            college allows totors to build courses on their
                            preferred topics and shre their years on working experience with you
                            </p>
                        </Grid>
                        <Grid md={3} xs={6}>
                             <ul className='sm:ml-24 mt-16'>
                                 <li>About us</li>
                                 <li>Contact us</li>
                                 <li>Why us</li>
                                 <li>Get The App</li>
                             </ul>
                        </Grid>
                        <Grid md={3} xs={6}>
                             <ul className='sm:ml-24 mt-16'>
                                 <li>Investor</li>
                                 <li>Terms and condition</li>
                                 <li>Instructsion</li>
                                 <li>How it works</li>
                             </ul>
                        </Grid>
                        <Grid md={3} xs={6}>
                        <ul className='sm:ml-24 sm:mt-16'>
                                 <li>Help center</li>
                                 <li>Contact support</li>
                             </ul>
                        </Grid>
                   </Grid>
               </Box>
          </FooterWrapper>
    </Footerstyle>
  )
}
