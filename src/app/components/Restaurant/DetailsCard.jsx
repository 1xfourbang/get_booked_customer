import React from 'react'
import { useNavigate } from 'react-router-dom'
import uuid from 'react-uuid'

// Placeholder image
import image from '../../../assets/images/image.png'
import { CheckboxGroup } from '../Form'

const DetailsCard = ({ restName, times }) => {
  const navigate = useNavigate()

  const gotoDetails = (e) => {
    navigate(`/lists/${restName}/details?restId=${uuid()}`, {
      state: { restName, times },
    })
  }

  return (
    <div className="item">
      <div className="md:border border-grey-darker">
        <div className="flex flex-col md:flex-row items-center md:items-start md:min-h-[331px]">
          <div className="image-wrapper max-w-[400px] sm:max-w-[331px] w-full">
            <img
              src={image}
              className="object-cover w-full h-[331px]"
              alt="restaurant-img"
            />
          </div>
          <div className="flex-grow p-3 text-center md:p-6 content-wrapper md:text-left">
            <h4
              className="font-avenir-bold text-6.75 text-black hover:underline cursor-pointer inline-block"
              onClick={gotoDetails}
            >
              Restaurant
            </h4>
            <p className="text-black text-5 font-avenir-medium">
              Irish •{' '}
              <span className="inline-block first-letter:uppercase">
                {restName}
              </span>
            </p>
            <div className="my-5 time-slots">
              <CheckboxGroup times={times} />
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
