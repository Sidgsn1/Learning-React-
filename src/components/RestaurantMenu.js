import {useState,useEffect} from 'react'
import { useParams } from 'react-router';
import DishCard from './DishCard';
import Shimmer from './Shimmer';
import { MENU_API } from '../utils/constants';

const RestaurantMenu=()=>{
    
    const [resInfo,setResInfo]=useState(null);
    const {resId}=useParams()

    useEffect(()=>{
        fetchMenu();
    },[])

    // "https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.65420&lng=77.23730&restaurantId=831065&catalog_qa=undefined&submitAction=ENTER"
    const fetchMenu = async () => {
        const data = await fetch(MENU_API+resId);

        const jsonData=await data.json();
        console.log(jsonData)
        setResInfo(jsonData);
    }

    if(resInfo === null) return <Shimmer />
    
    const {name,areaName,avgRating,costForTwoMessage,sla}=resInfo?.data?.cards?.find((c)=>c?.card?.card?.info)?.card?.card?.info 
    const {minDeliveryTime,maxDeliveryTime}=sla 
    
    const cardsGroup=resInfo?.data?.cards?.find((c)=>c?.groupedCard?.cardGroupMap?.REGULAR?.cards)?.groupedCard?.cardGroupMap?.REGULAR?.cards 
    console.log(cardsGroup)

    const menuCategories=cardsGroup.filter((g)=>g?.card?.card?.itemCards)
    console.log("menu Category",menuCategories)
   
    return (
        <div className="menu">
            <h1>{name}</h1>
            <h2>Order Online</h2>
            <div style={{margin:"20px"}}>
                <h2>Rating {avgRating} : {costForTwoMessage}</h2>
                <h3>Outlet:{areaName}</h3>
                <h3>{minDeliveryTime}-{maxDeliveryTime}</h3>
            </div>
            <h2>Menu</h2>
            {
                menuCategories.map((category)=>{
                    const { title,itemCards,categoryId }=category.card.card
                    
                    return(
                        <div key={categoryId} style={{margin:"20px",borderTop:"1px solid black",borderBottom:"1px solid black"}}>
                            <h2 style={{color:"red"}}>{title}</h2>
                            {
                                itemCards.map((item)=><DishCard key={item.card.info.id} dishData={item} />)
                            }
                        </div>
                    )

                })
            }
        </div>
    )
}

export default RestaurantMenu