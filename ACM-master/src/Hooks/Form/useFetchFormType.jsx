import useFetch from "../useFetch";
import { getFormType } from "../../services/formService";


export const useFetchFormType = () => {
  const { data: formTypes, loading, error } = useFetch(getFormType)
  return { formTypes, loading, error }
}