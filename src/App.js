import React from "react";
import "./App.css";
import { constants } from "./constants";
import Projects from "./Projects";
import Widget from "./Widget";
import WidgetContainer from "./WidgetContainer";

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
          backgroundColor: constants.palette.light,
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1>Tom Watkinson</h1>
        <div
          style={{
            width: "80%",
            height: "100%",
          }}
        >
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Widget height={1} width={3}>
              <div
                style={{
                  height: "100%",
                  width: "100%",
                  overflow: "hidden",
                  borderRadius: "16px",
                }}
              >
                <img src="https://i.pinimg.com/originals/6a/60/a8/6a60a807dccfccf23f7571f47acd90a3.jpg" />
              </div>
            </Widget>
            <Widget height={1} width={2} />
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Widget height={4} width={1}>
              <Projects />
            </Widget>
          </div>{" "}
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Widget height={1} width={1} />
            <Widget height={1} width={1} />
            <Widget height={1} width={1} />
          </div>
        </div>
      </div>
      {/* <div id="rl-iframe-wrapper">
        <iframe
          id="rl-iframe"
          src="https://rocketleague.tracker.network/rocket-league/profile/steam/76561197997910940/mmr?playlist=11"
        />
      </div> */}
    </div>
  );
}

export default App;
