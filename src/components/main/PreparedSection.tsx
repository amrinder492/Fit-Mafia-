import React from 'react'

const PreparedSection = () => {
    return (
        <div className='w-full max-w-[1600px] mx-auto h-full flex flex-col gap-20 justify-center bg-white py-20'>
            <h3 className='font-bold text-3xl w-fit mx-auto px-5'>How Fit Mafia Prepared Meal Delivery Works</h3>

            <div className="w-full flex justify-evenly gap-5 flex-wrap">

                <div className="w-fit max-w-1/4 text-center text-base flex flex-col items-center justify-center  ">
                    <img src="/icons/main/pre-made-meal.svg" alt="pre-made-mea" className='h-[120px] w-[120px]' />
                    <h4 className='font-bold'>Pick Your Meals</h4>
                    <h5 className='font-medium max-w-[350px] w-full'>
                    Select your favorite dishes from a fresh, weekly menu—simple, tasty, and just the way you like it.
                    </h5>
                </div>
                
                <div className="w-fit max-w-1/4 text-center text-base flex flex-col items-center justify-center  ">
                    <img src="/icons/main/pre-made-meal.svg" alt="pre-made-mea" className='h-[120px] w-[120px]' />
                    <h4 className='font-bold'>We Cook Fresh Daily</h4>
                    <h5 className='font-medium max-w-[350px] w-full'>
                    Our expert chefs prepare wholesome, balanced meals every day using fresh, locally-sourced ingredients – just like home-cooked food.
                    </h5>
                </div>
                
                <div className="w-fit max-w-1/4 text-center text-base flex flex-col items-center justify-center ">
                    <img src="/icons/main/pre-made-meal.svg" alt="pre-made-mea" className='h-[120px] w-[120px]' />
                    <h4 className='font-bold'>Delivered to Your Doorstep</h4>
                    <h5 className='font-medium max-w-[350px] w-full'>
                    Get your hot tiffin delivered right to your location, on time – whether it’s lunch, dinner, or both. No more worrying about cooking or skipping meals.
                    </h5>
                </div>

            </div>

        </div>
    )
}

export default PreparedSection
