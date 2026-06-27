import {CDN_URL} from "../utils/constants"

const RestaurantCard=(props)=>{
    const {name,costForTwo,cuisines,avgRating,sla,cloudinaryImageId}=props.resData?.info;
    return(
        <div className='res-card'>
            <img className="res-logo" src={`${CDN_URL}${cloudinaryImageId}`} alt="reslogo"></img>
            <h3 className='res-name'>{name}</h3>
            <h4 className='res-cost'>{costForTwo}</h4>
            <h4 className='res-cuisine'>{cuisines.join(", ")}</h4>
            <h4 className='res-rating'>{avgRating}</h4>
            <h4 className='res-delivery'>{sla.deliveryTime} minutes</h4>
        </div>
    )
}

export default RestaurantCard