import React from 'react'
import PageLayouts from '../layouts/PageLayouts'
import { useBooking } from '../context/BookingContext'
import { useForm } from 'react-hook-form'
import { InputElement } from '../components/Form'
import { validateInput } from '../../utils/validates'

const BookNow = () => {
  const { booking } = useBooking()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'all',
    defaultValues: {
      fname: '',
      lname: '',
      phone: '',
      email: '',
      message: '',
      cardname: '',
      cardnumber: '',
      expiredate: '',
      cvc: '',
      billaddr: '',
    },
  })

  const onSubmit = (data) => {
    console.log(data)
  }

  const onSubmitError = (error) => {
    console.log(error)
  }

  return (
    <PageLayouts pageId={booking.pageId}>
      <div className="py-10 booking-now-page md:py-16 xl:py-24">
        <div className="max-w-[1240px] px-4 md:px-8 mx-auto">
          <form onSubmit={handleSubmit(onSubmit, onSubmitError)}>
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12 lg:gap-[100px] xl:gap-[200px]">
              <div>
                <h2 className="text-black text-7 md:text-10 font-avenir-bold">
                  Customer Info
                </h2>
                <div className="mt-8 form-wrapper">
                  <div className="mb-8 md:mb-5">
                    <InputElement
                      name="fname"
                      control={control}
                      errors={errors}
                      label="First name"
                      rules={{
                        required: `First name is required`,
                      }}
                    />
                  </div>
                  <div className="mb-8 md:mb-5">
                    <InputElement
                      name="lname"
                      control={control}
                      errors={errors}
                      label="Last name"
                      rules={{
                        required: 'Last name is required',
                      }}
                    />
                  </div>
                  <div className="mb-8 md:mb-5">
                    <InputElement
                      name="phone"
                      control={control}
                      errors={errors}
                      label="Phone number"
                      rules={{
                        required: 'Phone number is required',
                      }}
                    />
                  </div>
                  <div className="mb-8 md:mb-5">
                    <InputElement
                      name="email"
                      control={control}
                      errors={errors}
                      label="Email Address"
                      rules={{
                        required: 'Email Address is required',
                        validate: (val) => validateInput(val, 'Email'),
                      }}
                    />
                  </div>
                  <div className="mb-8 md:mb-5">
                    <InputElement
                      name="message"
                      control={control}
                      errors={errors}
                      label="Special requests"
                      rules={{
                        required: 'Special requests is required',
                      }}
                      input="textarea"
                    />
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-black text-7 md:text-10 font-avenir-bold">
                  Deposit
                </h2>
                <p className="my-6 leading-4 text-black text-4 md:text-5 font-avenir-medium">
                  This restaurant requires payment to secure booking.
                </p>
                <div className="my-8 form-wrapper">
                  <div className="mb-8 md:mb-5">
                    <InputElement
                      name="cardname"
                      control={control}
                      errors={errors}
                      label="Name on card"
                      rules={{
                        required: 'Name on card is required',
                      }}
                    />
                  </div>
                  <div className="mb-8 md:mb-5">
                    <InputElement
                      name="cardnumber"
                      control={control}
                      errors={errors}
                      label="Card number"
                      rules={{
                        required: 'Card number is required',
                      }}
                    />
                  </div>
                  <div className="grid grid-cols-1 gap-0 md:grid-cols-2 md:gap-5">
                    <div className="mb-8 md:mb-5">
                      <InputElement
                        name="expiredate"
                        type="date"
                        control={control}
                        errors={errors}
                        label="Expiry date"
                        rules={{
                          required: 'Expiry date is required',
                        }}
                      />
                    </div>
                    <div className="mb-8 md:mb-5">
                      <InputElement
                        name="cvc"
                        control={control}
                        errors={errors}
                        label="CVC"
                        rules={{
                          required: 'CVC is required',
                        }}
                      />
                    </div>
                  </div>
                  <div className="mb-8 md:mb-5">
                    <InputElement
                      name="biiladdr"
                      control={control}
                      errors={errors}
                      label="Eircode of billing adress"
                      rules={{
                        required: 'Eircode of billing adress is required',
                      }}
                    />
                  </div>
                </div>

                <div className="mt-12 text-right">
                  <button
                    type="submit"
                    className="font-avenir-medium text-base leading-5 border border-primary rounded-full h-11 md:max-w-[180px] w-full bg-primary text-white px-3"
                  >
                    Complete Booking
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </PageLayouts>
  )
}

export default BookNow
