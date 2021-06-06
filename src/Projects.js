import React, { useState } from "react";
import constants from "./constants";
import GvantaLogo from "./assets/gvanta-logo.png";
import RagnarokLogo from "./assets/ragnarok-logo.png";
import RoqqettLogo from "./assets/roqqett-logo.jpg";
import UnderConstruction from "./assets/under-construction.png";
import RightArrow from "./assets/right-arrow.svg";

export default function Projects() {
  const [projectIndex, setProjectIndex] = useState(0);
  const projects = [
    {
      title: "Roqqett",
      description:
        "Mobile and Web application that uses the power of open banking and faster payments to create a one-stop-shop for all of your payments.",
      image: RoqqettLogo,
      links: ["https://roqqett.com"],
    },
    {
      title: "Grandeo",
      description:
        "Grandeo is a file storage and sharing platform implementing the power of the blockchain to maintain data integrity.",
      image: GvantaLogo,
      links: ["https://grandeo.net"],
    },
    {
      title: "Ragnarok",
      description:
        "A very young personal project aiming to build an audit and launchpad platform to ensure safety when trading altcoins on the cryptocurrency market.",
      image: RagnarokLogo,
      links: [
        "https://ragnaroktoken.com",
        "https://ragnarok-audit-platform.onrender.com",
      ],
    },
    {
      title: "More....",
      description:
        "The are a number of other projects, including personal practice projects and group work from my bootcamp days.",
      image: UnderConstruction,
    },
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
          projectIndex > 0
            ? setProjectIndex(projectIndex - 1)
            : setProjectIndex(projects.length - 1)
        }
      >
        <div
          style={{
            height: 120,
            width: 120,
            backgroundColor: constants.palette.light,
            padding: 16,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
          className={["widget-base clickable"]}
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
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "80%",
            }}
          >
            <div
              style={{
                height: 120,
                width: 120,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 12,
                backgroundColor: "rgba(50, 50, 60, 0.2)",
                overflow: "hidden",
              }}
            >
              <img src={projects[projectIndex].image} height="140%"></img>
            </div>
            <div
              style={{
                flexGrow: 1,
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <p
                style={{
                  fontWeight: 700,
                  fontSize: 48,
                  lineHeight: 0.1,
                  color: "#444455",
                }}
              >
                {projects[projectIndex].title}
              </p>
            </div>
          </div>
          <p
            style={{
              fontWeight: 600,
              fontSize: 18,
              textAlign: "center",
              color: "#444455",
            }}
          >
            {projects[projectIndex].description}
          </p>
          <div style={{ textAlign: "center" }}>
            {projects[projectIndex].links?.map((l, idx) => (
              <>
                <a
                  href={l}
                  style={{
                    textDecoration: "none",
                  }}
                >
                  {l}
                </a>
                {idx < projects[projectIndex].links.length && <br />}
              </>
            ))}
          </div>
          <div style={{ display: "flex", height: 30 }}>
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
            : setProjectIndex(0)
        }
      >
        <div
          style={{
            height: 120,
            width: 120,
            backgroundColor: constants.palette.light,
            padding: 16,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
          className={["widget-base clickable"]}
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
