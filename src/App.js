import React from "react";
import "./App.css";
import { constants } from "./constants";
import Projects from "./Projects";
import Widget from "./Widget";
import WidgetContainer from "./WidgetContainer";
import RLLogo from "./assets/rl-logo.png";
import DotaLogo from "./assets/dota-logo.png";
import GHLogo from "./assets/github-logo.png";
import GmailLogo from "./assets/gmail-logo.png";
import GiovanniLogo from "./assets/giovanni-logo.webp";
import LinkedInLogo from "./assets/linkedin-logo.png";

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
            <Widget height={2} width={3}></Widget>
            <Widget height={2} width={2} />
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Widget height={4} width={1}>
              <Projects />
            </Widget>
          </div>{" "}
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Widget height={2} width={1}>
              <div
                style={{
                  height: "100%",
                  width: "100%",
                  overflow: "hidden",
                  borderRadius: "16px",
                }}
              >
                <img
                  src={RLLogo}
                  style={{
                    transform: "rotate(-15deg)",
                    maxHeight: "75%",
                    top: "10px",
                    position: "relative",
                  }}
                />
              </div>
            </Widget>
            <Widget height={2} width={1}>
              <div
                style={{
                  height: "100%",
                  width: "100%",
                  overflow: "hidden",
                  borderRadius: "16px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={DotaLogo}
                  style={{
                    transform: "rotate(10deg)",
                    height: "105%",
                  }}
                />
              </div>
            </Widget>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
              }}
            >
              <Widget height={1} width={1}>
                <div
                  style={{
                    height: "100%",
                    width: "100%",
                    overflow: "hidden",
                    borderRadius: "16px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={GHLogo}
                    style={{
                      transform: "rotate(-5deg)",
                      height: "100%",
                    }}
                  />
                </div>
              </Widget>
              <Widget height={1} width={1}>
                <div
                  style={{
                    height: "100%",
                    width: "100%",
                    overflow: "hidden",
                    borderRadius: "16px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={GmailLogo}
                    style={{
                      transform: "rotate(15deg)",
                      height: "100%",
                    }}
                  />
                </div>
              </Widget>
              <Widget height={1} width={1}>
                <div
                  style={{
                    height: "100%",
                    width: "100%",
                    overflow: "hidden",
                    borderRadius: "16px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={LinkedInLogo}
                    style={{
                      transform: "rotate(5deg)",
                      height: "100%",
                    }}
                  />
                </div>
              </Widget>
              <Widget height={1} width={1}>
                <div
                  style={{
                    height: "100%",
                    width: "100%",
                    overflow: "hidden",
                    borderRadius: "16px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={GiovanniLogo}
                    style={{
                      transform: "rotate(-15deg)",
                      height: "100%",
                    }}
                  />
                </div>
              </Widget>
            </div>
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
