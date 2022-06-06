import React from 'react'
import { useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useBooking } from '../context/BookingContext'
import PageLayouts from '../layouts/PageLayouts'
import { SelectElement, InputElement } from '../components/Form'
import { Calendar, Times, Users } from '../components/Icons'

const RestaurantsList = () => {
  const { id } = useParams()
  const { booking, setBooking } = useBooking()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'all',
    defaultValues: {
      booking_date: booking.booking_date,
      booking_time: booking.booking_time,
      booking_party: booking.booking_party,
    },
  })

  const onSubmit = (data) => {
    setBooking(data)
  }

  const onSubmitError = (error) => {
    console.log('>>>>>> onSubmitError: ', error)
  }

  return (
    <PageLayouts pageId={id}>
      <div>
        <div className="py-4 border lists-header md:py-8 border-grey-medium">
          <div className="form-wrapper max-w-[1080px] px-4 mx-auto">
            <form onSubmit={handleSubmit(onSubmit, onSubmitError)}>
              <div className="flex flex-col flex-wrap items-center justify-center -mx-3 md:flex-row">
                <div className="mx-3">
                  <InputElement
                    rules={{
                      required: `Date is required`,
                    }}
                    name="booking_date"
                    type="date"
                    control={control}
                    label={<Calendar />}
                    customWidth="max-w-[180px]"
                    errors={errors}
                  />
                </div>
                <div className="mx-3">
                  <InputElement
                    rules={{
                      required: `Time is required`,
                    }}
                    name="booking_time"
                    type="time"
                    control={control}
                    customWidth="max-w-[140px]"
                    label={<Times />}
                    errors={errors}
                  />
                </div>
                <div className="mx-3">
                  <SelectElement
                    rules={{
                      required: `Party is required`,
                      validate: (value) =>
                        !value.length || value === '-1'
                          ? 'Party is required'
                          : true,
                    }}
                    name="booking_party"
                    type="party"
                    control={control}
                    customWidth="min-w-[5rem] lg:min-w-[100px]"
                    label={<Users />}
                    errors={errors}
                  />
                </div>
                <div className="mx-3">
                  <button
                    type="submit"
                    className="font-avenir-medium text-base leading-5 border border-primary rounded-full h-11 min-w-[140px] lg:min-w-[180px] w-full bg-primary text-white px-3"
                  >
                    Find available
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </PageLayouts>
  )
}

export default RestaurantsList
