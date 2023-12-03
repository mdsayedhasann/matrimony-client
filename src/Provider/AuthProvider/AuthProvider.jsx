import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../../firebase.init';
import { GoogleAuthProvider } from "firebase/auth";


export const AuthContext = createContext()
const AuthProvider = ({children}) => {
    const [user, setUser] = useState('')
    const [loading, setLoading] = useState(true)

    // Create New User Start
    const createAccount = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
        
    }
    // Create New User End

    // Signin New User Start
    const singinUser = (email, password) => {
        setLoading(true)
     return signInWithEmailAndPassword(auth, email, password)
    }
    // Signin New User End

    // Update User Start
    const updateUser = (displayName, photoURL) => {
        return updateProfile(auth.currentUser, {
            displayName: displayName,
            photoURL: photoURL
        })
    }
    // Update User End

    // Signout User Start
    const signoutUser = () => {
        setLoading(true)
        return signOut(auth)
    }
    // Signout User End
    
    // Unsubscribe Start
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unSubscribe()
        }
    }, [])
    // Unsubscribe End 

    // Google Sign In 
    const provider = new GoogleAuthProvider();
    const googleLogin = () => {
        setLoading(false)
       return signInWithPopup(auth, provider)
    }

    const authInfo = {
        user,
        loading,
        createAccount,
        updateUser,
        singinUser,
        googleLogin,
        signoutUser
    }
    return (
       <AuthContext.Provider value={authInfo}>
           {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;