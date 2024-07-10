import axiosInstance from "../API/axiosInstance"

export const login = async (username, password) => {
  try {
    const response = await axiosInstance.post('auth/login/', { username, password });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || 'Đăng nhập thất bại');
  }
};

export const AuthRegister  = (username, password, employee_id) => {
  return axiosInstance.post('auth/register/', {username, password, employee_id})
}

export const AuthVerify = () => {
  return axiosInstance.post('auth/verify-token/')
}