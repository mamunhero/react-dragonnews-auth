import { createContext, useEffect, useState } from "react";
import auth from "../FireBase/FirebaseConfig";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";



export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {

  /* 0 step declare usestate for loading */
  const [loading, setLoading] = useState(true);

  /* 1st step useState declare for user */
  const [user, setUser] = useState(null);
  /* 2nd step declare createUser function for register */
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  /* 3rd step declare signIn function for login */
  const createSignIn = (email, password) => {
    setLoading(true)
    return  signInWithEmailAndPassword(auth, email, password)
  }

  /* 4th step logout */
const logout = ()=> {
  setLoading(true)
  return signOut(auth)
}


  /* last step ovserbe user */
  useEffect(()=>{
    const unSubscribe =  onAuthStateChanged(auth, currentUser => {
       setUser(currentUser);
       /* loading finish */
       setLoading(false);
    });
    return () => {
      unSubscribe
    }
  },[])


  const authInfo = {
    loading,
    user,
    createUser,
    createSignIn,
    logout

  }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;