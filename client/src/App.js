import React, { Component } from 'react';
import axios from 'axios'
import { Route, Link, Switch, Redirect, BrowserRouter as Router } from 'react-router-dom'

   
// components
import Signup from './components/sign-up'
import LoginForm from './components/login-form'
import Navbar from './components/navbar'
import Guest from './components/guest'
import TheFridge from './components/BeerFridge/BeerList/index'

class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      username: null
    }

    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

  componentDidMount() {
    this.getUser()
  }

  updateUser (userObject) {
    this.setState(userObject)
  }

  getUser() {
    axios.get('/api/user').then(response => {
      console.log('Get user response: ')
      console.log(response.data)
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ')

        this.setState({
          loggedIn: true,
          username: response.data.user.username
        })
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          username: null
        })
      }
    })
    .catch(()=> 
    console.log("getUser not firing"))
  }

  render() {
    return (
      <div className="App">
   
        <Navbar updateUser={this.updateUser} loggedIn={this.state.username} />
        {/* greet user if logged in: */}
        {/* {this.state.loggedIn ?
          <p>{`This is your fridge, ${this.state.username}!`}</p>
          : <p>Please log in</p>
        } */}
        {/* Routes to different components */}
        
        <Route
          path="/login"
          render={() =>
            <LoginForm
              updateUser={this.updateUser}
            />}
        />
        <Route
          path="/signup"
          render={() =>
            <Signup/>}
        />
        <Route
          path="/guest"
          render={() =>
            <Guest/>}
        />
        <Route
          path="/BeerFridge"
          render={() =>
            <TheFridge/>
              
            
              }
        />
      </div>
    );
  }
}


export default App;