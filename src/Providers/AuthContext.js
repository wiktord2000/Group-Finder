import React, {createContext, useContext, useEffect, useState} from "react";
import { auth } from "../firebase/init";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";


// Prepare auth context
const AuthContext = createContext();


// Create hook to access AuthContext from any component, it returns value object
export function useAuthContext(){
    return useContext(AuthContext);
}


export function AuthProvider({children}){

    // store current logged user
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);

    // we want to make it only once (prepare subscription) - in class component we will do this in constructor
    useEffect( () =>{

        // build method executed when user has been changed
        const unsubscribe = auth.onAuthStateChanged(user => {
            // Note: order is important
            setCurrentUser(user);
            setLoading(false);
        })
        
        return unsubscribe; 

    }, [])

    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        return signOut(auth);
    }

    const signInWithGoogle = () => {

        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider);
    }

    // shared values
    const value = {
        currentUser,
        signUp,
        logIn,
        logOut,
        signInWithGoogle
    }

    return(
        <>  
            {/* Define which values will be share with another components */}
            <AuthContext.Provider value = {value}>
                {/* Give access to app only when user is logged */}
                {!loading && children}
            </AuthContext.Provider>
        </>
    )

}