import React from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import Home from '../pages/home'
import List from '../pages/list'
import { history } from './history'

const Routes = () => (
  <Router history={history}>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/list" exact component={List} />
    </Switch>
  </Router>
)

  export default Routes