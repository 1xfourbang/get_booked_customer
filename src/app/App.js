import React from 'react'
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom'
import Home from './pages/Home'
import RestaurantsList from './pages/RestaurantList'
import Search from './pages/Search'
import NotFound from './pages/NotFound'
import { useBooking } from './context/BookingContext'
import RestaurantsDetails from './pages/RestaurantDetails'
import BookNow from './pages/BookNow'
import Signup from './pages/Signup'
import BookSuccess from './pages/BookSuccess'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="signup" element={<Signup />} />
        <Route path="search/:id" element={<Search />} />
        <Route
          path="lists/:id"
          element={
            <RequireBooking>
              <RestaurantsList />
            </RequireBooking>
          }
        />
        <Route
          path="lists/:id/details"
          element={
            <RequireBooking>
              <RestaurantsDetails />
            </RequireBooking>
          }
        />
        <Route
          path="book/:id/"
          element={
            <RequireBooking>
              <BookNow />
            </RequireBooking>
          }
        />
        <Route
          path="book/:id/success"
          element={
            <RequireBooking>
              <BookSuccess />
            </RequireBooking>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

function RequireBooking({ children }) {
  const { booking } = useBooking()
  let location = useLocation()

  if (!booking?.booking_date || !location.pathname.includes(booking?.pageId)) {
    return <Navigate to="/" state={{ from: location }} replace />
  }

  return children
}

export default App
