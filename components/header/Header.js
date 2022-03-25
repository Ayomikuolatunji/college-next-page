import React, { useState } from "react";
import Image from "next/image";
import {Nav,Logo,Menu,Item,Link,NavIcon,Line,Overlay,OverlayMenu,MobileLink} from "./headerstyle.js"
import logo from "../../public/img/MAIN LOGO.png"

const navData=["Home", "Why us","About us","Contact us"]

const Header = () => {
  const [toggle, toggleNav] = useState(false);
  return (
    <>
      <Nav>
        <Logo>
             <Image
               src={logo}
               alt={"logo"}
               width={40}
               height={40}
             />
             <h4>College</h4>
        </Logo>
        <Menu>
          {navData?.map((item,i)=>{
              return  <Item>
                <Link target="#" href="#" key={i}>
                    {item}
                </Link>
            </Item>
          })}
        </Menu>
        <NavIcon onClick={() => toggleNav(!toggle)}>
          <Line open={toggle} />
          <Line open={toggle} />
          <Line open={toggle} />
        </NavIcon>
      </Nav>
      <Overlay open={toggle}>
        <OverlayMenu open={toggle}>
          {navData?.map((item,i)=>{
            return  <Item key={i}>
            <MobileLink target="#" href="https://www.instagram.com/igor_dumencic/">
             {item}
            </MobileLink>
          </Item>
          })}
        </OverlayMenu>
      </Overlay>
    </>
  );
};

export default Header;
