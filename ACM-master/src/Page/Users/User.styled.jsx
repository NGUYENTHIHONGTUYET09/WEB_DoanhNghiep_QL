import styled from "styled-components";
import { Input, Button, Modal, Form, Upload, Avatar, List, Typography } from 'antd';

export const UserStyled = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export const Header = styled.div`
  height: 10%;
  display: flex;
  justify-content: start;
  align-items: center;
  font-weight: bold;
  font-size: 3em;
  margin: 0;
  color: white;
  padding-left: 2%;
`;

export const RightContainer = styled.div`
  width: 20%;
  background: rgba(0, 0, 0, 0.5);/* Changed background color to a blurred white */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;
export const LeftContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  padding: 2%;
  box-sizing: border-box;
  border-radius: 10px;
`;

export const ButtonBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px; /* Increased margin for spacing */
  height: 60px; /* Increased height */
`;

export const SearchBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  input {
    width: 100%;
    height: 50px; /* Increased height */
    padding: 0 10px;
    font-size: 1.25em;
    border-radius: 5px;
    border: 1px solid #ccc;
  }
`;
export const EmployeeDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  box-sizing: border-box;
  margin-top: 20px;
  div {
    margin-top: 10px;
    font-size: 1.1em;
  }
`;

export const EmployeeListItem = styled(List.Item)`
  background: #fff;
  border-radius: 10px;
  margin-bottom: 20px; /* Increased margin for spacing */
  padding: 20px;
  width: 100%;
  transition: transform 0.2s, box-shadow 0.2s;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Added box shadow */
  &:hover {
    transform: scale(1.02);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

export const EmployeeListContainer = styled.div`
  width: 100%;
  overflow-y: auto; 
  padding-right: 1%;
    /* Custom scrollbar styles */
    &::-webkit-scrollbar {
    width: 10px; /* Width of the scrollbar */
  }
  &::-webkit-scrollbar-thumb {
    background-color: #888; /* Color of the scrollbar thumb */
    border-radius: 5px; /* Rounded corners for the scrollbar thumb */
  }
  &::-webkit-scrollbar-track {
    background-color: #f1f1f1; /* Color of the scrollbar track */
    border-radius: 5px; /* Rounded corners for the scrollbar track */
  }
`;

export const EmployeeItem = styled.div`
  width: 100%;
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #ebebeb;
  }
`;

export const EmployeeAvatar = styled(Avatar)`
  margin-right: 16px;
`;

export const EmployeeInfo = styled.div`
  flex: 1;
`;

export const EmployeeName = styled(Typography.Text)`
  font-weight: bold;
`;

export const EmployeeDescription = styled(Typography.Text)`
  color: #666;
`;