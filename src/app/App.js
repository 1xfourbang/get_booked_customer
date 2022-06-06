import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { BookingContextProvider } from './context/BookingContext'
import Home from './pages/Home'
import RestaurantsList from './pages/RestaurantList'
import Search from './pages/Search'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <BookingContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="search/:id" element={<Search />} />
          <Route path="lists" element={<RestaurantsList />}>
            <Route path=":id" element={<RestaurantsList />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </BookingContextProvider>
  )
}

export default App
