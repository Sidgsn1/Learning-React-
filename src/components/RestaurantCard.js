import {CDN_URL} from "../utils/constants"
import { Star } from "lucide-react";

const RestaurantCard=(props)=>{
    const {name,costForTwo,cuisines,avgRating,sla,cloudinaryImageId,areaName}=props.resData?.info;
    return(
        <div className="res-card flex flex-col gap-1 transition-all duration-200 hover:scale-95 cursor-pointer">
            <div className="res-img relative w-full h-48 rounded-2xl overflow-hidden">
                <div className="res-offer absolute bottom-0 w-full h-2/5 flex items-end px-3 py-2 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                <h1 className="offer-text text-xl font-extrabold tracking-tighter text-white">{costForTwo.toUpperCase()}</h1>
                </div>

                <img className="w-full h-full object-cover"
                src={CDN_URL+cloudinaryImageId}
                alt="resimg"
                />
            </div>

            <div className="res-detail flex flex-col px-0.5 mt-2">
                <h1 className="res-name text-xl font-bold tracking-tight truncate">{name}</h1>

                <div className="rating-time flex items-center gap-1">
                    <h3 className="res-rating-dot flex items-center gap-1 font-semibold text-sm">
                        <div className="flex items-center justify-center p-1 rounded-full bg-green-600">
                            <Star size={12} fill="white" color="#FFFFFF" />
                        </div>
                        <span className="text-light">{avgRating}</span>
                        <span className="text-gray-900 mx-1">•</span>
                    </h3>

                    <h3 className="res-time font-semibold text-md">{sla.slaString}</h3>
                </div>

                <div className="res-cuisine w-full">
                    <h3 className="text-gray-500 text-base font-medium truncate">{cuisines.join(", ")}</h3>
                </div>

                <div className="res-place">
                <h3 className="text-gray-500 text-base font-medium truncate">{areaName}</h3>
                </div>
            </div>
        </div>
    )
}

export default RestaurantCard