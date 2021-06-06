import React from "react";
import Widget from "./Widget";

import RLLogo from "./assets/rl-logo.png";
import DotaLogo from "./assets/dota-logo.png";
import GHLogo from "./assets/github-logo.png";
import GmailLogo from "./assets/gmail-logo.png";
import GiovanniLogo from "./assets/giovanni-logo.webp";
import LinkedInLogo from "./assets/linkedin-logo.png";

export default function Links() {
  return (
    <>
      <Widget
        height={2}
        width={1}
        onClick={() =>
          window.open(
            "https://rocketleague.tracker.network/rocket-league/profile/steam/76561197997910940/overview"
          )
        }
      >
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
      <Widget
        height={2}
        width={1}
        onClick={() => window.open("https://liquipedia.net/dota2/Main_Page")}
      >
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
        <Widget
          height={1}
          width={1}
          double
          onClick={() => window.open("https://github.com/motnosniktaw")}
        >
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
        <Widget
          height={1}
          width={1}
          double
          onClick={() => window.open("mailto:tomwatkinsondeveloper@gmail.com")}
        >
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
        <Widget
          height={1}
          width={1}
          double
          onClick={() =>
            window.open("https://www.linkedin.com/in/tom-watkinson-73938073/")
          }
        >
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
        <Widget
          height={1}
          width={1}
          double
          onClick={() => window.open("Https://giovannilimmigrato.com")}
        >
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
    </>
  );
}
