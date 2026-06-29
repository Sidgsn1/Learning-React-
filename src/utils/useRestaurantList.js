import {useState,useEffect} from 'react'

const useRestaurantList=()=>{

    const [listOfRestaurants,setListOfRestaurants]=useState([]);

    useEffect(()=>{
        fetchData();
        console.log("useEffect called for fetching the restaurants")
    },[])

    const fetchData=async()=>{
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        
        const jsonData=await data.json();
        
        const restaurants=jsonData?.data?.cards?.find((c)=>{
            return c?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        })?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        
        console.log(restaurants)
        
        setListOfRestaurants(restaurants)
    }

    return listOfRestaurants
}

export default useRestaurantList