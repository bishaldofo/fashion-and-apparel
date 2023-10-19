import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { getAuth, updateProfile } from "firebase/auth";

const Register = () => {

   const { createUser, loading } = useContext(AuthContext);
   const auth = getAuth();
   const [error, setError] = useState('')
   
   if (loading) {
      return <div className="h-screen flex items-center justify-center">
      <span className="loading loading-dots loading-lg"></span>
   </div>
   }

   const handleSignUp = event => {
      event.preventDefault()
      const form = event.target;
      const name = form.name.value;
      const email = form.email.value;
      const photoURL = form.photoURL.value;
      const password = form.password.value;
      const user = { name, email, photoURL, password }
      console.log(user);

      setError('')

      if (password.length < 6) {
         setError('Password length must be six!')
         return
      }

      if (/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test) {
         setError('Password length must be six with one character, one symbol!')
         return
      }
      createUser(email, password)
         .then(result => {
            const user = result.user;
            console.log(user)
            return updateProfile(user, {
               displayName: name,
               photoURL: photoURL,
            });
         })
         .then(() => {
            alert('Success')
         })
         .catch(error => {
            console.error(error);
         });
   }
   return (
      <div className="max-w-7xl m-auto pt-20 pb-40 px-4">
         <div className="p-5 border space-y-4">
            <p>If you already have an account with us, please login <Link className="font-bold text-blue-600" to='/login'>here</Link></p>
            <form onSubmit={handleSignUp} className="card-body p-0">
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
                  <button className="btn btn-primary rounded-none w-40 bg-black border-none text-white hover:text-black hover:bg-white">Register</button>
               </div>
            </form>
            <p className="text-red-600 font-semibold mt-2">{error}</p>
         </div>
      </div>
   );
};

export default Register;