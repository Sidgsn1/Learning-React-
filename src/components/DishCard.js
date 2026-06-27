import { dish_CDN_URL } from "../utils/constants"

const DishCard=({dishData})=>{

    const {name,defaultPrice,isVeg,ratings,description,imageId,price}=dishData?.card?.info || {}
    const {rating}=ratings?.aggregateRating || {}
    const finalPrice=(defaultPrice ?? price) / 100
    return(
        <div>
            <div className='menu-elem' style={{display:"flex"}}>
                <div className='menu-left'>
                    <h1>{name}</h1>
                    <h3>{finalPrice}</h3>
                    <h3>{rating}</h3>
                    <br />
                    <p>{description}</p>
                </div>
                <div className='menu-right'>
                    <div className='dish-img' style={{width:"200px"}}>
                        <img style={{width:"100%", objectFit:"cover"}} src={dish_CDN_URL + imageId} alt=''></img>
                    </div> 
                    <button>Add</button>
                </div>
            </div>
        </div>
    )
}

export default DishCard;