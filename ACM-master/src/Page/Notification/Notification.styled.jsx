import styled from "styled-components";

export const NotificationStyled = styled.div`
  user-select: none;
  width: 100%;
  height: 100%;
  padding-left: 2%;
  padding-right: 2%;
  overflow: scroll;
  &::-webkit-scrollbar{
      display: none;
    }
`

export const Header = styled.div`
  height: 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Create = styled.div`
  height: 8%;
  display: flex;
  align-items: center;
  justify-content: start;
  button{
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 8%;
    height: 70%;
    font-size: 1.5em;
    border: none;
    border-radius: 20px;
    &:hover {
      cursor: pointer;
    }
  }
`

export const LeftGroup = styled.div`
  height: 100%;
  width: auto;
  display: flex;
  p {
    display: flex;
    justify-content: start;
    align-items: center;
    color: white;
    font-weight: bold;
    font-size: 3em;
    margin: 0;
  }
  select {
    height: auto;
    background-color: transparent;
    border: none;
    appearance: none;
    color: #007bff;
    font-size: 3em;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 15px;
    &:hover {
      cursor: pointer;
    }

    /* CSS cho các tùy chọn */
    option {
      font-size: 0.75em;
      color: black;
    }

    option:hover {
      background-color: lightgray;
    }

    option:checked {
      font-weight: bold;
      color: #007bff; 
    }
  }
`;

export const RightGroup = styled.div`
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  input {
    height: 50%;
    width: 100%;
    font-size: 1.75em;
    padding-left: 5%;
    border-radius: 20px;
    outline: none;
    font-weight: bold;
  }
`

export const Content = styled.div`
`
