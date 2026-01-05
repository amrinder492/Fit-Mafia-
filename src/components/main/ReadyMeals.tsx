'use client'
import { addOnesData } from '@/constants/data'
import React, { useEffect, useState } from 'react'
import MealCard from './MealCard'

type Meal = {
  image: string
  title: string
  desc: string
}

const INITIAL_MEALS = 6
const LOAD_MORE_STEP = 3

const ReadyMeals = () => {
  const [showMealsCount, setShowMealsCount] = useState(INITIAL_MEALS)
  const [totalMeals, setTotalMeals] = useState<Meal[]>([])
// window.innerWidth 
  useEffect(() => {
    const meals = addOnesData.slice(0, showMealsCount)
    setTotalMeals(meals)
  }, [showMealsCount])

  return (
    <div className="flex flex-col w-full gap-4 px-4">
      <div className="flex flex-wrap items-center justify-center w-full h-full gap-3 sm:gap-5 xl:gap-8">
        {totalMeals.map((item, i) => (
          <MealCard
            key={i}
            cover
            image={item.image}
            title={item.title}
            desc={item.desc}
          />
        ))}
      </div>

        <button
          onClick={() => setShowMealsCount(showMealsCount < addOnesData.length ? prev => prev + LOAD_MORE_STEP : INITIAL_MEALS )}
          className="px-4 py-2 mx-auto text-base font-semibold border rounded-lg border-fit-red w-fit text-fit-red hover:bg-fit-red hover:text-white"
        >
         {showMealsCount < addOnesData.length ? 'Load more meals' : 'Load less meals'}
        </button>
      
    </div>
  )
}

export default ReadyMeals
