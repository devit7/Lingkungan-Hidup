import React from "react"
import {Switch, Route} from "react-router-dom"
import Nav from"./component/nav"
import Beranda from "./page/beranda"
class App extends React.Component{
  render(){
      return(
          <div>
              <Nav />
              <Switch>
                  <Route exact path="/" component={Beranda} />
              </Switch>
          </div>
      )
  }
}

export default App;
