import styled from "styled-components";

export const Nav = styled.nav`
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

export const Logo = styled.div`
  font-size: 25px; 
  display: flex;
  align-items: center;
`;

export const Menu = styled.ul`
  list-style: none;
  display: flex;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Item = styled.li``;

export const Link = styled.a`
  text-decoration: none;
  color: #1F1534;
  padding-left: 20px;
  
  :nth-child(1){
    font-weight: bolder;
  }

  :hover {
    text-decoration: underline;
  }
`;

export const NavIcon = styled.button`
  background: none;
  cursor: pointer;
  border: none;
  outline: none;

  @media (min-width: 769px) {
    display: none;
  }
`;

export const Line = styled.span`
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

export const Overlay = styled.div`
  position: absolute;
  height: ${props => (props.open ? "50vh" : 0)};
  width: 100vw;
  background-color: black;
  transition: height 0.4s ease-in-out;

  @media (min-width: 769px) {
    display: none;
  }
`;

export const OverlayMenu = styled.ul`
  list-style: none;
  position: absolute;
  left: 50%;
  top: 45%;
  transform: translate(-50%, -50%);

  li {
    opacity: ${props => (props.open ? 1 : 0)};
    font-size: 25px;
    margin: 25px 0px;
    transition: opacity 0.4s ease-in-out;
  }

`;