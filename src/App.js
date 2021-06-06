import React, { useEffect, useState } from "react";
import "./App.css";
import constants from "./constants";
import Projects from "./Projects";
import Widget from "./Widget";
import Particles from "react-particles-js";
import particlesConfig from "./assets/particles.json";
import Personal from "./Personal";
import Skills from "./Skills";
import Links from "./Links";
import ResponsivenessWarning from "./ResponsivenessWarning";

function App() {
  const [dismissed, setDismissed] = useState(false);
  const [responsivenessWarning, setResponsivenessWarning] = useState(false);

  useEffect(() => {
    const onResize = (e) => {
      if (e.target.innerWidth < 1000) {
        setResponsivenessWarning(true);
      }
    };
    onResize({ target: { innerWidth: window.innerWidth } });
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
      }}
    >
      <div
        style={{
          backgroundColor: constants.palette.light,
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
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "80%",
              height: "100%",
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
        <ResponsivenessWarning
          dismissed={dismissed}
          setDismissed={setDismissed}
          showWarning={responsivenessWarning}
        />
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
