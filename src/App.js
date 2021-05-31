import React from "react";
import "./App.css";
import { constants } from "./constants";
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
      <div style={{ backgroundColor: constants.palette.light, width: "100%", height: "100%" }}>
        <WidgetContainer>
          <Widget height={2} width={3} />
          <Widget height={1} width={2} />
          <Widget height={2} width={1} />
          <Widget height={1} width={1} />
          {/* <Widget /> */}
          <Widget height={3} width={2} />
          <Widget height={1} width={1} />
          <Widget height={2} width={3} />
          {/* <Widget height={2} width={1} /> */}
          {/* <Widget /> */}
          {/* <Widget /> */}
          {/* <Widget height={2} width={1} /> */}
          {/* <Widget /> */}
          {/* <Widget height={1} width={2} /> */}
          {/* <Widget height={2} width={1} /> */}
          {/* <Widget /> */}
        </WidgetContainer>
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
