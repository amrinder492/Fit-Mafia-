// import { ShoppingBasket } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Slider = () => {
    return (
        <div className='w-full h-full flex flex-col gap-4 justify-center xl:items-center bg-white pl-5 pt-9'>
            <h2 className='text-4xl md:text-[42px] font-bold'>
            Pick Your Favorite Tiffin Dish
                </h2>
            <div className="w-full h-full flex flex-wrap justify-center items-center gap-4 overflow-x-scroll scrollbar-hide">

                {/* // Card */}
                {Array(4).fill(0).map((_, index) => {
                    return <div key={index} className="w-[300px] h-fit bg-[#F4F4F4] rounded-lg overflow-hidden">
                        <div className="relative h-[190px] w-full rounded-lg overflow-hidden group cursor-pointer">
                            <Image
                                // src={'/temp/temp.webp'}
                                src={'https://img.freepik.com/free-photo/front-view-tasty-meat-soup-with-potatoes-greens-dark-desk-meal-meat-dish-sauce_140725-79118.jpg?t=st=1745607509~exp=1745611109~hmac=8918ff8a34b4d93eca4e9937b80814e00e210033b1820f24da741f71a247b7ca&w=1380'}
                                alt='slider-img'
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className="w-[90%] mx-auto flex flex-col gap-1 my-3 h-fit ">
                            <h2 className='font-bold text-xl'>
                            Veg Pulao + Raita
                            </h2>
                            {/* <h3 className='font-medium text-xl -mt-1'>$196.00</h3>
                            <button className='flex justify-center items-center text-white gap-1 w-full bg-fit-red py-2 mx-auto rounded-lg text-sm font-semibold hover:bg-black hover:text-fit-red duration-300 ease-in-out transition-all cursor-pointer '>
                                Add to Cart
                                <ShoppingBasket className='h-4 w-4' />
                            </button> */}
                        </div>
                    </div>
                })}

            </div>
        </div>
    )
}

export default Slider
