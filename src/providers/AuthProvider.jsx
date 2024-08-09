import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const AuthProvider = ({children}) => {
    const auth = getAuth(app);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const signUpUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }
    const signInWithGithub = () => {
        return signInWithPopup(auth, githubProvider);
    }
    const signOutUser = ()=> {
        return signOut(auth)
    }
    useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth, (loggedUser)=> {
            setUser(loggedUser);
            setLoading(false);
        })
        return ()=> {
            unsubscribe();
        }
    }, [])

    const authInfo = {
        user,
        loading,
        signUpUser,
        logInUser,
        signOutUser,
        signInWithGithub,
        signInWithGoogle,
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;