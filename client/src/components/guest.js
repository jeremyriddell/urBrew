import React, { Component } from 'react'
import '../style.css';
import BrewerySearch from "./BrewerySearch";

class Guest extends Component {
    
    render() {
        return (
            
            
                
     

                <div className="container-fluid">
                    {/* <div className="jumbotron">
                        <div className="row">
                            <div className="col-6">
                                <h3 className="text-left">What type of beer do you like?</h3>
                                <h4 className="text-left">We will try to match you with some beer you may enjoy.</h4>
                            </div>
                            <div className="col-6">
                                <input className="form-control form-control-lg" id="search-field" type="text"
                                    placeholder="Ale" />
                                <button type="button" className="beerMe btn btn-light" id="search-button">Beer
                        Me!</button>
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
                    </div> */}

                    <BrewerySearch>
                    
                    </BrewerySearch>
                    <div>
                    <div className="row">
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwIKKq0iEG2TDP9_6pfMwFRPkTwsZv7Ykv2v1nHgQ4h-Vl_vhq8Q' alt="beer pic"></img>
                    </div>
                    {/* <div className="row jumbotron">
                        <div className="col-4">
                            <h3 className="text-right">Find a local brewery!</h3>
                        </div>
                        <div className="col-4">
                            <input className="form-control form-control-lg" id="zip-field" type="text"
                               placeholder="ZipCode" />
                        </div>


                        <div className="col-4">
                            <button type="button" className="btn btn-light" id="find-button">I like beer.</button>
                        </div>
                    </div> 


                     <div className="modal fade modal-xl" id="beerModal" tabindex="-1" role="dialog" aria-labelledby="beerInfo"
                        aria-hidden="true">
                        <div className="modal-dialog modal-xl" role="document">
                            <div className="modal-content">
                                <div className="modal-header modal-xl">
                                    <h5 className="modal-title" id="beerInfo"></h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body modal-xl">
                                    <p id="BeerType"></p>
                                    <p id="BeerBody">
                                    </p>
                                    <p id="BeerDetails">
                                    </p>

                                </div>
                                <div className="modal-footer modal-xl">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary" id="thumbsup"><i className="far fa-thumbs-up"></i>
                                        Favorite</button>
                                </div>

                            </div>
                        </div>
                    </div> 

                     <div className="modal fade modal-xl" id="favModal" tabindex="-1" role="dialog" aria-labelledby="favInfo"
                        aria-hidden="true">
                        <div className="modal-dialog modal-xl" role="document">
                            <div className="modal-content">
                                <div className="modal-header modal-xl">
                                    <h5 className="modal-title" id="favInfo">Favorited Beers</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body modal-xl" id="favorite-body">
                                    <table className="table table-sm table-hover" id='beer-table'>
                                        <thead>
                                            <tr>
                                                <th scope="col">Beer Name</th>
                                                <th scope="col">Likes</th>
                                            </tr>
                                        </thead>
                                        <tbody id="beer-body">
                                        </tbody>
                                    </table>
                                </div>
                                <div className="modal-footer modal-xl">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                </div>
                                <div id="map"></div>
            <div id="right-panel">
              <h2>Results</h2>
              <ul id="places"></ul>
              <button id="more">More results</button>
            </div>
                            </div>
                        </div>
                    </div> */}
                </div>
                
            </div>
            
        )
        
    }
    
    
}




export default Guest;