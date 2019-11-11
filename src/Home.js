import React, { Component } from "react";
import "./home.css";

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tickets: [],
      thursdayOffer: "",
      setDay: "",
      ticketsNumber: 0,
      ticketType: "standard",
      ticketPrice: 0,
      total: 0,
      selectedReal3D: false,
      selectedIMAX: false,
      priceEach: 0,
      subTotal: 0
    };
  }
  componentDidMount() {
    this.addDate();
  }
  addDate = e => {
    let date = new Date();
    let day = date.getDay();

    let weekDay;
    if (day === 4) {
      weekDay = "Thursday";

      this.setState({
        setDay: weekDay,
        thursdayOffer: "Buy One Get Two Free"
      });
    }
  };
  handleClick = e => {
    e.preventDefault();

    let newTicket = {
      ticketType: this.state.ticketType,
      price: this.getTicketSubtotal()
    };

    const newTickets = this.state.tickets;
    newTickets.push(newTicket);
    const ticketsNumber = newTickets.length;
    this.setState({
      tickets: newTickets,
      ticketsNumber: ticketsNumber
    });
  };

  calculateTotal = () => {
    const day = this.state.setDay;
    const ticketsNumber = this.state.ticketsNumber;
    let tickets = this.state.tickets;

    let total = 0;

    if (day === "Thursday" && ticketsNumber >= 1) {
      tickets.slice(0, -2).forEach(ticket => {
        total += ticket.price;
      });
    } else {
      tickets.forEach(ticket => {
        total += ticket.price;
      });
    }

    return total.toFixed(2);
  };

  handleChange = e => {
    const ticketType = e.target.value;

    this.setState({
      ticketType: ticketType
    });
  };

  getTicketSubtotal = () => {
    const ticketType = this.state.ticketType;
    const selectedIMAX = this.state.selectedIMAX;
    const selectedReal3D = this.state.selectedReal3D;

    let total = 0;
    if (ticketType === "standard") {
      total += 7.9;
    } else if (ticketType === "concession") {
      total += 5.4;
    }

    if (selectedReal3D) {
      total += 0.9;
    }
    if (selectedIMAX) {
      total += 1.5;
    }

    return total;
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
    const {
      thursdayOffer,
      ticketType,
      selectedIMAX,
      selectedReal3D,

      setDay
    } = this.state;
    return (
      <form className="form background">
        {setDay === "Thursday" ? (
          <p style={{ color: "red" }}>{thursdayOffer}</p>
        ) : null}
        <label className="text pick">Pick your ticket:</label>
        <select value={ticketType} onChange={this.handleChange}>
          <option value="standard">Standard</option>
          <option value="concession">Concession</option>
        </select>
        <h2 className="text">
          {" "}
          The Ticket price is : £ {this.getTicketSubtotal()}
        </h2>
        <label className="text">Real3D: </label>
        <input
          name="Real3D"
          type="checkbox"
          checked={selectedReal3D}
          onChange={this.handleInputChangeRel}
        />
        <br />
        <label className="text">IMAX:</label>
        <input
          name="IMAX"
          type="checkbox"
          checked={selectedIMAX}
          onChange={this.handleInputChangeForImax}
        />

        <br />
        <button className="text" onClick={this.handleClick}>
          Add Tickets
        </button>

        {this.state.tickets.map((ticket, index) => (
          <p key={index}>
            {ticket.ticketType} : £ {ticket.price}
          </p>
        ))}

        <h2 className="text">The total is : £ {this.calculateTotal()}</h2>
      </form>
    );
  }
}

export default Home;
