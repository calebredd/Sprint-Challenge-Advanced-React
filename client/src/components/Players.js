import React, { Component } from "react";
import axios from "axios";
import "../Players.scss";

export default class Players extends Component {
  constructor(props) {
    super(props);
    this.state = { players: [] };
    this.sum = this.sum.bind(this);
  }
  sum(a, b) {
    return a + b;
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/players")
      .then(res => {
        const data = res.data;
        // console.log(data);
        this.setState({ players: data });
        // console.log(this.state.players);
      })
      .catch(err => console.error(err));
  }
  render() {
    return (
      <div>
        <p>The Women of the World Cup:</p>
        <div className="players">
          {this.state.players.map(player => (
            <div className="playerCard" key={player.id}>
              {player.name} is from {player.country} and they have been searched{" "}
              {player.searches} times.
            </div>
          ))}
        </div>
      </div>
    );
  }
}
