import React from 'react'
import GetBtn from '../buttons/GetBtn'

const OrderNow = () => {
  return (
    <div className="w-full h-28 flex justify-center items-center bg-gradient-to-r from-orange-200 via-orange-300 to-orange-600/50">
        <div className="animate-pulse hover:animate-none transition-transform duration-300 hover:scale-105">
          <div className="relative">
            <div className="absolute inset-0 rounded-full blur-xl opacity-60 bg-orange-400 animate-ping z-0" />
            <div className="relative z-10 shadow-xl">
              <GetBtn
                content="Order Now"
                link="/our-plans"
                className="bg-fit-red text-white font-bold px-6 py-3 rounded-full shadow-lg transition-transform duration-300 hover:scale-110 hover:shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
  )
}

export default OrderNow
