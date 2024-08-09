import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const AuthProvider = ({children}) => {
    const auth = getAuth(app);
    const [user, setUser] = useState(null);

    const signUpUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    const signOutUser = ()=> {
        return signOut(auth)
    }
    useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth, (loggedUser)=> {
            setUser(loggedUser)
        })
        return ()=> {
            unsubscribe();
        }
    }, [])

    const authInfo = {
        user,
        signUpUser,
        logInUser,
        signOutUser,
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;