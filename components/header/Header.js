import React, { useState } from "react";
import Image from "next/image";
import {Nav,Logo,Menu,Item,Link,NavIcon,Line,Overlay,OverlayMenu} from "./headerstyle.js"
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
          {navData?.map(item=>{
              return  <Item>
              <Link target="#" href="#">
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
        <Item>
            <Link target="#" href="https://www.instagram.com/igor_dumencic/">
              Home
            </Link>
          </Item>
          <Item>
            <Link target="#" href="https://www.behance.net/igordumencic">
                why us?
            </Link>
          </Item>
          <Item>
            <Link target="#" href="https://github.com/Igor178">
              About us
            </Link>
          </Item>
          <Item>
            <Link target="#" href="https://github.com/Igor178">
              Contact us
            </Link>
          </Item>
        </OverlayMenu>
      </Overlay>
    </>
  );
};

export default Header;
