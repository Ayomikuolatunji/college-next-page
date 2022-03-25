import React from 'react'
import Header from '../components/header/Header'
import Hero from '../components/hero/Hero'
import styled from "styled-components"
import Wave from '../components/hero/Wave'

const BgImg=styled.div`
   background-image:url("../public/img/wave.svg");
   width: 100%;
   height: auto;

`

export default function Default({children}) {
  return (
    <div>
        <BgImg>
          <Header/>
          <Hero/>
          <Wave/>
        </BgImg>
        <main>
           {children}
        </main>
    </div>
  )
}
