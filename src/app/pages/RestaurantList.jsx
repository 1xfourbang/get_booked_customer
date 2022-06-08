import React from 'react'
import { useParams } from 'react-router-dom'
import { useBooking } from '../context/BookingContext'
import PageLayouts from '../layouts/PageLayouts'
import { CustomForm } from '../components/Form'
import { DetailsCard } from '../components/Restaurant'

const RestaurantsList = () => {
  const { id } = useParams()
  const { setBooking } = useBooking()

  const onSubmit = (data) => {
    setBooking({ ...data, pageId: id })
  }

  const onSubmitError = (error) => {
    console.log('>>>>>> onSubmitError: ', error)
  }

  return (
    <PageLayouts pageId={id}>
      <div>
        <div className="py-4 border lists-header md:py-8 border-grey-medium">
          <div className="px-3 form-wrapper">
            <CustomForm
              onSubmit={onSubmit}
              onSubmitError={onSubmitError}
              wrapperClass="justify-center"
            />
          </div>
        </div>

        <div className="lists-body">
          <div className="max-w-[1080px] px-4 mx-auto">
            <div className="grid grid-cols-1 my-8 gap-y-8 md:gap-y-16 sm:my-12 md:my-24">
              <DetailsCard
                restName={id}
                times={[
                  '1:15 PM',
                  '1:30 PM',
                  '1:45 PM',
                  '2 PM',
                  '2:30 PM',
                  '3 PM',
                ]}
              />
              <DetailsCard restName={id} times={[]} />
              <DetailsCard
                restName={id}
                times={['1:15 PM', '1:30 PM', '1:45 PM', '2 PM']}
              />
            </div>
          </div>
        </div>
      </div>
    </PageLayouts>
  )
}

export default RestaurantsList
