import React from "react";
import Link from "next/link";
import styled,{css} from 'styled-components';
import {tokens} from "../../config/themes"
import {LINKS} from "./constant";

const Navigation = styled.nav`
    display:block;
    @media only screen and (max-width: 576px) {
        display:${props=> props.showNav ? 'block': 'none'};
        background:#fff;
        width:100%;
        padding:${tokens.space[6]} 0 ${tokens.space[2]};
        position:relative;
        top:-100px;
        z-index:-999;
        opacity:0;
        transition: all 0.8s ease-out;
        ${ props => props.showNav && css`
            top:0;
            z-index:0;
            opacity:1;
        `};
   }
`;

const NavList = styled.ul`
  display:flex;
  flex-direction:row;
  list-style:none;
  a{
    text-decoration:none;
    margin: 0 ${tokens.space[4]};
    color:${tokens.colors.primary[1]};
    font-size:${tokens.fontSizes[4]};
    transition:color 0.1s linear;

    &:hover{
      color:${tokens.colors.tertiary[0]};
    }

    @media only screen and (max-width: 576px) {
      font-size:${tokens.fontSizes[2]};
      margin: 0 ${tokens.space[2]};
    }
  } 

  @media only screen and (max-width: 576px) {
    flex-direction:column;
  }
`;

const Links = ({showNav}) => {
    return (
    <Navigation showNav={showNav}>
        <NavList>
          {
            LINKS.map(item=>(
              <li key={item.id}>
                <Link href={item.link}>{item.label}</Link>
              </li>
            ))
          }
        </NavList>
    </Navigation>
    )
}

export default Links;