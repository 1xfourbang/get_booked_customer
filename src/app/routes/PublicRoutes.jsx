import React, { Suspense, lazy } from 'react'
import { Route, Switch } from 'react-router-dom'
import Loading from '../components/Loading'
import { BookingContextProvider } from '../context/BookingContext'

// eslint-disable-next-line
const PublicRoutes = () => {
  const HomeWrapper = lazy(() => import('../pages/Home'))
  const SearchWrapper = lazy(() => import('../pages/Search'))
  const NotFound = lazy(() => import('../pages/NotFound'))

  return (
    <BookingContextProvider>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route path="/" exact component={HomeWrapper} />
          <Route path="/search/:id" exact component={SearchWrapper} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </BookingContextProvider>
  )
}

export default PublicRoutes
