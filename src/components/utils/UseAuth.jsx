import { useContext } from "react";
import AuthContext from "./Auth";

const UseAuth = () => {
  return useContext(AuthContext);
};

export default UseAuth;
