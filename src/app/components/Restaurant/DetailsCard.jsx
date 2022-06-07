import React from 'react'
import { useNavigate } from 'react-router-dom'
import uuid from 'react-uuid'

// Placeholder image
import image from '../../../assets/images/image.png'

const DetailsCard = ({ restName, times }) => {
  const navigate = useNavigate()

  const gotoDetails = (e) => {
    navigate(`/lists/${restName}/details?restId=${uuid()}`, {
      state: { restName, times },
    })
  }

  return (
    <div className="item">
      <div className="border border-grey-darker">
        <div className="flex md:max-h-[331px]">
          <div className="image-wrapper md:max-w-[331px]">
            <img src={image} className="object-cover w-full" />
          </div>
          <div className="flex-grow p-6 content-wrapper">
            <h4
              className="font-avenir-bold text-6.75 text-black hover:underline cursor-pointer w-fit"
              onClick={gotoDetails}
            >
              Restaurant
            </h4>
            <p className="text-black text-5 font-avenir-medium">
              Irish • {restName}
            </p>
            <div className="my-5 time-slots">
              {times.length > 0 ? (
                times.map((time) => {
                  const index = uuid()
                  return (
                    <div className="inline-block" key={index}>
                      <input
                        type="checkbox"
                        name="time-slots"
                        id={`time-slot-${index}`}
                        className="hidden"
                      />
                      <label
                        htmlFor={`time-slot-${index}`}
                        className="bg-blue-primary w-[100px] h-10 text-3.75 text-white inline-block py-3 text-center rounded mr-2 mb-2 transition-all duration-100"
                      >
                        {time}
                      </label>
                    </div>
                  )
                })
              ) : (
                <p className="font-avenir-medium text-5 text-red-primary">
                  Times not available within two hours of your selected booking.
                </p>
              )}
            </div>
            <p className="mt-2 text-base leading-5 font-avenir-regular text-grey-dark">
              View more times for (selected day)
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export { DetailsCard }
