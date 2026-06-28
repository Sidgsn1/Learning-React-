import User from "./User"
import UserClass from "./UserClass"
import React from "react"

const About=()=>{

    return(
        <div>
            <h1 style={{margin:"25px"}}>About Page</h1>
            <User />
            {/* <UserClass name={"sid classBasedComponent"} location={"Delhi"}/> */}
        </div>
    )
}

export default About