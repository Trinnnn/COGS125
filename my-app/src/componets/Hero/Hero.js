import React from "react";
import styles from "./Hero.module.css";

export const Hero = () => {
  return React.createElement(
    "section",
    { className: styles.container },
    React.createElement(
      "div",
      { className: styles.content },
      React.createElement(
        "h1",
        { className: styles.title },
        "Hi, I'm Trinity"
      ),
      React.createElement(
        "p",
        { className: styles.description },
        "I'm a current master student learning computational biology and bioinformatics with experience using React. Reach out if you'd like to learn more!"
      ),
      React.createElement(
        "a",
        { href: "mailto:ngao@ucsd.edu", className: styles.contactBtn },
        "Contact Me"
      )
    ),
    React.createElement("img", {
      src: "/image/heroImage.png",
      alt: "Hero image of me",
      className: styles.heroImg
    }),
    React.createElement("div", { className: styles.topBlur }),
    React.createElement("div", { className: styles.bottomBlur })
  );
};