import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from "../Firebase/firebase.config";

export const AuthContext = createContext(null)
const Auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState()
    const [loading, setLoading] = useState()


    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(Auth, email, password);
    }

    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(Auth, email, password);
    }

    const googleSignIn = (provider) => { 
        setLoading(true);
        return signInWithPopup(Auth, provider)
    }

    const logout = () => {
        setLoading(true);
        return signOut(Auth)
    }
    
    const authInfo = {user, loading, createUser, loginUser, googleSignIn, logout}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;