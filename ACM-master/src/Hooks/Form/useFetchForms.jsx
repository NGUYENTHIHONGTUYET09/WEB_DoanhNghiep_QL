import useFetch from "../useFetch";
import { getForms } from "../../services/formService";

export const useFetchForm = () => {
  const { data: forms, loading: formsLoading, error: formsError, refetch } = useFetch(getForms)
  return { forms, formsLoading, formsError, refetch }
}