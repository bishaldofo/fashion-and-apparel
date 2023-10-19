import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
   const { user, loading } = useContext(AuthContext);
   
   if (loading) {
      return <div className="h-screen flex items-center justify-center">
      <span className="loading loading-dots loading-lg"></span>
   </div>
   }

   if (user) {
      return children;
   }

   return <Navigate to='/login'></Navigate>
};

export default PrivateRoute;