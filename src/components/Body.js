import RestaurantCard from "./RestaurantCard"
import Shimmer from "./Shimmer"
import {useState,useEffect} from 'react'
import {Link} from 'react-router'
import useOnlineStatus from '../utils/useOnlineStatus'
import useHomeData from "../utils/useHomeData"
import { Search } from "lucide-react"
import whatsOnYourMind from "./WhatsOnYourMind"
import TopRestaurantChains from "./TopRestaurantChains"

const Body=()=>{
    // const [listOfRestaurants,setListOfRestaurants]=useState([])
    const [filteredRestaurant,setFilteredRestaurant]=useState([])
    const [searchText,setSearchText]=useState("")

    const {listOfRestaurants,topRestaurantChains,whatsOnYourMind,} = useHomeData();  //for fetching the restaurants

    console.log("body rendered");

    useEffect(()=>{
        setFilteredRestaurant(listOfRestaurants)
    },[listOfRestaurants])

    // useEffect(()=>{
    //     fetchData();
    //     console.log("useEffect called");
    // },[])

    // let fetchData=async()=>{
        
    //     const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        
    //     const jsonData=await data.json();
        
    //     const restaurants=jsonData?.data?.cards?.find((c)=>{
    //         return c?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    //     })?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        
    //     console.log(restaurants)
    //     setListOfRestaurants(restaurants)
    //     setFilteredRestaurant(restaurants)
    // }

    const onlineStatus=useOnlineStatus()
    const handleSearch = () => {
        const searchedRes = listOfRestaurants.filter((res) =>
            res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
        );
        
        setFilteredRestaurant(searchedRes);
    };

    const filterButtonsList = [
        { id: 0, title: "All", type: "all" },
        { id: 1, title: "Ratings 4.0+", type: "rating4" },
        { id: 2, title: "Top Rated", type: "topRated" },
        { id: 3, title: "Pure Veg", type: "veg" },
        { id: 4, title: "Fast Delivery", type: "fastDelivery" },
    ];

    const handleFilter=(type)=>{
        let filtered=listOfRestaurants;

        switch(type){
           
            case "all":
                filtered=listOfRestaurants
                break;
            case "rating4":
                filtered=listOfRestaurants.filter((res)=>res.info.avgRating >= 4)
                break;
            case "topRated":
                filtered=listOfRestaurants.filter((res)=>res.info.avgRating >= 4.5)
                break;
            case "veg":
                filtered=listOfRestaurants.filter((res)=>res.info.veg)
                break;
            case "fastDelivery":
                filtered = listOfRestaurants.filter((res)=>res.info.sla.deliveryTime <= 30);
                break;

            default:
                filtered=listOfRestaurants
        }
        setFilteredRestaurant(filtered)
    }

    if(onlineStatus === false) return <h1>Looks like you are offline!! Please check you internet connection..</h1>

    return (filteredRestaurant.length===0)?<Shimmer /> : (
        <div className='body-container max-w-7xl mx-auto px-6 py-8'>
            {
                whatsOnYourMind.length > 0 && (<WhatsOnYourMind data={whatsOnYourMind} />)
            }
            {
                topRestaurantChains > 0 && (<TopRestaurantChains data={topRestaurantChains} />)
            }
            <h1 className="text-4xl font-bold">Restaurants with online food delivery in Delhi</h1>
            <div className='filter flex flex-col gap-6 mt-8'>
                <div className="search flex items-center w-fit">
                    <input type="text"className="search-box w-72 rounded-l-md outline-none font-semibold bg-gray-200 px-4 py-3 " placeholder="Search For Restaurant and Food"
                     value={searchText} onChange={(e)=>setSearchText(e.target.value)} 
                     onKeyDown={(e)=>{
                        if(e.key === 'Enter'){
                            handleSearch();
                        }
                     }}/>

                    <button className="px-3 py-3 rounded-r-full hover:bg-orange-500 transition-colors duration-200 cursor-pointer text-gray-700 hover:text-white bg-gray-200" onClick={handleSearch}>
                    <Search /></button>
                </div>
                <div className="filter-btns flex gap-3 flex-wrap mb-5">  
                    {
                        filterButtonsList.map((btn)=>(                           
                            <button key={btn.id} className="filter-btn px-5 py-2 rounded-full border border-gray-300 bg-white shadow-sm text-sm
                            font-semibold text-gray-700 hover:shadow-md hover:bg-gray-50 transition-all duration-200 cursor-pointer" 
                            onClick={()=>handleFilter(btn.type)}>{btn.title}</button>
                        ))
                    }   
                </div>
            </div>
            <div className='res-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10 mt-10'>
                {
                    filteredRestaurant.map(restaurant => (
                        <Link className="no-underline" key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}> <RestaurantCard  resData={restaurant} /> </Link>
                        )
                    )
                }
            </div>
        </div>
    )
}

export default Body