import { Fragment, useState } from "react";

const ARR_COLORS = ["red", "yellow", "green", "black"];

export const FunctionalTrafficLight = () => {
  const [lightColorIndex, setLightColorIndex] = useState(ARR_COLORS.length - 4);

  const nextLightColor = () => {
    let colorIndexSet;
    if (lightColorIndex === ARR_COLORS.length - 1) {
      colorIndexSet = 0;
    } else if (lightColorIndex === 0) {
      colorIndexSet = ARR_COLORS.length - 2;
    } else {
      colorIndexSet = lightColorIndex - 1;
    }
    setLightColorIndex(colorIndexSet);
  };

  return (
    <div className="traffic-light-box">
      <h2>Functional Traffic Light</h2>
      <div className="traffic-light">
        {/* Background color can be black | yellow | red | green */}

        {ARR_COLORS.map((color, index) => (
          <Fragment key={color}>
            {index < ARR_COLORS.length - 1 && (
              <div
                className={`circle ${
                  color === ARR_COLORS[lightColorIndex]
                    ? color
                    : ARR_COLORS[ARR_COLORS.length - 1]
                }`}
              ></div>
            )}
          </Fragment>
        ))}
      </div>
      <button className="next-state-button" onClick={nextLightColor}>
        Next State
      </button>
    </div>
  );
};
