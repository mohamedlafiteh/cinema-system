import React, { Component } from "react";
import "./home.css";
export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tickets: [],
      thursdayOffer: "",
      ticketType: "standard",
      ticketPrice: 0,
      total: 0,
      selectedReal3D: false,
      selectedIMAX: false
    };
  }

  componentDidMount = () => {
    this.calculateTotal();
  };

  calculateTotal = () => {
    const ticketTYpe = this.state.ticketType;
    const selectedIMAX = this.state.selectedIMAX;
    const selectedReal3D = this.state.selectedReal3D;

    let price = 0;
    if (ticketTYpe === "standard") {
      price = 7.9;
    } else if (ticketTYpe === "concession") {
      price = 5.4;
    }

    this.setState({
      ticketPrice: price
    });
    let total = 0;
    if (selectedIMAX && selectedReal3D) {
      total += price + 1.5 + 0.9;
    } else if (selectedReal3D) {
      total += price + 0.9;
    } else if (selectedIMAX) {
      total += price + 1.5;
    }
    this.setState({
      total: total.toFixed(2)
    });
  };

  handleChange = e => {
    this.setState(
      {
        ticketType: e.target.value
      },
      this.calculateTotal
    );
  };

  handleInputChangeRel = event => {
    this.setState(prev => {
      return {
        selectedReal3D: !prev.selectedReal3D
      };
    }, this.calculateTotal);
  };
  handleInputChangeForImax = event => {
    this.setState(prev => {
      return {
        selectedIMAX: !prev.selectedIMAX
      };
    }, this.calculateTotal);
  };
  render() {
    return (
      <form className="form">
        <label className="text pick">Pick your ticket:</label>

        <select value={this.state.ticketType} onChange={this.handleChange}>
          <option value="standard">Standard</option>
          <option value="concession">Concession</option>
        </select>
        <h2 className="text">
          {" "}
          The Ticket price is : £ {this.state.ticketPrice}
        </h2>

        <label className="text">Real3D: </label>
        <input
          name="Real3D"
          type="checkbox"
          checked={this.state.selectedReal3D}
          onChange={this.handleInputChangeRel}
        />

        <br />
        <label className="text">IMAX:</label>
        <input
          name="IMAX"
          type="checkbox"
          checked={this.state.selectedIMAX}
          onChange={this.handleInputChangeForImax}
        />

        <h2 className="text">The total is : £ {this.state.total}</h2>
        <button className="text">Add Tickets</button>
        <h1>{this.state.thursdayOffer}</h1>
      </form>
    );
  }
}

export default Home;
