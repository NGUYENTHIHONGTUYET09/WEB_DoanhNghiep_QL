import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { AuthRegister } from "../../services/authService"

export const useRegister = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [employeeId, setEmployeeId] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleEmployeeIdChange = (e) => {
    setEmployeeId(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await AuthRegister(username, password, employeeId)

      navigate('/');
    } catch (error) {
      console.error("Đăng ký thất bại:", error);
    }
  };

  return {
    username,
    password,
    employeeId,
    handleUsernameChange,
    handlePasswordChange,
    handleEmployeeIdChange,
    handleSubmit,
  };
};
