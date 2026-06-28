// Functional Component
import {useEffect, useState} from 'react'
import Shimmer from './Shimmer';

const User=()=>{    
    const [userData,setUserData]=useState(null);

    useEffect(()=>{
        //api calls
        getUserInfo();

        return ()=>{
            console.log("unmount")
        }
    },[])

    const getUserInfo=async()=>{
        const data=await fetch("https://api.github.com/users/Sidgsn1")
        const jsonData=await data.json();
        console.log(jsonData)

        setUserData(jsonData)
    }

    if(userData===null) return <Shimmer />

    const {name,location,avatar_url,login}=userData;

    return(
        <div className="user-card" style={{display:"flex",border:"1px solid black",padding:"10px",margin:"10px"}}>
                <div className="user-card-info" style={{width:"85%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"flex-start",gap:"25px"}}>
                    <h2>Name: {name}</h2>
                    <h3>Location: {location}</h3>
                    <h4>Contact: @sidgsn</h4>
                </div>
                <div className="user-card-img" style={{width:"15%"}}>
                    <img style={{width:"100%",objectFit:"cover"}} src={avatar_url} alt=""></img>
                </div>
            </div>
    )
}

export default User