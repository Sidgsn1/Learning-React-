
import React from 'react'
import { whatsOnYourMind_URL } from '../utils/constants'

function FoodCategoryCard({data}) {
    const {text}=data.action;
    const {imageId}=data;
  return (
    <div className='w-40 flex items-center justify-center shrink-0'>
        <img className='w-20 sm:w-24 md:w-28 lg:w-32 xl:w-36
                    object-cover
                    cursor-pointer
                    transition-transform duration-200
                    hover:scale-95' src={whatsOnYourMind_URL+imageId} alt={text}></img>
    </div>
  )
}

export default FoodCategoryCard