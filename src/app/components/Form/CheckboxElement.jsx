import React from 'react'

const CheckboxElement = ({ index, time }) => {
  return (
    <div className="inline-block">
      <input
        type="checkbox"
        name="time-slots"
        id={`time-slot-${index}`}
        className="hidden"
      />
      <label
        htmlFor={`time-slot-${index}`}
        className="bg-blue-primary w-[60px] md:w-[100px] h-8 md:h-10 text-3 md:text-3.75 text-white inline-block py-3 text-center rounded mr-2 mb-2 transition-all duration-100"
      >
        {time}
      </label>
    </div>
  )
}

export { CheckboxElement }
