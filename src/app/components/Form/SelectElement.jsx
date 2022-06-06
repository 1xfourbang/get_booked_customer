import React from 'react'
import { Controller } from 'react-hook-form'

export default function SelectElement({
  name,
  control,
  type = 'text',
  customWidth,
  label,
  errors,
  ...props
}) {
  return (
    <>
      <Controller
        {...props}
        name={name}
        control={control}
        render={({ field: { onChange } }) => {
          return (
            <div className="flex items-center">
              <label htmlFor="booking_party">{label}</label>
              <select
                name="booking_party"
                id="booking_party"
                defaultValue="-1"
                onChange={onChange}
                type={type}
                className={`px-3 ml-4 leading-5 border rounded h-14 border-grey-dark text-5 ${
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
