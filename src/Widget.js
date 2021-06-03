import React, { useEffect, useState } from "react";
import { constants } from "./constants";

export default function Widget({ children, height, width }) {
  const [backgroundColor, setBackgroundColor] = useState(
    pickRandomMediumColor()
  );
  // console.log({ backgroundColor });
  function calculateDimension(value) {
    const tileSize = 200;
    const scale =
      Number.isInteger(value) && value > 0 ? (value > 2 ? 2 : value) : 1;
    return scale * tileSize;
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
        borderRadius: 16,
        margin: 16,
        height: `${calculateDimension(height)}px`,
        flex: width,
        backgroundColor: backgroundColor,
        boxShadow: "10px 15px 10px rgba(100, 100, 200, 0.3)",
      }}
    >
      {children}
    </div>
  );
}

Widget.defaultProps = {
  width: 1,
  height: 1,
};
