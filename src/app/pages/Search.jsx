import React from 'react'
import { useParams } from 'react-router-dom'
import PageLayouts from '../layouts/PageLayouts'
import { Calendar, Times, Users } from '../components/Icons'
import '../../assets/styles/custom.css'
import { useForm } from 'react-hook-form'
import InputElement from '../components/Form/InputElement'
import SelectElement from '../components/Form/SelectElement'

const Search = () => {
  const { id } = useParams()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'all',
    defaultValues: {
      booking_date: '',
      booking_time: '',
      booking_party: '-1',
    },
  })

  const onSubmit = (data) => {
    console.log('>>>>>> onSubmit: ', data)
  }

  const onSubmitError = (error) => {
    console.log('>>>>>> onSubmitError: ', error)
  }

  return (
    <PageLayouts pageId={id} isSignup={false} isFooter={false}>
      <div className="flex justify-center flex-grow sm:items-center">
        <div className="search-form-wrapper md:max-w-[840px] w-full mx-auto p-5 pt-10 sm:p-10 bg-white sm:shadow-light">
          <p className="font-avenir-regular text-5 sm:text-6.25 text-center sm:text-left">
            Select booking details
          </p>
          <div className="booking-details-form">
            <form onSubmit={handleSubmit(onSubmit, onSubmitError)}>
              <div className="flex flex-wrap items-center justify-center my-10 -mx-6 sm:justify-between md:my-13">
                <div className="mx-6 mb-5">
                  <InputElement
                    rules={{
                      required: `Date is required`,
                    }}
                    name="booking_date"
                    type="date"
                    control={control}
                    label={<Calendar />}
                    errors={errors}
                  />
                </div>
                <div className="mx-6 mb-5">
                  <InputElement
                    rules={{
                      required: `Time is required`,
                    }}
                    name="booking_time"
                    type="time"
                    control={control}
                    customWidth="min-w-[220px] sm:min-w-[150px]"
                    label={<Times />}
                    errors={errors}
                  />
                </div>
                <div className="mx-6 mb-5">
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
                    customWidth="min-w-[220px] sm:min-w-[150px]"
                    label={<Users />}
                    errors={errors}
                  />
                </div>
              </div>

              <div className="w-full text-center">
                <button
                  type="submit"
                  className="font-avenir-medium text-5 leading-5 border border-primary rounded-full sm:rounded h-13 sm:h-11 sm:max-w-[180px] w-full bg-primary sm:bg-white text-white sm:text-primary"
                >
                  Find available
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </PageLayouts>
  )
}

export default Search
