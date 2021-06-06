import React from "react";
import constants from "./constants";

export default function ResponsivenessWarning({
  setDismissed,
  dismissed,
  showWarning,
}) {
  return (
    !dismissed &&
    showWarning && (
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          zIndex: 3,
        }}
      >
        <div
          style={{
            height: "100vh",
            width: "100vw",
            backgroundColor: "rgba(20, 20, 30, 0.2)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: 24,
            fontWeight: 600,
            color: "#444455",
            textAlign: "center",
          }}
        >
          <div
            style={{
              borderRadius: 16,
              padding: 32,
              backgroundColor: constants.palette.light,
              maxWidth: 450,
            }}
          >
            <p>Oops...</p>
            <p>
              I apologise for the responsiveness nightmare that is this website.
              I promise it is on the top of my to-do list :|
            </p>
            <button onClick={() => setDismissed(true)}>Dismiss</button>
          </div>
        </div>
      </div>
    )
  );
}
