import {  createContext, useState } from "react";


export let theamcontext=createContext();
function CustomProvider({children}){
    const[login,setlogin]=useState(true)
    function TrueLogin(){
        setlogin(true)

    }
    return(
       < theamcontext.Provider value={{login,setlogin,TrueLogin}} >
       {children}
       </theamcontext.Provider>
    )
}
export default CustomProvider ;