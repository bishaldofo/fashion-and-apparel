import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const AddProduct = () => {

   const { loading } = useContext(AuthContext)
   
   if (loading) {
      return <div className="h-screen flex items-center justify-center">
      <span className="loading loading-dots loading-lg"></span>
   </div>
   }

   return (
      <div>
         <h1>Add Product</h1>         
      </div>
   );
};

export default AddProduct;