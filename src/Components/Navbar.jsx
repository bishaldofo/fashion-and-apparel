import { Link, NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {

   const navLink = <>
      <li><NavLink to='/'>Home</NavLink></li>
      <li><NavLink to='/addProduct'>Add Product</NavLink></li>
   </>
   return (
      <div className="px-5">
         <div className="navbar bg-base-100">
            <div className="navbar-start">
               <div className="dropdown">
                  <label tabIndex={0} className="btn btn-ghost lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                  </label>
                  <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                     {navLink}
                  </ul>
               </div>
               <Link to='/'><img className="w-28" src="https://i.ibb.co/mXXYVLK/logo.jpg" alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
               <ul className="menu menu-horizontal px-1">
                  {navLink}
               </ul>
            </div>
            <div className="navbar-end">
               <div className="flex justify-between items-center gap-3">
                  <Link to='/myCart'><FaShoppingCart></FaShoppingCart></Link>
                  <Link to='/login'>Login</Link>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Navbar;