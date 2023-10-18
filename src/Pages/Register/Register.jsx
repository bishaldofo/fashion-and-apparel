import { Link } from "react-router-dom";

const Register = () => {
   return (
      <div className="max-w-7xl m-auto pt-20 pb-40">
         <div className="p-5 border space-y-4">
            <p>If you already have an account with us, please login <Link className="font-bold text-blue-600" to='/login'>here</Link></p>
            <form className="card-body p-0">
               <div className="form-control">
                  <label className="label p-0">
                     <span className="label-text">Your Name</span>
                  </label>
                  <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
               </div>
               <div className="form-control">
                  <label className="label p-0">
                     <span className="label-text">Your email address</span>
                  </label>
                  <input type="email" name="email" placeholder="Your email address" className="input input-bordered" required />
               </div>
               <div className="form-control">
                  <label className="label p-0">
                     <span className="label-text">Photo URL</span>
                  </label>
                  <input type="text" name="photoURL" placeholder="Photo URL" className="input input-bordered" required />
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
                  <button className="btn btn-primary w-40 bg-black border-none text-white">Register</button>
               </div>
            </form>
         </div>
      </div>
   );
};

export default Register;