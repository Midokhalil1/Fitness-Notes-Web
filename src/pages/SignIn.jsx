
import React from "react"

import SignInForm from "../components/SignInForm"
import Login from "../components/Login"
import SignUp from "../components/SignUp"


export default function SignIn({setUser}) { //take it here

    return (
        
        
       <>
        {/* <SignInForm />, */}
        <Login setUser={setUser} />,
        {/* <SignUp />, */}
        </>
        
     
        
    
        

    )
      

    
}
