import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import {FormContextProvider} from './context/formContext'



import "./style.scss"

import Home from "./pages/home"
import Deportes from "./pages/sports"
import Suscription from "./pages/form"






const App = () => (
  
  <FormContextProvider>
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/deportes" component={Deportes} />
      <Route path="/suscribite" component={Suscription} />
    </Switch>
  </Router>
  </FormContextProvider>
  
  
  
)

export default App


