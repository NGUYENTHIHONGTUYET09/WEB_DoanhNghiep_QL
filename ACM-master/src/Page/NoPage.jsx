import styled from "styled-components";
import defaultBackGround from '../assets/photo/defaultBackGround.jpg';
const NoPage = () => {
    return ( 
    <NoPageStyled>
        Page not found !!
    </NoPageStyled>);
}

const NoPageStyled = styled.div`
   user-select: none;
   width : 100%;
   height: 100%;
   background-image: url(${defaultBackGround});
   display: flex;
   justify-content: center;
   align-items: center;
   font-size: 5em;
   font-weight: bold;
   color: white;
` 
 
export default NoPage;