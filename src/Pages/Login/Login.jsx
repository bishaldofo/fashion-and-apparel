import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
   const { googleSign, signIn, loading } = useContext(AuthContext);
   const navigate = useNavigate()
   const [error, setError] = useState('')

   
   if (loading) {
      return <div className="h-screen flex items-center justify-center">
         <span className="loading loading-dots loading-lg"></span>
      </div>
   }

   const handleGoogleSignIn = () => {
      const googleSignIn = googleSign().then(result => console.log(result.user))
      console.log(googleSignIn)
      if(googleSignIn) {
         navigate('/')
      }
   }

   const handleSignIn = event => {
      event.preventDefault();
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;
      console.log(email, password);

      setError('')

      signIn(email, password)
         .then(result => {
            console.log(result.user)
            Swal.fire(
               'Good job!',
               'Hi! Welcome to Our Store!',
               'success'
            )
            navigate('/')
         })
         .catch(error => {
            console.error(error)
            setError('Email and password does not match!')
            form.reset()
            return
         })
   }

   return (
      <div className="max-w-7xl m-auto pt-20 pb-40 px-4">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            <div>
               <div className="p-5 border space-y-4">
                  <h3>New Customer</h3>
                  <p>Register</p>

                  <p>By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.</p>
                  <div className="form-control mt-2">
                     <Link to='/register'>
                        <button className="btn btn-primary rounded-none w-40 bg-[#1F2937] border-none text-white hover:text-black hover:bg-white">Continue</button>
                     </Link>
                  </div>
               </div>
            </div>

            <div className="p-5 border space-y-4">
               <h3>Returning Customer</h3>
               <p>I am a returning customer</p>
               <p>Sign in with Google</p>
               <button onClick={handleGoogleSignIn} className="btn">Google</button>
               <p>Or</p>
               <p>Sign in with your Email</p>
               <form onSubmit={handleSignIn} className="card-body p-0">
                  <div className="form-control">
                     <label className="label p-0">
                        <span className="label-text">Your email address</span>
                     </label>
                     <input type="email" name="email" placeholder="Your email address" className="input input-bordered" required />
                  </div>
                  <div className="form-control">
                     <label className="label p-0">
                        <span className="label-text">Password</span>
                     </label>
                     <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                     <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                     </label>
                  </div>
                  <div className="form-control mt-2">
                     <button className="btn btn-primary rounded-none w-40 bg-[#1F2937] border-none text-white hover:text-black hover:bg-white">Login</button>
                  </div>
               </form>
               <p className="text-red-600 mt-2 font-semibold">{error}</p>
            </div>

         </div>
      </div>
   );
};

export default Login;