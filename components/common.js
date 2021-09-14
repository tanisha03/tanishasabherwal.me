import styled from 'styled-components';
import {tokens} from "../config/themes"

const HeaderContainer =  styled.div`
padding:2% 0 4%;
width:100%;
h1{
  font-weight:${tokens.fontWeights.medium};
}
p{
  width:50%;
  margin-top:${tokens.space[5]};
}
@media only screen and (max-width: 768px) {
     p{
      width:80%;
     }
  }
  @media only screen and (max-width: 576px) {
    p{
     width:100%;
    }
 }
`;

const FilterSection =  styled.div`
padding:2% 4% 0 4%;
display:flex;
justify-content:flex-end;
span{
  margin:0 ${tokens.space[2]};
  padding:${tokens.space[1]} ${tokens.space[2]};
  border-radius:5px;
  cursor:pointer;
  border:0.5px solid ${tokens.colors.tertiary[3]};
  &:hover{
    background-color:${tokens.colors.tertiary[2]};
    border:0.5px solid ${tokens.colors.tertiary[2]};
  }
  @media only screen and (max-width: 576px) {
    margin:0 ${tokens.space[1]};
    padding:${tokens.space[1]};
    text-align:center;
 }
}
`;

const TopicsSection =  styled.div`
padding:2% 4% 0 4%;
display:flex;
flex-wrap:wrap;
justify-content:flex-start;
color:${tokens.colors.tertiary[0]};
span{
  margin:0 ${tokens.space[2]};
  padding:${tokens.space[1]} ${tokens.space[2]};
  cursor:pointer;
  &:hover{
    color:${tokens.colors.primary[1]};
  }
  @media only screen and (max-width: 576px) {
    margin:0 ${tokens.space[1]};
    padding:${tokens.space[1]};
    text-align:center;
 }
}
`;

export {
    HeaderContainer,
    FilterSection,
    TopicsSection
};