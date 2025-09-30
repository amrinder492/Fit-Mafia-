"use client"

// import { ClassNames } from "@emotion/react";
import React from "react";

const FaqCard = ({ title, fc, className}:
  {title:string, fc: ()=>void, className: string}) => {
    return (
      <button onClick={()=> fc()} className={`flex items-center border border-gray-200 w-full lg:max-w-[260px] rounded-md min-h-[120px] bg-white gap-6 shadow-md  ${ className}`}>
        <div className="w-full flex flex-col gap-6 items-center">
          {/* <img src={img} alt={imgTitle} className="w-16 h-16"/> */}
          <h4 className="text-[#4b4d4c] text-[20px] font-bold font-arial">{title}</h4>
        </div>
      </button>
    );
  };
  
  export default FaqCard;