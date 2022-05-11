import React, {createContext, useContext, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";


const LoginContext = createContext({});


//Create hook to access LoginContext
export function useLoginContext(){
    return useContext(LoginContext);
}


export function LoginProvider({children}){

    // const navigate = useNavigate();
    const [loggedAccount, setLoggedAccount] = useState(-1);

    // useEffect(() => {
    //     console.log(`New value: ${loggedAccount}`);
    // }, [loggedAccount]);

    return(
        <>
            <LoginContext.Provider value = {{ loggedAccount, setLoggedAccount}}>
                {children}
            </LoginContext.Provider>
        </>
    )

}