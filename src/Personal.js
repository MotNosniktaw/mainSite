import React from "react";

export default function Personal() {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        fontSize: 24,
        fontWeight: 600,
        color: "#444455",
        padding: 16,
        textAlign: "center",
      }}
    >
      <h1 style={{ lineHeight: 0.5 }}>Tom Watkinson</h1>
      <p>
        <i>Full Stack Web Developer - Bath, UK</i>
      </p>
      <p style={{ fontSize: 18 }}>
        After a strong education in Science and Research, I found a new passion
        in software development. Here is a quick overview of my skills, past
        work and links to the other fancies in my life.
      </p>
      <p style={{ fontSize: 18 }}>
        Feel free to contact me using the links below :)
      </p>
    </div>
  );
}
