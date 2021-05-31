import React from "react";

export default function WidgetContainer({ children }) {
  const maxTileRowWidth = 4;
  const mappedChildren = [];

  children.forEach(c => {
    const height = c.props.height;
    const width = c.props.width;

    if (mappedChildren.length === 0 || mappedChildren.every(r => r.length === maxTileRowWidth)) {
      console.log("Push new row");
      mappedChildren.push([]);
    }

    try {
      mappedChildren.forEach((r, index) => {
        if (r.length >= maxTileRowWidth) {
          return;
        }
        for (let k = 0; k < maxTileRowWidth; k++) {
          const gridLocations = [];
          console.log("scanning cell", { mappedChildren });

          //  build a list of locations that this element would occupy for given origin
          //   const gridLocations = getCheckLocationsForRootPosition();
          for (let i = 0; i < height; i++) {
            console.log(index, i, mappedChildren[index + i]);
            if (mappedChildren[i + index] == undefined) {
              console.log("bing");
              mappedChildren[i + index] = [];
            }
            console.log(index, i, mappedChildren[index + i]);

            for (let j = 0; j < width; j++) {
              gridLocations.push({
                x: i + k,
                y: index + j,
              });
            }
          }
          console.log({ gridLocations, mappedChildren });

          // check if grid locations are valid and unoccupied
          // const checkResult = checkLocations();
          const checkResult = gridLocations.every(l => {
            console.log("in check", { mappedChildren });
            return l.x < maxTileRowWidth && mappedChildren[l.y][l.x] === undefined;
          });

          console.log({ checkResult });

          if (!checkResult) continue;

          // update the output array if valid
          //   updateOutput();
          gridLocations.forEach((l, index) => {
            console.log("in update", { mappedChildren });
            if (index === 0) {
              mappedChildren[l.y][l.x] = c;
              return;
            }

            mappedChildren[l.y][l.x] = null;
          });
          console.log({ mappedChildren });
          throw "found home for tile";
        }
      });
    } catch (e) {
      console.log({ e });
    }
  });

  console.log({ mappedChildren });

  function getCheckLocationsForRootPosition(height, width) {
    for (let i = 0; i++; i < maxTileRowWidth - 1) {
      for (let j = i; j++; j < width + i) {
        if (mappedChildren[i][j] !== undefined) {
          break;
        }
      }
    }
  }

  function checkLocations() {
    return true;
  }

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        flexDirection: "column",
        flexWrap: "wrap",
        display: "flex",
        flexGrow: 1,
      }}
    >
      {mappedChildren.map(r => {
        console.log({ r });
        return (
          <div style={{ display: "flex", flexDirection: "row" }}>
            {r.map(t => t ?? <div style={{ wflex: 1, height: "150px" }} />)}
          </div>
        );
      })}
    </div>
  );
}

function fitsInRow() {}

function VerticalFlex({ children, flex }) {
  return <div style={{ display: "flex", flexDirection: "column", flex: flex }}>{children}</div>;
}

function HorizontalFlex({ children, flex }) {
  return <div style={{ display: "flex", flexDirection: "row", flex: flex }}>{children}</div>;
}
