import React, { Suspense, lazy } from 'react'
import { Route, Switch } from 'react-router-dom'
import Loading from '../components/Loading'

// eslint-disable-next-line
const PublicRoutes = () => {
  const HomeWrapper = lazy(() => import('../pages/home'))

  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route path="/" exact component={HomeWrapper} />
      </Switch>
    </Suspense>
  )
}

export default PublicRoutes
