import { createContext } from "react";

export const Users= createContext()

const UpdateUsers=(state, action)=>{

}


export function UserProvider({children}){
    const [state, dispatch] = useReducer(UpdateUsers, Users)

    return(
        <Users.Provider value={{...state}}>
            { children }
        </Users.Provider> 
    )
}