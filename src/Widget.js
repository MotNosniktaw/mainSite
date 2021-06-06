import React, { useState, Styl } from "react";
import constants from "./constants";

export default function Widget({ children, height, width, double, onClick }) {
  const [backgroundColor, setBackgroundColor] = useState(
    pickRandomMediumColor()
  );
  function calculateDimension(value) {
    const tileSize = 100;
    const scale =
      Number.isInteger(value) && value > 0 ? (value > 4 ? 4 : value) : 1;
    return scale * tileSize - (double ? 16 : 0);
  }

  function pickRandomMediumColor() {
    const colors = [
      constants.palette.medium1,
      constants.palette.medium2,
      constants.palette.medium3,
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  return (
    <div
      style={{
        height: `${calculateDimension(height)}px`,
        backgroundColor: backgroundColor,
        flex: width,
      }}
      className={"widget-base" + (onClick != null ? " clickable" : "")}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

Widget.defaultProps = {
  width: 1,
  height: 1,
};
