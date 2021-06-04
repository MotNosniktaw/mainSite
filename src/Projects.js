import React, { useState } from "react";
import { constants } from "./constants";
import GvantaLogo from "./assets/gvanta-logo.png";
import RoqqettLogo from "./assets/roqqett-logo.jpg";
import RightArrow from "./assets/right-arrow.svg";

export default function Projects() {
  const [projectIndex, setProjectIndex] = useState(0);
  const projects = [
    {
      title: "Gvanta (Grandeo)",
      description: "API into the blockchain",
      image: GvantaLogo,
    },
    {
      title: "Roqqett",
      description: "Faster payments...faster!!!!",
      image: RoqqettLogo,
    },
    { title: "Fing", description: "Bong", image: "yes" },
    { title: "Ging", description: "Bong", image: "yes" },
  ];

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        overflow: "hidden",
        borderRadius: "16px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
      }}
    >
      <Segment
        flex={1}
        onClick={() =>
          projectIndex > 0 ? setProjectIndex(projectIndex - 1) : null
        }
      >
        <div
          style={{
            borderRadius: 16,
            margin: 16,
            height: 120,
            width: 120,
            backgroundColor: constants.palette.light,
            boxShadow: "10px 15px 10px rgba(100, 100, 200, 0.3)",
            padding: 16,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            style={{ transform: "rotate(180deg)" }}
            src={RightArrow}
            height={50}
          />
        </div>
      </Segment>
      <Segment flex={2}>
        <div
          style={{
            borderRadius: 16,
            margin: 16,
            height: `85%`,
            width: "100%",
            backgroundColor: constants.palette.light,
            boxShadow: "10px 15px 10px rgba(100, 100, 200, 0.3)",
            padding: 16,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <img src={projects[projectIndex].image} height={50} width={50}></img>
          <p style={{ fontWeight: 600, fontSize: 24 }}>
            {projects[projectIndex].title}
          </p>
          <br />
          {projects[projectIndex].description}
          <br />
          <div style={{ display: "flex" }}>
            {projects.map((p, idx) => {
              return (
                <div
                  style={{
                    height: 12,
                    width: 12,
                    margin: 12,
                    backgroundColor:
                      idx === projectIndex
                        ? constants.palette.dark
                        : constants.palette.medium1,
                    borderRadius: 6,
                  }}
                />
              );
            })}
          </div>
        </div>
      </Segment>
      <Segment
        flex={1}
        onClick={() =>
          projectIndex < projects.length - 1
            ? setProjectIndex(projectIndex + 1)
            : null
        }
      >
        <div
          style={{
            borderRadius: 16,
            margin: 16,
            height: 120,
            width: 120,
            backgroundColor: constants.palette.light,
            boxShadow: "10px 15px 10px rgba(100, 100, 200, 0.3)",
            padding: 16,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={RightArrow} height={50} />
        </div>
      </Segment>
    </div>
  );
}

function Segment({ flex, children, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        flex: flex ?? 1,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
    </div>
  );
}
