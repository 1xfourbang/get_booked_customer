import React from 'react'
import { Controller } from 'react-hook-form'

const SelectElement = ({
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
    <>
      <Controller
        {...props}
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => {
          return (
            <div className="flex items-center">
              <label htmlFor="booking_party">{label}</label>
              <select
                name="booking_party"
                id="booking_party"
                value={value}
                onChange={onChange}
                type={type}
                className={`px-3 ml-3 leading-5 border rounded ${
                  customHeight ? customHeight : 'h-14'
                } border-grey-dark text-5 ${
                  customWidth ? customWidth : 'min-w-[220px]'
                }  w-full`}
              >
                <option value="-1" disabled>
                  Party
                </option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
          )
        }}
      />
    </>
  )
}

export { SelectElement }
