import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
import axios from "axios";

export const AuthContext = createContext()
const auth = getAuth(app);

const provider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // onAuth state change

    useEffect( () => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            // const userEmail = currentUser?.email || user?.email
            // const loggedUser = {email: userEmail}
            setUser(currentUser)
            setLoading(false)
            console.log('current user', currentUser);

            // if(currentUser) {
            //     axios.post("https://dream-job-finder-server.vercel.app/jwt", loggedUser, {withCredentials: true})
            //     .then(res => {
            //         console.log(res.data);
            //     })
            // }
            // else{
            //     axios.post("https://dream-job-finder-server.vercel.app/logout", loggedUser, {withCredentials: true})
            //     .then(res => {
            //         console.log(res.data);
            //     })
            // }

        })
        return () => {
            return unSubscribe()
        }
    }, [])

    // create user 
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login with google
    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    } 
    // login user 
    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // user profile update 
    const userProfileUpdate = (name, photo) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    // logout user 

    const logoutUser = () => {
        setLoading(true)
        return signOut(auth)
    }

    const authInfo = {
        user,
        loading,
        createUser,
        googleLogin,
        loginUser, 
        logoutUser,
        userProfileUpdate

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;