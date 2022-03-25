import React from 'react'
import Header from '../components/header/Header'
import Hero from '../components/hero/Hero'
import styled from "styled-components"

const BgImg=styled.div`
   background: red;
   width: 100%;
   height: auto;

`

export default function Default({children}) {
  return (
    <div>
        <BgImg>
          <Header/>
          <Hero/>
        </BgImg>
        <main>
           {children}
        </main>
    </div>
  )
}
