import React, { Component } from 'react';
import '../../style.css'

 class TheFridge extends Component {
    render() {
        return (
            <div>
            <div className="myfridge">
                <h1>MY Beer Fridge</h1>
                </div>
            <div style={{marginTop: 10}}>
                <h3>Add Beer</h3>
                <form>
                    <div className="form-group">
                        <label>Beer Name:  </label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Brewery: </label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Size: </label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Quantity: </label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Add the Beer to My Fridge" className="btn btn-primary"/>
                        <form action="/guest">
                            <button type="submit">Back to Search</button>
                        </form>
                    </div>
                </form>
            </div>
            </div>
        )
    }
}
export default TheFridge;