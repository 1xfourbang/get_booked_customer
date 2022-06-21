import React from 'react'
import { useForm } from 'react-hook-form'
import { InputElement } from '../components/Form'
import PageLayouts from '../layouts/PageLayouts'

const Signup = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'all',
    defaultValues: {
      restname: '',
      restlocation: '',
      name: '',
      phone: '',
      besttime: '',
    },
  })

  const onSubmit = (data) => {
    console.log(data)
  }

  const onSubmitError = (error) => {
    console.log(error)
  }

  return (
    <PageLayouts>
      <div className="py-10 signup-page md:py-16 xl:py-24">
        <div className="max-w-[1240px] px-4 md:px-8 mx-auto">
          <h2 className="text-black text-7 md:text-10 font-avenir-bold">
            Restaurant Sign Up
          </h2>
          <form onSubmit={handleSubmit(onSubmit, onSubmitError)}>
            <div className="grid grid-cols-1 gap-0 md:grid-cols-2 md:gap-12 lg:gap-[100px] xl:gap-[200px] mt-8">
              <div>
                <div className="mb-8 form-wrapper">
                  <div className="mb-8 md:mb-5">
                    <InputElement
                      name="restname"
                      control={control}
                      errors={errors}
                      label="Restaurant Name"
                      rules={{
                        required: `Restaurant Name is required`,
                      }}
                    />
                  </div>
                  <div className="mb-8 md:mb-5">
                    <InputElement
                      name="restlocation"
                      control={control}
                      errors={errors}
                      label="Restaurant Location"
                      rules={{
                        required: 'Restaurant Location is required',
                      }}
                    />
                  </div>
                  <div className="mb-8 md:mb-5">
                    <InputElement
                      name="name"
                      control={control}
                      errors={errors}
                      label="Name"
                      rules={{
                        required: 'Name is required',
                      }}
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className="mb-8 form-wrapper">
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
                      name="besttime"
                      control={control}
                      errors={errors}
                      label="Best time to call you back"
                      rules={{
                        required: 'Best time to call you back is required',
                      }}
                    />
                  </div>
                </div>

                <div className="mt-12 text-right">
                  <button
                    type="submit"
                    className="font-avenir-medium text-base leading-5 border border-primary rounded-full h-11 md:max-w-[180px] w-full bg-primary text-white px-3"
                  >
                    Sign up
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

export default Signup
