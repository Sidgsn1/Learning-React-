import React from 'react'
import { Soup } from "lucide-react";

const leftItemList=[1,2,3,4,5,6,7,8]
const rightItemList=[1,2,3,4,5,6,7,8]
const Shimmer = () => {
  return (
    <div className='shimmer-container w-full'>
        <div className='shimmer-head  w-full h-[350px] bg-[#171A29] flex flex-col justify-center items-center gap-6 p-6 text-white'>
            <div className='loading-icon relative w-24 h-24'>
                <div className='loader absolute inset-0 rounded-full'></div>
                <Soup
                    size={48}
                    strokeWidth={2}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white"
                />
            </div>
            <h1 className="font-medium text-3xl">Looking for great food near you ...</h1>
        </div>
        <div className='shimmer-body w-full flex gap-5 px-[190px]'>
            <div className='shimmer-left w-[28%] border-l-[5px] border-r-[5px] border-gray-300'>
                {
                    leftItemList.map((item)=>(
                        <div key={item} className={`left-elem w-full h-[102px] flex items-center gap-6 p-5 ${item === 1 ? "mt-5 bg-gray-300" : ""}`}>
                            <div className={`"left-circle w-14 h-14 rounded-full bg-gray-300" ${item === 1 ? "bg-white" : "bg-gray-300"}`}></div>
                            <div className={`"left-rec w-[150px] h-[15px] rounded bg-gray-300" ${item === 1 ? "bg-white" : "bg-gray-300"}`}></div>
                        </div>
                    ))
                }
            </div>
            <div className='shimmer-right w-[70%] p-10 flex flex-col gap-10'>
                <div className='right-filter mt-5 w-20 h-4 bg-gray-300 rounded'></div>
                <div className='right-card-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 mt-10'>
                    {
                        rightItemList.map((item)=>(
                            <div key={item} className='right-card flex flex-col gap-1'>
                                <div className='r-card-img h-40 bg-gray-300 '></div>
                                <div className='r-card-h1 w-36 h-3 bg-gray-300 '></div>
                                <div className='r-card-h2 w-24 h-3 bg-gray-300 '></div>
                            </div>
                        ))
                    }
                   
                </div>
            </div>
        </div>
    </div>
  )
}

export default Shimmer