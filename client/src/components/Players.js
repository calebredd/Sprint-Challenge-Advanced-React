import React, { Component } from "react";
import axios from "axios";
import "../Players.scss";

export default class Players extends Component {
  constructor(props) {
    super(props);
    this.state = { players: [] };
    this.sum = this.sum.bind(this);
    this.newFavorite = this.newFavorite.bind(this);
  }
  sum(a, b) {
    return a + b;
  }
  newFavorite(e) {
    // console.log(e.target.parentElement);
    this.props.setFavorite(e.target.parentElement.id);
    const cards = [...document.getElementsByClassName("playerCard")];
    cards.map(card => card.classList.remove("favorite"));
    e.target.parentElement.classList.add("favorite");
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
      <div className="main">
        <div className="back-img"></div>
        <h2>The Women of the World Cup:</h2>
        <div className="players">
          {this.state.players.map(player => (
            <div
              className={
                player.id == this.props.favorite
                  ? "playerCard favorite"
                  : "playerCard"
              }
              key={player.id}
              id={player.id}
            >
              {player.name} is from {player.country} and their popularity rank
              is {player.searches}.
              <br />
              <button onClick={e => this.newFavorite(e)}>
                Set as favorite
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
