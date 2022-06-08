import React from 'react'
import { useNavigate } from 'react-router-dom'
import { CheckboxGroup, CustomForm } from '../components/Form'
import { useBooking } from '../context/BookingContext'
import PageLayouts from '../layouts/PageLayouts'

// Placeholder Img
import restImg from '../../assets/images/restImg.png'

const RestaurantsDetails = () => {
  const { booking, setBooking } = useBooking()
  const navigate = useNavigate()

  const onSubmit = (data) => {
    setBooking({ ...data, pageId: booking.pageId })
  }

  const onSubmitError = (error) => {
    console.log('>>>>>> onSubmitError: ', error)
  }

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
            <div className="flex flex-col items-center w-full lg:items-start lg:flex-row">
              <div className="lg:max-w-[885px] md:p-3 lg:p-8 md:shadow-card w-full">
                <h2 className="text-5 sm:text-2xl md:text-4xl lg:text-12.5">
                  An Port Mor Restaurant
                </h2>
                <div className="mt-3">
                  <p className="mb-1 text-black text-5 font-avenir-bold">
                    Irish •{' '}
                    <span className="inline-block first-letter:uppercase">
                      {booking.pageId}
                    </span>
                  </p>
                  <p className="text-black text-4.5 md:text-5 font-avenir-medium max-w-[486px]">
                    1 Brewery Place, (Adjacent to Bridge Street), Westport, Co.
                    Mayo, F28 KP70, Ireland
                  </p>
                </div>
                <div className="mt-3">
                  <p className="mb-1 text-black text-5 font-avenir-bold">
                    Hours
                  </p>
                  <p className="text-black text-4.5 md:text-5 font-avenir-medium max-w-[486px]">
                    <span className="inline-block w-full">
                      Thurs - Sat: 5pm-9pm
                    </span>
                    <span className="inline-block w-full">
                      Mon - Tues: 5pm-9pm
                    </span>
                    <span className="inline-block w-full">Closed Sat-Sun</span>
                  </p>
                </div>
                <hr className="my-5" />
                <p className="mt-2 text-base leading-5 font-avenir-regular text-grey-dark">
                  Showing times for...
                </p>
                <div className="my-5 form-wrapper">
                  <CustomForm
                    onSubmit={onSubmit}
                    onSubmitError={onSubmitError}
                  />
                </div>
                <p className="font-avenir-medium text-5 text-red-primary">
                  There are no tables available within two hours of the time you
                  requested.
                </p>
                <div className="my-5 indoor-times-box">
                  <p className="mb-2 text-black text-6.25 font-avenir-medium">
                    Indoor seating times
                  </p>
                  <CheckboxGroup
                    times={[
                      '1:15 PM',
                      '1:30 PM',
                      '1:45 PM',
                      '2:00 PM',
                      '2:30 PM',
                      '3:30 PM',
                      '3:45 PM',
                      '4:30 PM',
                    ]}
                  />
                </div>
                <div className="my-5 outdoor-times-box">
                  <p className="mb-2 text-black text-6.25 font-avenir-medium">
                    Outdoor seating times
                  </p>
                  <CheckboxGroup
                    times={['1:15 PM', '1:30 PM', '1:45 PM', '2:00 PM']}
                  />
                </div>

                {/* Book now */}
                <div className="mt-5 text-center md:mt-10">
                  <button
                    type="button"
                    className="font-avenir-medium text-4.5 leading-5 border border-primary rounded-full h-11 sm:max-w-[140px] lg:max-w-[180px] w-full text-primary bg-white px-3"
                  >
                    Book now
                  </button>
                </div>
              </div>
              <div className="flex-grow mt-8 md:px-3 lg:ml-5 md:shadow-card lg:mt-0">
                <img
                  src={restImg}
                  alt="Restaurant Img"
                  className="object-cover"
                />
                <p className="py-5 md:px-2 text-4.5 xl:text-5.5 max-w-[580px]">
                  From the freshest seafood from Clew Bay and Connemara to local
                  vegetables, artisan cheeses and meat reared on lush green
                  fields; they're all treated with the utmost respect by the
                  kitchen team. The menu changes every day but expect They like
                  to play around a little with ingredients, but they take their
                  food very seriously. Think Grilled Turbot with Sweet Cured
                  Pork Belly or Salmon and Leek Terrine. This is a true West of
                  Ireland restaurant on the Wild Atlantic Way inspired by superb
                  local produce.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayouts>
  )
}

export default RestaurantsDetails
