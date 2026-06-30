import { useState } from "react";
import {Link,NavLink} from 'react-router'
import useOnlineStatus from "../utils/useOnlineStatus";
import {House,UsersRound,PhoneCall,ShoppingBasket,ShoppingCart,User} from "lucide-react";
const logo = new URL("../Assets/Logo/LogoIcon.png", import.meta.url).href;


const Header=()=>{

    const [isLoggedIn,setIsLoggedIn]=useState(false)

    const onlineStatus=useOnlineStatus()

    console.log("header rendered")
    
    const navLinkClasses=({isActive})=>`flex flex-col items-center gap-1 font-medium cursor-pointer transition-all duration-200 border-b-2
                            pb-1 ${isActive ? "text-orange-500 border-orange-500":"text-gray-700 border-transparent hover:text-orange-500 hover:border-orange-500"}`

    return(
        <div className="header bg-white shadow-md">
            <div className="header-container max-w-7xl mx-auto py-2 flex justify-between items-center">
                <div className="Logo-div left-section flex items-center gap-4  overflow-hidden w-fit h-20">
                    <div className="flex items-center gap-2">
                        <img src={logo} alt="UrbanBite" className="h-14 w-auto object-cover"/>
                        <h1 className="text-2xl font-bold">
                            <span className="text-orange-500">Urban</span>
                            <span className="text-green-700">Bite</span>
                        </h1>
                    </div>
                    <div className="pipe w-0.5 h-10 bg-gray-300"></div>
                    <div className="online-status  flex gap-2 items-center ">
                        <div className="status-signal">{onlineStatus ? "🟢" : "🔴"}</div>
                        <div className="status-text flex flex-col">
                            <h3 className="font-bold">Online Status</h3>
                            <h4 className={`${onlineStatus ?"text-green-700":"text-red-500"} font-semibold`}>{onlineStatus ? "We are live!" : "offline"}</h4>
                        </div>
                    </div>
                </div>
                <div className="nav-links flex items-center gap-8 ">
                    <nav className="flex items-center gap-10">
                        <NavLink to="/" className={navLinkClasses}>
                            <House size={22} />
                            <span>Home</span>
                        </NavLink>
                        <NavLink to="/about" className={navLinkClasses}>
                            <UsersRound size={22} />
                            About
                        </NavLink>
                        <NavLink to="/contact" className={navLinkClasses}>
                                <PhoneCall size={22} />
                                Contact Us
                        </NavLink>
                        <NavLink to="/grocery" className={navLinkClasses}>
                                <ShoppingBasket size={22} />
                                Grocery
                        </NavLink>
                    </nav>
                    <div className="pipe w-0.5 h-10 bg-gray-300"></div>
                    <div className="relative flex item-center gap-1 font-medium cursor-pointer hover:text-orange-500 transition-colors duration-200">
                        <ShoppingCart size={22} />
                        <span>Cart</span>
                        <span className="absolute -top-4 left-12 bg-orange-500 text-white text-[10px] rounded-lg h-5 w-5 flex items-center justify-center font-bold">9</span>
                    </div>
                    <button className="flex gap-1 font-medium px-5 py-3 text-orange-400 
                        rounded-md border-2 cursor-pointer border-orange-400 bg-orange-50
                        hover:bg-orange-500 hover:text-white transition-all duration-200" onClick={()=>setIsLoggedIn(prev=>!prev)}>
                        <User size={22} />
                        <span>{isLoggedIn===false ? "login" : "logout"}</span>
                    </button>
                </div>


            </div>
        </div>
    )
}

export default Header;