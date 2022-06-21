import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { DateTimePicker, SelectElement } from '.'
import { useBooking } from '../../context/BookingContext'
import { Calendar, Times, Users } from '../Icons'

const CustomForm = ({ onSubmit, onSubmitError, wrapperClass }) => {
  const { booking } = useBooking()
  const navigate = useNavigate()

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

  return (
    <>
      <div className="hidden md:block">
        <form onSubmit={handleSubmit(onSubmit, onSubmitError)}>
          <div
            className={`flex flex-col flex-wrap items-center ${
              wrapperClass ? wrapperClass : 'justify-start'
            } -mx-3 md:flex-row`}
          >
            <div className="mx-2 mb-2 lg:mx-3">
              <DateTimePicker
                rules={{
                  required: `Date is required`,
                }}
                name="booking_date"
                type="date"
                control={control}
                label={<Calendar />}
                customWidth="max-w-[170px]"
                customHeight="h-11"
                errors={errors}
              />
            </div>
            <div className="mx-2 mb-2 lg:mx-3">
              <DateTimePicker
                rules={{
                  required: `Time is required`,
                }}
                name="booking_time"
                type="time"
                control={control}
                customWidth="max-w-[120px]"
                customHeight="h-11"
                label={<Times />}
                errors={errors}
              />
            </div>
            <div className="mx-2 mb-2 lg:mx-3">
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
                customWidth="min-w-[5rem] lg:min-w-[60px]"
                customHeight="h-11"
                label={<Users />}
                errors={errors}
              />
            </div>
            <div className="mx-2 mb-2 lg:mx-3">
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
      <div
        className={`flex items-center ${
          wrapperClass ? wrapperClass : 'justify-start'
        } md:hidden`}
      >
        <div className="flex items-center">
          <label>
            <Calendar className={`w-5 h-5`} />
          </label>
          <p className={`ml-2 leading-4 rounded text-3 w-full`}>
            {booking.booking_date}
          </p>
        </div>
        <div className="flex items-center ml-4">
          <label>
            <Times className={`w-5 h-5`} />
          </label>
          <p className={`ml-2 leading-4 rounded text-3 w-full`}>
            {booking.booking_time}
          </p>
        </div>
        <div className="flex items-center ml-4">
          <label>
            <Users className={`w-5 h-5`} />
          </label>
          <p className={`ml-2 leading-4 rounded text-3 w-full`}>
            {booking.booking_party}
          </p>
        </div>
        <button
          type="button"
          className="font-avenir-medium text-4 leading-4 ml-4 border border-black rounded-full h-8 max-w-[100px] text-black bg-white px-5"
          onClick={() => navigate(`/search/${booking.pageId}`)}
        >
          Edit
        </button>
      </div>
    </>
  )
}

export { CustomForm }
