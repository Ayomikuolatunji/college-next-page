import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import logo from "../../public/img/MAIN LOGO.png"


const HeaderStyle=styled.header`
    padding: 2em 1em;
    background-color: #fff;
    display:flex;
    justify-content:space-between
`
const Navbar=styled.header`
    display:flex;
    justify-betwween:space-between

    li{
        list-style:none;
    }
`
export default function Header() {
  return (
     <HeaderStyle>
          <div className="college-logo">
               <Image
                  src={logo}
                  alt={"college-logo"}
                  height={70}
                  width={70}
               />
          </div>
           <Navbar>
            <li>Home</li>
            <li>Who Are wwe</li>
            <li>About Us</li>
            <li>Contact US</li>
           </Navbar>
     </HeaderStyle>
  )
}
