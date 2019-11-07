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
  handleClick = e => {
    e.preventDefault();

    const currentTickets = this.state;
    const price = this.calculateTicket(currentTickets);

    currentTickets.price = price;

    const newTickets = this.state.tickets;
    newTickets.push(currentTickets);
    this.setState({
      tickets: newTickets
    });

    this.calculateTotal();
  };
  componentDidMount = () => {};

  calculateTotal = () => {
    let total = 0;
    this.state.tickets.forEach(ticket => {
      total += ticket.price;
    });

    this.setState({
      total: total
    });
  };

  calculateTicket = ticket => {
    const ticketTYpe = ticket.ticketType;
    const selectedIMAX = ticket.selectedIMAX;
    const selectedReal3D = ticket.selectedReal3D;

    let price = 0;
    if (ticketTYpe === "standard") {
      price = 7.9;
    } else if (ticketTYpe === "concession") {
      price = 5.4;
    }

    let total = 0;
    if (selectedIMAX && selectedReal3D) {
      total += price + 1.5 + 0.9;
    } else if (selectedReal3D) {
      total += price + 0.9;
    } else if (selectedIMAX) {
      total += price + 1.5;
    } else {
      total = price;
    }

    return total;
  };

  handleChange = e => {
    this.setState({
      ticketType: e.target.value
    });
  };

  handleInputChangeRel = event => {
    this.setState(prev => {
      return {
        selectedReal3D: !prev.selectedReal3D
      };
    });
  };
  handleInputChangeForImax = event => {
    this.setState(prev => {
      return {
        selectedIMAX: !prev.selectedIMAX
      };
    });
  };
  render() {
    return (
      <form className="form">
        <label className="text pick">Pick your ticket:</label>
        {this.state.tickets.map((ticket, index) => (
          <p key={index}>
            `{ticket.ticketType} ({ticket.price})`
          </p>
        ))}
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
        <button className="text" onClick={this.handleClick}>
          Add Tickets
        </button>
      </form>
    );
  }
}

export default Home;
