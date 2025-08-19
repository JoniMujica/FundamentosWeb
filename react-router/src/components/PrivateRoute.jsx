import { Navigate } from "react-router-dom";

//Simulacion Autenticación
let auth;
auth = true;


const PrivateRoute = ({ children, redirectTo }) => {
  console.log(children,redirectTo);
  
  return auth ? children : <Navigate to={redirectTo} />;
};

export default PrivateRoute;