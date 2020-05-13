import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import EventDetails from './components/events/EventDetails'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import CreateEvent from './components/events/CreateEvent'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path='/' component={Dashboard} exact={true}/>
            <Route path='/event/:id' component={EventDetails} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/create' component={CreateEvent} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
