import styled from "styled-components";

export const Container = styled.div`
  user-select: none;
  height: 100%;
  width: 100%;
  position: relative;
  padding-left: 2%;
  padding-right: 2%;
`;

export const Header = styled.div`
  height: 10%;
  display: flex;
  justify-content: start;
  align-items: center;
  color: white;
  font-weight: bold;
  font-size: 3em;
  margin: 0;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10%;
`;

export const HeaderButton = styled.button`
  padding: 10px 20px;
  font-size: 1em;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  
  &:hover {
    background-color: #0056b3;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  height: 80%;
  flex-direction: column;
  padding: 1%;
  gap: 1%;
`;

export const Label = styled.label`
  height: 10%;
  font-size: 1.75em;
  display: flex; 
  align-items: center;
  color: white;
`;

export const Input = styled.input`
  height: 10%;
  margin: 10px 0;
  font-size: 1.75em;
  border-radius: 10px;
  padding-left: 1%;
`;

export const TextArea = styled.textarea`
  height: 30%;
  margin: 10px 0;
  font-size: 1.75em;
  border-radius: 10px;
  padding-left: 1%;
  padding-top: 1%;
`

export const Select = styled.select`
  padding: 10px;
  margin: 10px 0;
  font-size: 1.75em;
  border-radius: 10px;
`;

export const Button = styled.button`
  padding: 10px;
  font-size: 1.75em;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 2%;
  &:hover {
    background-color: #0056b3;
  }
`;


export const ModalContainer = styled.div`
  position: fixed;
  width: 80%;
  height: 80%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  z-index: 1001;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  overflow-y: auto; /* Allow scrolling if content is too tall */
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  .title{
    font-size: 2em;
    color: black;
    font-weight: 500;
  }
`;

export const CloseButton = styled.button`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  background: none;
  border: none;
  font-size: 1.5em;
  cursor: pointer;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  
  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #f2f2f2;
    color: #333;
  }

  tr:nth-child(even) {
    background-color: #f9f9f9;
  }

  tr:hover {
    background-color: #f1f1f1;
  }

  th, td {
    padding: 12px 15px;
  }
`;

export const BlurBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  z-index: 1000;
`;

export const StatusCell = styled.td`
  color: ${({ status }) => (status === 'Pending' ? 'red' : status === 'Approved' ? 'green' : 'inherit')};
`;