import { Link, NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Navbar = () => {

   const { user, logOut, loading } = useContext(AuthContext);
   
   if (loading) {
      return <div className="h-screen flex items-center justify-center">
         <span className="loading loading-dots loading-lg"></span>
      </div>
   }

   const handleSignOut = () => {
      logOut()
   }
   
   const navLink = <>
      <li><NavLink to='/'>Home</NavLink></li>
      <li><NavLink to='/addProduct'>Add Product</NavLink></li>
      <li><NavLink to='/about'>About Us</NavLink></li>
   </>
   return (
      <div className="shadow-lg bg-base-100">
         <div className="navbar shadow-none max-w-screen-2xl m-auto bg-base-100">
            <div className="navbar-start">
               <div className="dropdown">
                  <label tabIndex={0} className="btn btn-ghost lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                  </label>
                  <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                     {navLink}
                  </ul>
               </div>
               <Link to='/'><h2 className="text-lg lg:text-2xl font-semibold">Fashion and Apparel</h2></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
               <ul className="menu menu-horizontal px-1">
                  {navLink}
               </ul>
            </div>
            <div className="navbar-end">
               <div className="flex justify-between items-center gap-3">
                  <div><Link to='/myCart'><FaShoppingCart></FaShoppingCart></Link></div>
                  <div>
                     {
                        user ?
                        <div className="dropdown dropdown-end">
                           <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                           <div className="w-10 rounded-full">
                              <img src={user.photoURL} />
                           </div>
                           </label>
                           <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                              <li><a>{user.displayName}</a></li>
                              <li><a onClick={handleSignOut}>Sign Out</a></li>
                           </ul>
                        </div>
                        
                        :
                        <Link to='/login'>Login</Link>
                     }
                     
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Navbar;