import React, {createContext, useContext, useEffect, useState} from "react";


// Prepare login context
const LoginContext = createContext();


// Create hook to access LoginContext from any component, it returns { loggedAccount, setLoggedAccount}
export function useLoginContext(){
    return useContext(LoginContext);
}


export function LoginProvider({children}){

    // store logged account id - if logged out set we will set -1
    const [loggedAccount, setLoggedAccount] = useState(-1);

    useEffect( () =>{
        console.log("Logged user: ", loggedAccount);
    }, [loggedAccount])


    return(
        <>  
            {/* Define which values will be share with another components */}
            <LoginContext.Provider value = {{ loggedAccount, setLoggedAccount}}>
                {children}
            </LoginContext.Provider>
        </>
    )

}