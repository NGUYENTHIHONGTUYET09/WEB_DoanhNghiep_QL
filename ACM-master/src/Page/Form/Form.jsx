import FormUser from "./FormUser";
import FormAdmin from "./FormAdmin";
import { useAuth } from "../../Context/Auth.context";
export const Form = () => {
  const { user } = useAuth();
  if (user && user.role_name === 'User') return <FormUser></FormUser>
  if (user && user.role_name === 'Admin') return <FormAdmin></FormAdmin>
}

