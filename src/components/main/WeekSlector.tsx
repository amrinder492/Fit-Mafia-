import React from "react";
import { format, startOfWeek, addWeeks, endOfWeek } from "date-fns";

const WeekSelector = () => {
  // Get 3 weeks: current, next, week after next
  const getWeekRange = (weekOffset = 0) => {
    const now = new Date();
    const weekStart = startOfWeek(addWeeks(now, weekOffset), { weekStartsOn: 1 }); // Monday start
    const weekEnd = endOfWeek(addWeeks(now, weekOffset), { weekStartsOn: 1 }); // Sunday end

    const month = format(weekStart, "MMM").toLowerCase(); // e.g., "apr"
    const range = `${format(weekStart, "d")}-${format(weekEnd, "d")}`;

    return { month, range };
  };

  const weeks = [0, 1, 2].map(getWeekRange); // current, next, week after next

  return (
    <div className="flex items-center justify-center w-full gap-2 py-2">
      {weeks.map((week, index) => (
        <button
          key={index}
          className={`p-2 rounded-lg cursor-pointer w-fit hover:bg-fit-red hover:text-white  ${index === 0 && 'bg-fit-red text-white'}`}
        >
          <h5 className="capitalize">{week.month}</h5>
          <h5>{week.range}</h5>
        </button>
      ))}
    </div>
  );
};

export default WeekSelector;
