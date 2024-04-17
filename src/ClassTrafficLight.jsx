import { Component } from "react";

export class ClassTrafficLight extends Component {
  ARR_COLORS = ["red", "yellow", "green", "black"];
  state = {
    lightColorIndex: this.ARR_COLORS.length - 4,
  };

  nextLightColor = () => {
    this.setState(({ lightColorIndex }) => ({
      lightColorIndex:
        lightColorIndex === 0
          ? this.ARR_COLORS.length - 2
          : lightColorIndex - 1,
    }));
  };

  render() {
    const { lightColorIndex } = this.state;
    return (
      <div className="traffic-light-box">
        <h2>Class Traffic Light</h2>
        <div className="traffic-light">
          {this.ARR_COLORS.slice(0, -1).map((color, index) => (
            <div
              key={index}
              className={`circle ${
                index === lightColorIndex ? color : "black"
              }`}
            ></div>
          ))}
        </div>
        <button className="next-state-button" onClick={this.nextLightColor}>
          Next State
        </button>
      </div>
    );
  }
}
