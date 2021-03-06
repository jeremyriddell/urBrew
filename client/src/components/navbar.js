import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Route, Link } from 'react-router-dom'
import logo from '../logo.svg';
import '../App.css';
import './style.css';
import axios from 'axios'
import '../style.css'

class Navbar extends Component {
    constructor() {
        super()
        this.logout = this.logout.bind(this)
    }

    logout(event) {
        event.preventDefault()
        console.log('logging out')
        axios.post('/user/logout').then(response => {
            console.log(response.data)
            if (response.status === 200) {
                this.props.updateUser({
                    loggedIn: false,
                    username: null
                })
            }
        }).catch(error => {
            console.log('Logout error')
        })
    }

    gotoGuestPage = () => {
         window.location = "/guest"
    }

    render() {
        const loggedIn = this.props.loggedIn;
        console.log('navbar render, props: ')
        console.log(this.props);

        return (
            <div>

                <header className="navbar App-header" id="nav-container">
                    <div className="col-8" >
                        {loggedIn ? (
                            <section className="navbar-section">
                                <Link to="/login" className="btn btn-link text-secondary" onClick={this.logout}>
                                <span className="text-secondary">logout</span></Link>

                            </section>
                        ) : (
                                <section className="navbar-section">
                                   
                                    <Link  to="/Guest" className="btn btn-link text-secondary">
                                        <span className="text-secondary">Beer Search</span>
                                    </Link>
                                    <Link to="/login" className="btn btn-link text-secondary">
                                        <span className="text-secondary">login to see your fridge</span>
                                    </Link>
                                    <Link to="/signup" className="btn btn-link">
                                        <span className="text-secondary">sign up</span>
                                    </Link>
                                    
                                    
                                </section>
                            )}
                    </div>
                    <div className="col-4 col-mr-auto">
                        <div id="top-filler"></div>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeOewC-EkhJnZ1Zx26lnWZyiyFlRYs-t2xHBkHiUegVcLVBIqB" className="App-logo" alt="beer" />

                    </div>
                </header>
            </div>

        );

    }
}

export default Navbar