import axiosInstance from "./axiosInstance"
export const AuthLogin = (username, password) => {
  return axiosInstance.post('auth/login/', { username, password })
}
