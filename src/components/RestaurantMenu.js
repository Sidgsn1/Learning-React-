// import {useState,useEffect} from 'react'
import { useParams } from 'react-router';
import DishCard from './DishCard';
import Shimmer from './Shimmer';
// import { MENU_API } from '../utils/constants';
import useRestaurantMenu from '../utils/useRestaurantMenu';

const RestaurantMenu=()=>{
    
    const {resId}=useParams()
    const resInfo=useRestaurantMenu(resId); //custom hook for fetching the menu data

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