import React from 'react'
import { Controller } from 'react-hook-form'

const DateTimePicker = ({
  name,
  control,
  type = 'text',
  customWidth,
  customHeight,
  label,
  errors,
  ...props
}) => {
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
            className={`custom px-3 ml-3 leading-5 border rounded ${
              customHeight ? customHeight : 'h-14'
            } border-grey-dark text-5 ${
              customWidth ? customWidth : 'min-w-[220px]'
            }  w-full`}
          />
        </div>
      )}
    />
  )
}

export { DateTimePicker }
