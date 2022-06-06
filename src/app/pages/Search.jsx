import React from 'react'
import { useParams } from 'react-router-dom'
import PageLayouts from '../layouts/PageLayouts'
import { Calendar, Times, Users } from '../components/Icons'
import '../../assets/styles/custom.css'

const Search = () => {
  const { id } = useParams()

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <PageLayouts pageId={id} isSignup={false}>
      <div className="flex justify-center flex-grow sm:items-center">
        <div className="search-form-wrapper md:max-w-[840px] w-full mx-auto p-5 pt-10 sm:p-10 bg-white sm:shadow-light">
          <p className="font-avenir-regular text-5 sm:text-6.25 text-center sm:text-left">
            Select booking details
          </p>
          <div className="booking-details-form">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-wrap items-center justify-center my-10 -mx-6 sm:justify-between md:my-13">
                <div className="flex items-center mx-6 mb-5">
                  <label htmlFor="datepicker">
                    <Calendar />
                  </label>
                  <input
                    type="date"
                    name="booking-date"
                    id="datepicker"
                    className="px-3 ml-4 leading-5 border rounded h-14 border-grey-dark text-5 min-w-[220px] w-full"
                  />
                </div>
                <div className="flex items-center mx-6 mb-5">
                  <label htmlFor="timepicker">
                    <Times />
                  </label>
                  <input
                    type="time"
                    name="booking-time"
                    id="timepicker"
                    className="px-3 ml-4 leading-5 border rounded h-14 border-grey-dark text-5 min-w-[220px] sm:min-w-[150px] w-full"
                  />
                </div>
                <div className="flex items-center mx-6 mb-5">
                  <label htmlFor="booking-party">
                    <Users />
                  </label>
                  <select
                    type="party"
                    name="booking-party"
                    id="booking-party"
                    defaultChecked="-1"
                    className="px-3 ml-4 leading-5 border rounded h-14 border-grey-dark text-5 min-w-[220px] sm:min-w-[150px] w-full"
                  >
                    <option value="-1">Party</option>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
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
