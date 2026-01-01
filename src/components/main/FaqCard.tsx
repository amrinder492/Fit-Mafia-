"use client"
import React from "react";

const FaqCard = ({ title, icon, fc, className}:
  {title:string, icon:string, fc: ()=>void, className: string}) => {
    return (
      <button onClick={()=> fc()} className={`flex items-center border border-gray-200 w-full lg:max-w-[260px] rounded-md min-h-[120px] bg-white gap-6 shadow-md  ${ className}`}>
        <div className="w-full flex justify-center gap-2 items-center">
          <span className="text-3xl">{icon}</span>
          <h4 className="text-[#4b4d4c] text-xl font-bold font-arial">{title}</h4>
        </div>
      </button>
    );
  };
  
  export default FaqCard;