import React from "react";
import styled from "styled-components";

export const Error = ({ error }) => {
  return (
    <ErrorStyled>
      {error}
    </ErrorStyled>
  )
}


const ErrorStyled = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3em;
  color: white; 
`