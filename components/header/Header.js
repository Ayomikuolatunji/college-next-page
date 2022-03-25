import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import logo from "../../public/img/MAIN LOGO.png"


const HeaderStyle=styled.header`
    padding: 2em 1em;
    background-color: #fff;
    display:flex;
    justify-content:space-between;
    width: 80%;
    margin: auto;
    .college-logo{
        display: flex;
        align-items: center;
        Img{
            width: 44px;
            height: 44px;
        }
    }
    .college-logo Img{
            width: 44px;
            height: 44px;
    }
   
`
const Navbar=styled.header`
    display:flex;
    justify-content:space-between;
`
const Item=styled.li`
     list-style:none;
     margin-left:20px;
     color: #1F1534;
`
const items=['Home',"Who Are We", "About us", "Contact Us"]

 
export default function Header() {
  return (
     <HeaderStyle>
          <div className="college-logo">
               <Image
                  src={logo}
                  alt={"college-logo"}
               />
               <p>College</p>
          </div>
           <Navbar>
                {items.map(item=>{
                    return  <Item>{item}</Item>
                })}
           </Navbar>
     </HeaderStyle>
  )
}
