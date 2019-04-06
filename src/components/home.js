import React, { Component } from 'react'

class Home extends Component {
    constructor() {
        super()
    }


    render() {
        const imageStyle = {
            width: 800
        }
        return (
            <div>
                <p>Brew Home</p>
                <img style={imageStyle} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGJGxhRkUfqN4f56WXYC77eGtZCZT6pD7DSP9eaAOQUVIjSUVxCw" />
            </div>
        )
    }
}
export default Home