import useFetch from "../useFetch";
import { getEmployees } from "../../services/employeeService";

export const useFetchEmployees = () => {
  const { data: employees, loading, error, refetch } = useFetch(getEmployees)
  return { employees, loading, error, refetch }
}