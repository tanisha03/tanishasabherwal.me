import styled from 'styled-components';
import {tokens} from "../../config/themes"

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
padding:2% 4% 4% 4%;
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
padding:2% 0;
display:flex;
flex-wrap:wrap;
justify-content:flex-start;
color:${tokens.colors.tertiary[0]};
span{
  margin-right: ${tokens.space[2]};
  padding: 0 ${tokens.space[1]} ${tokens.space[2]} 0;
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

const GardenContainer =  styled.div`
  display:flex;
  flex-wrap:wrap;
  float:left;
`;

GardenContainer.GardenCard =  styled.div`
height:120px;
width:250px;
background-color:#FCFBFE;
display:flex;
justify-content:space-between;
flex-direction:column;
cursor:pointer;

.garden-title{
  font-weight:${tokens.fontWeights.medium};
}

margin:${tokens.space[6]} ${tokens.space[6]} 0 0;
padding:${tokens.space[4]};
border-radius: 2px;
color:${tokens.colors.primary[1]};
box-shadow: 0 0 2px rgba(33,33,33,.2);
border-bottom:0;
transition: all .4s ease-in-out;
&:hover{
    box-shadow: 0 0 6px rgba(33,33,33,.2); 
    border-bottom: 1px solid ${tokens.colors.primary[0]};
}

.footer_notes{
  font-size:${tokens.fontSizes[2]};
  font-weight:${tokens.fontWeights.medium};
  display:flex;
  justify-content:space-between;
  .level{
    color:${tokens.colors.tertiary[1]}
  }
}

@media only screen and (max-width: 576px) {
      width:100%;
      margin:${tokens.space[4]} 0;
}

`;

export {
    HeaderContainer,
    FilterSection,
    TopicsSection,
    GardenContainer
};