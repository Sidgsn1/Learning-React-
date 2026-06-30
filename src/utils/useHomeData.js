import {useState,useEffect} from 'react'

const useHomeData=()=>{

    const [listOfRestaurants,setListOfRestaurants]=useState([]);
    const [topRestaurantChains, setTopRestaurantChains] = useState([]);
    const [whatsOnYourMind, setWhatsOnYourMind] = useState([]);

    useEffect(()=>{
        fetchData();
        console.log("useEffect called for fetching the restaurants")
    },[])

    const fetchData=async()=>{
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        
        const jsonData=await data.json();
        
        console.log("all dataa",jsonData)

        const restaurants=jsonData?.data?.cards?.find((c)=>{
            return c?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        })?.card?.card?.gridElements?.infoWithStyle?.restaurants;

        console.log("rest list",restaurants)

        const whatsOnYourMindData = jsonData?.data?.cards?.find(
            (card) => card?.card?.card?.id === "whats_on_your_mind"
        )?.card?.card?.imageGridCards?.info || []

        console.log("whts on mind",whatsOnYourMindData)
        const topRestaurantChainsData = jsonData?.data?.cards?.find(
            (card) => card?.card?.card?.id === "top_brands_for_you"
        )?.card?.card?.gridElements?.infoWithStyle?.restaurants || []
        
        console.log("top res",topRestaurantChainsData)
        
        setWhatsOnYourMind(whatsOnYourMindData)
        setTopRestaurantChains(topRestaurantChainsData)
        setListOfRestaurants(restaurants)
    }

    return {
        listOfRestaurants,
        topRestaurantChains,
        whatsOnYourMind,
    };
}

export default useHomeData