import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import Image from 'next/image'
import React from 'react'
import styled from "styled-components"
import google from "../../public/img/google.png"
import download from "../../public/img/download.png"

const DownloadStyle=styled.div`
     width: 65%;
     max-width: 100%;
     margin: auto;

     @media (max-width:640px){
         width: 90%;
     }
`
const Item=styled.div`
     width: 420px;
     height: 304px;
     margin-top: 120px;
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
        margin-top: 10px;
        color: #7D7987;
        mix-blend-mode: normal;
    }
`
export default function Downlaod() {
  return (
    <DownloadStyle>
        <Box>
            <Grid columns={12} spacing={1} container>
                <Grid h1 md={6} xs={12}>
                      <Item>
                           <h1>Download our mobile apps</h1>
                           <p>
                           with College app you have the ability to download 
                            courses on the go with full access to watch all downloaded videos at your own pace and time
                           </p>
                           <button className='mt-5'>
                               <Image
                                  src={google}
                                  alt={"googel playstore"}
                               />
                           </button>
                      </Item>  
                </Grid>
                <Grid h1 md={6} xs={12}>
                     <div>
                        <Image
                        src={download}
                        alt={"download image"}
                        />
                     </div>
                </Grid>
            </Grid>
        </Box>
    </DownloadStyle>
  )
}
