import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import logo from "../../public/img/MAIN LOGO.png"

const Nav = styled.nav`
  padding: 0 20px;
  min-height: 9vh;
  display: flex;
  width: 80%;
  margin: auto;
  justify-content: space-between;
  align-items: center;

  @media (max-width:500px){
    width: 100%;
  }
`;

const Logo = styled.div`
  font-size: 25px; 
  display: flex;
  align-items: center;
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Item = styled.li``;

const Link = styled.a`
  text-decoration: none;
  color: gray;
  padding-left: 20px;
 

  :hover {
    text-decoration: underline;
  }
`;

const NavIcon = styled.button`
  background: none;
  cursor: pointer;
  border: none;
  outline: none;

  @media (min-width: 769px) {
    display: none;
  }
`;

const Line = styled.span`
  display: block;
  border-radius: 50px;
  width: 25px;
  height: 3px;
  margin: 5px;
  background-color: black;
  transition: width 0.4s ease-in-out;

  :nth-child(2) {
    width: ${props => (props.open ? "40%" : "70%")};
  }
`;

const Overlay = styled.div`
  position: absolute;
  height: ${props => (props.open ? "50vh" : 0)};
  width: 100vw;
  background-color: black;
  transition: height 0.4s ease-in-out;

  @media (min-width: 769px) {
    display: none;
  }
`;

const OverlayMenu = styled.ul`
  list-style: none;
  position: absolute;
  left: 50%;
  top: 45%;
  transform: translate(-50%, -50%);

  li {
    opacity: ${props => (props.open ? 1 : 0)};
    font-size: 25px;
    margin: 50px 0px;
    transition: opacity 0.4s ease-in-out;
  }

  li:nth-child(2) {
    margin: 50px 0px;
  }
`;

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
