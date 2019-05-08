import React, { Component } from 'react';
import '../style.css';
import API from "../utils/API";
import './navbar.js'

class BrewerySearch extends Component {


    state = {
        searchTerm: "",
        beers: []
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };





    handleFormSubmit = event => {
        event.preventDefault();
        console.log('clicked', this.state.searchTerm)
        API.getBreweries(this.state.searchTerm)
        .then(res => {
            this.setState({
                searchTerm: "",
                beers: res.data.data
            })
        console.log(this.state.beers)
        // console.log(this.state.data.data)
        })
        .catch(err => console.log(err))      
    };

    render() {
        return (
            
            <div>
                
            <div>
            {this.state.beers.map(beer => (
                <div className="beer">
                <h1>{beer.name}</h1>
                <p>{beer.description && beer.style ? beer.description : "Sorry, no Description Available"}</p>
                {/* <p>{!beer.description ? beer.style.description : !beer.style.description ? "Sorry, no description available" : beer.style.description}</p> */}
                <img src={beer.labels ? beer.labels.medium : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuwMCypIe9DkjGbhGVVJtx9cFy99HdlAB_A6-jT4esR3DtJbaL"} alt="img" />
               
            </div>
            
             ) )}
                </div>
                <div className="jumbotron">
                    <div className="row">
                        <div className="col-6">
                            <h3 className="text-left">What type of beer do you like?</h3>
                            <h4 className="text-left">We will try to match you with some beer you may enjoy.</h4>
                        </div>
                        <div className="col-6">
                        <form>
                            <input value={this.state.searchTerm} onChange={this.handleInputChange} name="searchTerm"
                                placeholder="Enter Beer Type" />
                            <button type="button" className="beerMe btn btn-dark" id="search-button"  onClick={this.handleFormSubmit}>Beer Me!</button>
                           
                        </form>
                        <form action="/guest">
                            <button type="submit">Back to Search</button>
                        </form>
                        </div>
                    </div>
                </div>
                 
                </div>
                )
    }}

    export default BrewerySearch;
                
                
             
            
        
    

    