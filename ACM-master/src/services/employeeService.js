import axiosInstance from "../API/axiosInstance";
import axios from "axios";

export const getEmployees = () => {
  return axiosInstance.get('employees/')
}

export const createEmployee = (formData) => {
  return axiosInstance.post('employees/create/', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
};