import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Header from "../Components/Header";

const MainLayout = () => {
   return (
      <div>
         <Header></Header>
         <Navbar></Navbar>
         <div className="max-w-screen-2xl m-auto">
            <Outlet></Outlet>
         </div>
         <Footer></Footer>
      </div>
   );
};

export default MainLayout;