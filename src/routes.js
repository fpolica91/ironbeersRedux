import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home/index'
import Beer from './pages/Beer/index'

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/beer" component={Beer} />
    </Switch>
  )
}

export default Routes
