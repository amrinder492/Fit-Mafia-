import React from 'react'

const ContactUsCard = ({title, description, buttonText}: {title: string, description: string, buttonText: string}) => {
  return (
    <div className="w-full relative min-h-[400px] lg:min-h-[600px] bg-[url('/images/food-main.avif')] bg-cover bg-center flex justify-center mt-20 lg:mt-40 ">
        <div className="flex flex-col items-center mx-6 lg:mx-12 px-4 lg:px-12 absolute top-[-80px] bg-white gap-3 lg:gap-6 py-5 lg:py-10 border-gray-200 rounded-sm">
          <h1 className="text-[#000] font-Arial Black text-lg lg:text-4xl font-bold  text-center lg:pt-8">
            {title}
          </h1>
          <span className="text-[#4b4d4c] text-center">
           {description}
          </span>
          <button
            // type="submit"
            className="px-6 py-3 text-white border rounded-lg bg-fit-red"
          >
            {buttonText}
          </button>
        </div>
      </div>
  )
}

export default ContactUsCard