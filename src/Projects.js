import React, { useState } from "react";

export default function Projects() {
  const [projectIndex, setProjectIndex] = useState(0);
  const projects = [
    { title: "Bing", description: "Bong", image: "yes" },
    { title: "Ting", description: "Bong", image: "yes" },
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
        Left arrow
      </Segment>
      <Segment flex={5}>{projects[projectIndex].title}</Segment>
      <Segment
        flex={1}
        onClick={() =>
          projectIndex < projects.length - 1
            ? setProjectIndex(projectIndex + 1)
            : null
        }
      >
        Right arrow
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
