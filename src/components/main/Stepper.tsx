'use client';

import React from 'react';

// type Step = {
//   title: string;
//   description?: string;
// };

type StepperProps = {
  // steps?: Step[];
  currentStep: number;
  onStepChange: (step: number) => void;
};

const Stepper: React.FC<StepperProps> = ({ currentStep, onStepChange }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-between w-full max-w-[350px] sm:max-w-4xl relative">
        {Array(4).fill(0).map((_, index) => {
          const isCompleted = index + 1 < currentStep;
          const isActive = index + 1 === currentStep;
          const isClickable = index + 1 <= currentStep;

          return (
            <div key={index} className="flex-1 flex flex-col items-center w-28 md:w-32 relative ">
              <button
                onClick={() => {
                  if (isClickable) {
                    onStepChange(index+1);
                  }
                }}
                disabled={!isClickable}
                className={`
                  w-8 h-8 rounded-full flex items-center justify-center border-2 z-20
                  ${isCompleted || isActive ? 'bg-red-500 text-white border-red-500' : 'bg-white text-gray-400 border-gray-300'}
                  ${isClickable ? 'cursor-pointer' : 'cursor-not-allowed'}
                `}
              >
                {isCompleted ? '✓' : index + 1}
              </button>
              <div className="text-center mt-2">
                {/* <div className="font-semibold text-sm">{step.title}</div> */}
                {/* <div className="text-gray-500 text-sm">{step.description}</div> */}
              </div>
              {index !== 3 && (
                <div
                  className={`
                    absolute top-4 left-0 z-10 w-full h-0.5
                    ${index+1 < currentStep ? 'bg-red-500' : 'bg-gray-200'}
                  `}
                  style={{ transform: 'translateX(50%)' }}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Stepper;
