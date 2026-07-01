import {ArrowLeft,ArrowRight} from 'lucide-react'
import RestaurantCard from './RestaurantCard'
import {Link} from "react-router"

const TopRestaurantChains=({data})=>{

    return(
        <div className="mt-5">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold">Top restaurant chains in Delhi</h1>
                <div className="next-prev-btns flex gap-1">
                    <button className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors duration-200 cursor-pointer">
                        <ArrowLeft size={20} strokeWidth={1.5} />
                    </button>

                    <button className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center  transition-colors duration-200 cursor-pointer">
                        <ArrowRight size={20} strokeWidth={1.5} />
                    </button>
                </div>
            </div>

            <div className="my-6 flex gap-2 sm:gap-4 lg:gap-6 overflow-hidden">
                {
                    data.map((item)=>(
                        <Link className="no-underline" key={item.info.id} to={"/restaurants/"+item.info.id}> <RestaurantCard  resData={item} /> </Link>
                    ))
                }
            </div>

            <div className="mt-10 border-b-2 border-gray-300"></div>

        </div>
    )
}

export default TopRestaurantChains 