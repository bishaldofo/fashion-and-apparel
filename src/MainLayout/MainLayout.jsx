import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Header from "../Components/Header";

const MainLayout = () => {
   return (
      <div className="bg-[#F9F9F9]">
         <Header></Header>
         <Navbar></Navbar>
         <Outlet></Outlet>
         <Footer></Footer>
      </div>
   );
};

export default MainLayout;