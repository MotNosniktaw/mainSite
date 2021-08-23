import React from "react";

import DockerLogo from "./assets/docker-logo.png";
import DotnetLogo from "./assets/dotnet-logo.png";
import NodeLogo from "./assets/node-logo.png";
import ReactLogo from "./assets/react-logo.png";

export default function Skills() {
  return (
    <div
      style={{
        height: "100%",
        width: "350px",
        padding: 12,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Row>
        <Image src={NodeLogo} />
        <Image src={ReactLogo} />
      </Row>
      <Row>
        <Image src={DotnetLogo} />
        <Image src={DockerLogo} />
      </Row>
    </div>
  );
}

function Row({ children }) {
  return (
    <div
      style={{
        display: "flex",
        height: "50%",
        width: "100%",
      }}
    >
      {children}
    </div>
  );
}

function Image({ src }) {
  return (
    <div
      style={{
        height: "100%",
        width: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // border: "1px solid red",
      }}
    >
      <img src={src} height="75%" />
    </div>
  );
}
