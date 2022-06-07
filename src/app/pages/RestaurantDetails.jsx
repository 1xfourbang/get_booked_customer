import React from 'react'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import { useBooking } from '../context/BookingContext'
import PageLayouts from '../layouts/PageLayouts'

const RestaurantsDetails = () => {
  const location = useLocation()
  const [searchParams, setSearchParams] = useSearchParams()
  const { booking } = useBooking()
  const navigate = useNavigate()

  return (
    <PageLayouts pageId={booking.pageId}>
      <div className="restaurants-detail">
        <div className="max-w-[1200px] xl:max-w-[1350px] 2xl:max-w-[1590px] mx-auto px-6">
          <div className="my-10">
            <span
              className="underline text-grey-dark text-4.5 font-avenir-medium cursor-pointer"
              onClick={() => navigate(-1)}
            >
              Back to restaurants
            </span>
          </div>
          <div className="mb-12 restaurants-content-wrapper md:mb-20 lg:mb-40">
            <div className="flex w-full"></div>
          </div>
        </div>
      </div>
    </PageLayouts>
  )
}

export default RestaurantsDetails
