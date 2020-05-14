import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"



import "./style.scss"

import Home from "./pages/home"
import Deportes from "./pages/sports"
import Suscription from "./pages/form"

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/deportes" component={Deportes} />
      <Route path="/suscribite" component={Suscription} />
    </Switch>
  </Router>
)

export default App
