import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import app from '../../firebase/firebase.console';


export const AuthContext=createContext();
const auth =getAuth(app)

const AuthProvider = ({children}) => {
const [user, setUser]=useState({});
const [loading, setLoading] = useState(true);

const createUser=(email, password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
}

const googleSignIn =(provider)=>{
    return signInWithPopup(auth, provider)
}

const logIn =(email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
}

const updateUser=(userInfo)=>{
    setLoading(true)
    return updateProfile(auth.currentUser, userInfo)
}

const logOut =() => {
return signOut(auth)
}


useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser=>{
        setUser(currentUser);
        setLoading(false)
    });
    return ()=> unsubscribe()
},[])
    const authInfo={
        createUser,
        logIn,
        logOut,
        updateUser,
        googleSignIn,
        user,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;