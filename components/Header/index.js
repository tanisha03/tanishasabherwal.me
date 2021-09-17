import Link from "next/link";
import React,{useState} from "react";
import styled from 'styled-components';
import {tokens} from "../../config/themes";
import Links from './Links';
import {Icons} from "../../assets/Icon";


const NavHeader = styled.header`
  display: flex;
  flex-wrap:wrap;
  justify-content: space-between;
  align-items:center;
  padding:${tokens.space[8]} 0;
  font-family: ${tokens.font.primary};
  width:100%;
  position:relative;

  svg {
    transition:transform 0.2s ease;
    &:hover{
      transform: scale(1.2);
    }
  }

  @media only screen and (max-width: 576px) {
    padding:${tokens.space[2]} 0;
  }
`;

const Hamburger =  styled.button`
  display:none;
  background:transparent;
  border:0;
  @media only screen and (max-width: 576px) {
    display:block;
  }
`;


const Header = () => {
  const [isToggledOn, setToggle] = useState(false);

  return(
  <NavHeader>
      <Link href="/" aria-label="Tanisha Sabherwal Logo">
        <svg width="40" height="40" viewBox="0 0 281 219" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M78.5 211.5V40H18.5L7 5H254L243 40C220.333 36.1667 174.5 32.5 174.5 55.5C174.5 78.5 201.5 88.5 201.5 88.5C201.5 88.5 276 111.5 276 155.479C276 205.639 230.5 218.5 179.5 211.5" stroke="black" strokeWidth="10"/>
        </svg>
      </Link>
      <Hamburger onClick={()=>setToggle(prevState => !prevState)} aria-label={isToggledOn ? "Close" : "Menu"} aria-expanded={isToggledOn ? true : false} aria-haspopup={true}>
        {isToggledOn ? Icons['close'] : Icons['hamburger']}
      </Hamburger>
      <Links showNav={isToggledOn}/>
  </NavHeader>
)}

export default Header;