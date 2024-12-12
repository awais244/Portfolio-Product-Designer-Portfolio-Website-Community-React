import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Desktop2 from './views/desktop2'
import Portfolio from './views/portfolio'
import Resume from './views/resume'
import AboutMe from './views/about-me'
import MainPage from './views/main-page'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Desktop2} exact path="/desktop2" />
        <Route component={Portfolio} exact path="/portfolio" />
        <Route component={Resume} exact path="/resume" />
        <Route component={AboutMe} exact path="/about-me" />
        <Route component={MainPage} exact path="/" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
