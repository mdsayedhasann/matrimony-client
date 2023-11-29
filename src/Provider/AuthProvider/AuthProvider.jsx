import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../../firebase.init';

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

    const authInfo = {
        user,
        loading,
        createAccount,
        singinUser,
        signoutUser
    }
    return (
       <AuthContext.Provider value={authInfo}>
           {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;