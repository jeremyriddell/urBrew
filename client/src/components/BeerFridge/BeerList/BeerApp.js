import React, { Component } from 'react';


export default class TheFridge extends Component {
  constructor(props) {
      super(props);
      this.onChangeBeerName = this.onChangeBeerName.bind(this);
      this.onChangeBrewery = this.onChangeBrewery.bind(this);
      this.onChangeSize = this.onChangeSize.bind(this);
      this.onChangeQuantity = this.onChangeQuantity.bind(this);
      this.onSubmit = this.onSubmit.bind(this);

      this.state = {
          beer_name: '',
          brewery: '',
          size:'',
          quantity:''
      }
  }
  onChangeBeerName(e) {
    this.setState({
      beer_name: e.target.value
    });
  }
  onChangeBrewery(e) {
    this.setState({
      brewery: e.target.value
    })  
  }
  onChangeSize(e) {
    this.setState({
      size: e.target.value
    })
  }
  onChangeQuantity(e) {
    this.setState({
      quantity: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(`The values are ${this.state.beer_name}, ${this.state.brewery}, ${this.state.size}, and ${this.state.quantity}`)
    this.setState({
      beer_name: '',
          brewery: '',
          size:'',
          quantity:''
    })
  }
 
  render() {
      return (
        <div>
            <div className="myfridge">
                <h1>MY Beer Fridge</h1>
                </div>
          <div style={{ marginTop: 10 }}>
              <h3>Add Beer</h3>
              <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                      <label>Beer Name:  </label>
                      <input 
                        type="text" 
                        className="form-control" 
                        value={this.state.beer_name}
                        onChange={this.onChangeBeerName}
                        />
                  </div>
                  <div className="form-group">
                      <label>Brewery: </label>
                      <input type="text" 
                        className="form-control"
                        value={this.state.brewery}
                        onChange={this.onChangeBrewery}
                        />
                  </div>
                  <div className="form-group">
                      <label>Size: </label>
                      <input type="text" 
                        className="form-control"
                        value={this.state.size}
                        onChange={this.onChangeSize}
                        />
                  </div>
                  <div className="form-group">
                      <label>Quantity: </label>
                      <input type="text" 
                        className="form-control"
                        value={this.state.quantity}
                        onChange={this.onChangeQuantity}
                        />
                  </div>
                  <div className="form-group">
                      <input type="submit" value="Add the Beer to My Fridge" className="btn btn-primary"/>
                  </div>
              </form>
          </div>
          </div>
      )
  }
}