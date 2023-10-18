import { Link } from "react-router-dom";

const Login = () => {
   return (
      <div className="max-w-7xl m-auto pt-20 pb-40">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            <div>
               <div className="p-5 border space-y-4">
                  <h3>New Customer</h3>
                  <p>Register</p>

                  <p>By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.</p>
                  <div className="form-control mt-2">
                     <Link to='/register'>
                        <button className="btn btn-primary w-40 bg-black border-none text-white">Continue</button>
                     </Link>
                  </div>
               </div>
            </div>

            <div className="p-5 border space-y-4">
               <h3>Returning Customer</h3>
               <p>I am a returning customer</p>
               <form className="card-body p-0">
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
                     <button className="btn btn-primary w-40 bg-black border-none text-white">Login</button>
                  </div>
               </form>
            </div>

         </div>
      </div>
   );
};

export default Login;