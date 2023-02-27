import React, { useMemo } from "react";
import constants from "./constants";

export default function Widget({
  children,
  height,
  width,
  double,
  onClick,
  color,
}) {
  const backgroundColor = useMemo(() => {
    switch (color) {
      case "grey":
        return constants.palette.medium1;
      case "blue":
        return constants.palette.medium2;
      case "green":
        return constants.palette.medium3;
      default:
        return pickRandomMediumColor();
    }
  }, [color]);
  function calculateDimension(value) {
    const tileSize = 100;
    const scale = value > 0 ? (value > 12 ? 12 : value) : 1;
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
