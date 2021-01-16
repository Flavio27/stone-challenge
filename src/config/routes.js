import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../pages/home'
import List from '../pages/list'
import NotFound from '../pages/notFound'

export const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/list" component={List} />
      <Route path="/list" component={List} />
      <Route component={NotFound} />
      
    </Switch>
  )
}
