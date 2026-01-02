import Image from 'next/image'
import React from 'react'

const AppCTASection = () => {
  return (
<div className="w-1/2 flex flex-col justify-center gap-3 h-full ">
        {/* image */}
        <div className="flex-[0.6] w-full border relative border-black">
            <Image
            src={"/temp/temp.webp"}
            fill
            alt='download'
            
             />
        </div>
        {/* content */}
        <div className="flex-[0.6] max-w-[495px] w-full flex flex-col gap-3 py-3">
          <span className="font-normal text-[18px] leading-[24px] text-[#13400f] font-Helvetica">
            The Factor App
          </span>
          <h1 className="font-semibold text-[40px] text-[#333] w-full">
            Meals at Your Fingertips
          </h1>
          <span className="font-normal text-[16px] leading-[24px] text-black font-Helvetica">
            With our app you can view menus, select meals, and see your
            scheduled deliveries.
          </span>
          <div className="w-full flex sm:flex-row flex-col gap-3">
            <div className="w-32 h-10 relative">
            <Image
              src="/temp/appstore-badge-en.png"
              alt="appstore"
              fill
              sizes='120px'
              className="object-contain"
            />
            </div>
           <div className="w-32 h-10 relative">
            <Image
              src="/temp/playstore-badge-en.png"
              alt="appstore"
              fill
              className="object-contain"
              sizes="120px"
            />
            </div>
          </div>
        </div>
      </div>
  )
}

export default AppCTASection