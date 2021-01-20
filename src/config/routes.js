import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../pages/home'
import List from '../pages/list'
import Script from '../pages/script'
import NotFound from '../pages/notFound'

export const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/list" component={List} />
      <Route path="/roteiro" component={Script} />
      <Route path="/list" component={Script} />
      <Route component={NotFound} />
    </Switch>
  )
}

