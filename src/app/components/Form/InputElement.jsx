import React from 'react'
import { Controller } from 'react-hook-form'

const InputElement = ({
  name,
  control,
  type = 'text',
  customWidth,
  label,
  errors,
  ...props
}) => {
  console.log('>>>>> component errors: ', errors)
  return (
    <Controller
      {...props}
      name={name}
      control={control}
      render={({ field: { value, onChange }, fieldState: { error } }) => (
        <div className="flex items-center">
          <label htmlFor="datepicker">{label}</label>
          <input
            type={type}
            name={name}
            id={name}
            value={value}
            onChange={onChange}
            className={`px-3 ml-4 leading-5 border rounded h-14 border-grey-dark text-5 ${
              customWidth ? customWidth : 'min-w-[220px]'
            }  w-full`}
          />
        </div>
      )}
    />
  )
}

export default InputElement
