import { Component, useState } from "react";

export class ClassTrafficLight extends Component {
  state = {
    lightColor: "black",
  };

  nextLightColor = () => {
    const { lightColor } = this.state;
    switch (lightColor) {
      case "red":
        this.setState({ lightColor: "green" });
        break;
      case "green":
        this.setState({ lightColor: "yellow" });
        break;
      case "yellow":
        this.setState({ lightColor: "red" });
        break;
      default:
        this.setState({ lightColor: "red" });
    }
  };

  render() {
    return (
      <div className="traffic-light-box">
        <h2>Class Traffic Light</h2>
        <div className="traffic-light">
          {/* Background color can be black | yellow | red | green */}
          <div
            className={`circle ${
              this.state.lightColor === "red" ? "red" : "black"
            }`}
          ></div>
          <div
            className={`circle ${
              this.state.lightColor === "yellow" ? "yellow" : "black"
            }`}
          ></div>
          <div
            className={`circle ${
              this.state.lightColor === "green" ? "green" : "black"
            }`}
          ></div>
        </div>
        <button className="next-state-button" onClick={this.nextLightColor}>
          Next State
        </button>
      </div>
    );
  }
}
