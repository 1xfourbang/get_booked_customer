import React, { useContext, createContext, useState, useMemo } from 'react'

const BookingContext = createContext()

function BookingContextProvider({ children }) {
  const [booking, setBooking] = useState(null)
  const value = useMemo(() => ({ booking, setBooking }), [booking])

  return (
    <BookingContext.Provider value={value}>{children}</BookingContext.Provider>
  )
}

function useBooking() {
  const context = useContext(BookingContext)

  if (context === undefined) {
    throw new Error('useAuth must be used within a AuthProvider')
  }

  return context
}

export { BookingContextProvider, useBooking }