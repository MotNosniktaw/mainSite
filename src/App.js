import React from "react";
import "./App.css";
import Projects from "./Projects";
import Widget from "./Widget";
import Particles from "react-particles-js";
import particlesConfig from "./assets/particles.json";
import Personal from "./Personal";
import Skills from "./Skills";
import Links from "./Links";

function App() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            height: "100%",
            width: "100%",
            zIndex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "80%",
              minWidth: 880,
              maxWidth: 1100,
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Row>
              <Widget height={3} width={4}>
                <Personal />
              </Widget>
              <Widget height={3} width={2}>
                <Skills />
              </Widget>
            </Row>
            <Row>
              <Widget height={4} width={1}>
                <Projects />
              </Widget>
            </Row>
            <Row>
              <Links />
            </Row>
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            zIndex: 0,
          }}
        >
          <Particles params={particlesConfig} height="100vh" width={"100%"} />
        </div>
      </div>
    </div>
  );
}

function Row({ children }) {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>{children}</div>
  );
}

export default App;
