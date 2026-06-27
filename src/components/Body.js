import RestaurantCard from "./RestaurantCard"
import Shimmer from "./Shimmer"
import {useState,useEffect} from 'react'
import {Link} from 'react-router'

const Body=()=>{
    const [listOfRestaurants,setListOfRestaurants]=useState([])
    const [filteredRestaurant,setFilteredRestaurant]=useState([])
    const [searchText,setSearchText]=useState("")

    console.log("body rendered");
    useEffect(()=>{
        fetchData();
        console.log("useEffect called");
    },[])

    let fetchData=async()=>{
        
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        
        const jsonData=await data.json();
        
        const restaurants=jsonData?.data?.cards?.find((c)=>{
            return c?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        })?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        
        console.log(restaurants)
        setListOfRestaurants(restaurants)
        setFilteredRestaurant(restaurants)
    }

    return (filteredRestaurant.length===0)?<Shimmer /> : (
        <div className='body-container'>
            <div className='filter'>
                <div className="search">
                    <input type="text"className="search-box" value={searchText} onChange={(e)=>setSearchText(e.target.value)} />
                    <button onClick={()=>{
                        
                        const searchedRes=listOfRestaurants.filter((res)=> res?.info?.name.toLowerCase().includes(searchText.toLowerCase()))
                        
                        setFilteredRestaurant(searchedRes)
                    }}>Search</button>
                </div>
                <button className="filter-btn" onClick={()=>{
                    const filteredList = listOfRestaurants.filter((res)=>res.info.avgRating > 4.3)
                    setFilteredRestaurant(filteredList)
                }}>Top Rated Restaurants</button>
            </div>
            <div className='res-container'>
                {
                    filteredRestaurant.map(restaurant => (
                        <Link style={{textDecoration:"none",color:"inherit"}} key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}> <RestaurantCard  resData={restaurant} /> </Link>)
                    )
                }
            </div>
        </div>
    )
}

export default Body