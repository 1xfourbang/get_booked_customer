import React from 'react'
import { Controller } from 'react-hook-form'

const InputElement = ({
  name,
  control,
  type = 'text',
  label,
  input,
  errors,
  ...props
}) => {
  return (
    <Controller
      {...props}
      name={name}
      control={control}
      render={({ field: { value, onChange }, fieldState: { error } }) => (
        <div className="flex flex-col items-start">
          <label className="hidden mb-2 md:block">{label}</label>
          {input ? (
            <textarea
              name={name}
              id={name}
              cols="20"
              rows="6"
              onChange={onChange}
              value={value}
              placeholder={label}
              className="w-full p-3 text-black border-0 focus:outline-none bg-grey-lighter placeholder:text-grey-placeholder md:placeholder:text-grey-lighter"
            ></textarea>
          ) : (
            <input
              type={type}
              name={name}
              id={name}
              placeholder={label}
              value={value}
              onChange={onChange}
              className="w-full p-3 border-0 focus:outline-none bg-grey-lighter h-11 placeholder:text-grey-placeholder md:placeholder:text-grey-lighter"
            />
          )}
        </div>
      )}
    />
  )
}

export { InputElement }
