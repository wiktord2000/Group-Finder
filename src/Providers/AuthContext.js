import React, {createContext, useContext, useEffect, useState} from "react";
import { auth } from "../firebase/init";

// Prepare auth context
const AuthContext = createContext();


// Create hook to access AuthContext from any component, it returns value object
export function useAuthContext(){
    return useContext(AuthContext);
}


export function AuthProvider({children}){

    // store current logged user
    const [currentUser, setCurrentUser] = useState();

    // we want to make it only once (prepare subscription) - in class component we will do this in constructor
    useEffect( () =>{

        // build method executed when user has been changed
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
        })
        
        return unsubscribe; 

    }, [])

    const signUp = (email, password) => {
        return auth.createUserWithEmailAndPassword(email, password);
    }

    // shared values
    const value = {
        currentUser,
        signUp
    }

    return(
        <>  
            {/* Define which values will be share with another components */}
            <AuthContext.Provider value = {value}>
                {children}
            </AuthContext.Provider>
        </>
    )

}