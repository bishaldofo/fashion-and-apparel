import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const MyCart = () => {

   const { loading } = useContext(AuthContext)
   
   if (loading) {
      return <div className="h-screen flex items-center justify-center">
      <span className="loading loading-dots loading-lg"></span>
   </div>
   }

   return (
      <div>
         <h1>My Cart</h1>
      </div>
   );
};

export default MyCart;