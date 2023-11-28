import React, { Children, createContext } from 'react';

const AuthContext = createContext()
const AuthProvider = ({children}) => {


    const a = 'a'
    const b = 'b'
    const authInfo = {
        a, b
    }
    return (
       <AuthContext.Provider value={authInfo}>
           {Children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;