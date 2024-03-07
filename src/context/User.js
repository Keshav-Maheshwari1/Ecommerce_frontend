import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({children})=>{
        const [displayUser,setDisplayUser] = useState({
                username:'',
                email:''
        })
        return(
                <UserContext.Provider value={{displayUser,setDisplayUser}}>
                        {children}
                </UserContext.Provider>
        )
}
export const useUserContext = ()=>useContext(UserContext);