import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

class fridge extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            brewery: '',
            size: '',
            qty: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
  
    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    };