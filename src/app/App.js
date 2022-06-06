import React from 'react'
import { BrowserRouter, Route, Switch, Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import PublicRoutes from './routes/PublicRoutes'

const history = createBrowserHistory()

const App = () => {
  return (
    <Router history={history}>
      <BrowserRouter>
        <Switch>
          <Route>
            <PublicRoutes />
          </Route>
        </Switch>
      </BrowserRouter>
    </Router>
  )
}

export default App
