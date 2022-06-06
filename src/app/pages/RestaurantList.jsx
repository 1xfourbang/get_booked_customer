import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useBooking } from '../context/BookingContext'
import PageLayouts from '../layouts/PageLayouts'

const RestaurantsList = () => {
  const { id } = useParams()
  const { booking } = useBooking()

  useEffect(() => {
    console.log('>>>>>> booking context: ', booking)
  }, [])

  return (
    <PageLayouts>
      <div>Restaurants List {id}</div>
    </PageLayouts>
  )
}

export default RestaurantsList
