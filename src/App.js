import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import "./style.scss"

import Home from "./pages/home"
import Deportes from "./pages/sports"

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/deportes" component={Deportes} />
    </Switch>
  </Router>
)

export default App
