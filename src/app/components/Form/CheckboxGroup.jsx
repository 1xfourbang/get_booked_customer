import React from 'react'
import uuid from 'react-uuid'
import { CheckboxElement } from './CheckboxElement'

const CheckboxGroup = ({ times }) => {
  return (
    <>
      {times.length > 0 ? (
        times.map((time) => {
          const index = uuid()
          return <CheckboxElement time={time} index={index} key={index} />
        })
      ) : (
        <p className="font-avenir-medium text-5 text-red-primary">
          Times not available within two hours of your selected booking.
        </p>
      )}
    </>
  )
}

export { CheckboxGroup }
