
const whatsOnYourMind=({data})=>{

    return (
        <div className="mt-5">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold">What's on your mind?</h1>
                <div className="next-prev-btns">

                </div>
            </div>

            <div className="mt-6 flex gap-8 overflow-x-auto">
                {
                    data.map((item)=>(
                        <FoodCategoryCard key={item.id} data={item}/>
                    ))
                }
            </div>

        </div>
    )
}

export default whatsOnYourMind