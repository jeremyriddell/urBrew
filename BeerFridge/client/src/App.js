import React, { Component } from "react";
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import Input from "./components/Input";
import Button from "./components/Button";
import API from "./utils/API";
import { BeerList, BeerListItem } from "./components/BeerList";
import { Container, Row, Col } from "./components/Grid";

class App extends Component {
  state = {
    Beers: [],
    BeerSearch: ""
  };

  handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get Beers update the Beers state
    event.preventDefault();
    API.getBeers(this.state.BeerSearch)
      .then(res => this.setState({ Beers: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Nav />
        <Jumbotron />
        <Container>
          <Row>
            <Col size="md-12">
              <form>
                <Container>
                  <Row>
                    <Col size="xs-9 sm-10">
                      <Input
                        name="beerSearch"
                        value={this.state.BeerSearch}
                        onChange={this.handleInputChange}
                        placeholder="Beer Name"
                      />
                       <Input
                        name="breweryName"
                        value={this.state.BeerSearch}
                        onChange={this.handleInputChange}
                        placeholder="Brewery"
                      />
                       <Input
                        name="bottleSize"
                        value={this.state.BeerSearch}
                        onChange={this.handleInputChange}
                        placeholder="Bottle Size"
                      />
                       <Input
                        name="Quantity"
                        value={this.state.BeerSearch}
                        onChange={this.handleInputChange}
                        placeholder="Quantity"
                      />
                    </Col>
                    <Col size="xs-3 sm-2">
                      <Button
                        onClick={this.handleFormSubmit}
                        type="success"
                        className="input-lg"
                      >
                        Add Beer
                      </Button>
                      <Button
                        onClick={this.handleFormSubmit}
                        type="success"
                        className="input-lg"
                      >
                        Remove Beer
                      </Button>
                      
                    </Col>
                  </Row>
                </Container>
              </form>
            </Col>
          </Row>
          <Row>
            
            <Col size="xs-12">
              {!this.state.Beers.length ? (
                <h1 className="text-center">Beers in my Fridge</h1>
              ) : (
                <BeerList>
                  {this.state.Beers.map(Beer => {
                    return (
                      <BeerListItem
                        key={Beer.title}
                        title={Beer.title}
                        href={Beer.href}
                        ingredients={Beer.ingredients}
                        thumbnail={Beer.thumbnail}
                      />
                    );
                  })}
                </BeerList>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
