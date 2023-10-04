import { useState } from "react";
import { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from './../firebase/firebase.config';
import { useEffect } from "react";

export const AuthContext = createContext(null)

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)

    const createUser = (email, password)=>{
        createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) =>{
        signInWithEmailAndPassword(auth, email,password)
    }

    const logOut = () =>{
      return  signOut(auth);
    }
    //manege state
    useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, currentUser =>{
           console.log(' user auth state change', currentUser)
           setUser(currentUser)
})
return () =>{
    unSubscribe()
}
    },[])

const authInfo ={
    user,
 createUser,
 logOut,
 signIn
}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;