import React, { Component } from 'react';
import '../style.css';
import API from "../utils/API";

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
                <p>{beer.description}</p> 
                <p>{beer.style.description}</p>
                
            </div>
            
             ) )}
               // </div>
                <div className="jumbotron">
                    <div className="row">
                        <div className="col-6">
                            <h3 className="text-left">What type of beer do you like?</h3>
                            <h4 className="text-left">We will try to match you with some beer you may enjoy.</h4>
                        </div>
                        <div className="col-6">
                        <form>
                            <input value={this.state.searchTerm} onChange={this.handleInputChange} name="searchTerm"
                                placeholder="What typr of Beer?" />
                            <button type="button" className="beerMe btn btn-light" id="search-button"  onClick={this.handleFormSubmit}>Beer Me!</button>
                        </form>
                        </div>
                    </div>
                </div>

                <div className="row" id="brews-container">
                    <div className="container text-center my-3">
                        <div className="row mx-auto my-auto">
                            <div id="recipeCarousel" className="carousel slide w-100" data-ride="carousel">
                                <div className="carousel-inner w-100" id="brews-carousel" role="listbox">
                                </div>
                                <a className="carousel-control-prev" href="#recipeCarousel" role="button"
                                    data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#recipeCarousel" role="button"
                                    data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        )
    }}

    export default BrewerySearch;