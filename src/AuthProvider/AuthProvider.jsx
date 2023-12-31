import { GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth";
import app from "../firebase/firebase.config";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null)
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
   const [user, setUser] = useState(null)
   const [loading, setLoading] = useState(true)

   const googleSign = () => {
      return signInWithPopup(auth, provider)
   }

   const createUser = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password)
   }

   const signIn = (email, password) => {
      return signInWithEmailAndPassword(auth, email, password)
   }

   const logOut = () => {
      setLoading(true)
      return signOut(auth);
   }

   useEffect(() => { 
      const unsubscribe = onAuthStateChanged(auth, currentUser => {
         setUser(currentUser);
         setLoading(false)
      });
      return () => {
         unsubscribe();
      }
   },[])
   
   const userInfo = {
      user,
      loading,
      createUser,
      signIn,
      googleSign,
      logOut
   }

   return (
      <AuthContext.Provider value={userInfo}>
         {children}
      </AuthContext.Provider>
   );
};

export default AuthProvider;