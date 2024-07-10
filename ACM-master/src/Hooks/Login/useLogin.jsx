import { useState } from "react";
import { AuthLogin } from "../../API/Authentication";
import {useNavigate} from 'react-router-dom';
import axios from "axios";

export const useLogin = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await AuthLogin(username, password);
      const { access_token } = response.data;

      // Lưu token vào sessionStorage
      sessionStorage.setItem('token', access_token);

      // Thiết lập axios để sử dụng token trong các yêu cầu sau này
      axios.defaults.headers.common['Authorization'] = `Bearer ${access_token}`;

      // Chuyển hướng người dùng đến trang chính hoặc trang khác sau khi đăng nhập thành công
      navigate('/home');
    } catch (error) {
      console.error("Đăng nhập thất bại:", error);
    }
  };

  return {
    username,
    password,
    handleUsernameChange,
    handlePasswordChange,
    handleSubmit,
  };
}