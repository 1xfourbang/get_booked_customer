import React from 'react'
import PageLayouts from '../layouts/PageLayouts'
import { useBooking } from '../context/BookingContext'

const BookSuccess = () => {
  const { booking } = useBooking()

  return (
    <PageLayouts pageId={booking.pageId}>
      <div className="px-3 py-10 booking-success-page md:py-16 xl:py-24 md:px-6">
        <h2 className="text-3xl lg:text-12.5 font-avenir-medium text-center mb-8">
          Booking and payment successful!
        </h2>
        <div className="max-w-[640px] w-full mx-auto p-2 sm:p-5 md:p-8 bg-white shadow-light">
          <h2 className="text-5 sm:text-2xl md:text-4xl font-avenir-bold">
            An Port Mor Restaurant
          </h2>
          <p className="text-black text-4.5 md:text-5 font-avenir-medium max-w-[486px] my-5">
            1 Brewery Place, (Adjacent to Bridge Street), Westport, Co. Mayo,
            F28 KP70, Ireland
          </p>
          <p className="mb-1 text-black text-5 font-avenir-bold">Party of 2</p>
          <p className="mb-1 text-black text-5 font-avenir-bold">
            Wednesday, Dec 1
          </p>
          <p className="mb-1 text-black text-5 font-avenir-bold">2:00 PM</p>
        </div>
      </div>
    </PageLayouts>
  )
}

export default BookSuccess
