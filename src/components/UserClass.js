//class based component

import React from "react";

class UserClass extends React.Component{
//to receive the prop we will create constructor
    constructor(props){
        super(props)
        //creating a state variable
        this.state={
            userInfo:{
                name:"userName",
                location:"userLocation",
            }
        }

        console.log(this.props.name,"child Constructor")
    }

    async componentDidMount(){
        // console.log(this.props.name,"Child Component Did Mount")
        const data=await fetch("https://api.github.com/users/Sidgsn1")
        const jsonData=await data.json();
        console.log(this.props.name,jsonData)

        this.setState({
            userInfo:jsonData
        })
    }
    componentDidUpdate(){
        console.log("Component did Update")
    }

    render(){
        const {name,location,avatar_url}=this.state.userInfo;
        console.log(name,"child Render")
        return(
            <div className="user-card" style={{display:"flex",border:"1px solid black",padding:"10px",margin:"10px"}}>
                <div className="user-card-info" style={{width:"85%"}}>
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
}

export default UserClass