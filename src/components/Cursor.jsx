import React from "react";
import "../styles/Cursor.scss";

class Cursor extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    const cursor = document.querySelector(".mouse-cursor");
    const outer = document.querySelector(".outer-cursor");
    const div = document.querySelector(".cursor-div");
    // const arrow = document.querySelector(".circle-arrow");

    // console.log(arrow);

    // arrow.addEventListener("mouseover", (e) => {
    //   console.log("MOUSEOVER");
    //   cursor.setAttribute("style", "height: 50px; width: 50px");
    // });

    document.addEventListener("mousemove", (e) => {
      cursor.setAttribute(
        "style",
        "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;"
      );
    });

    document.addEventListener("mousemove", (e) => {
      outer.setAttribute(
        "style",
        "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;"
      );
    });

    document.addEventListener("mousemove", (e) => {
      div.setAttribute(
        "style",
        "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;"
      );
    });
  }

  render() {
    return (
      <div className="cursor-div">
        <div className="mouse-cursor"></div>
        <div className="outer-cursor"></div>
      </div>
    );
  }
}

export default Cursor;
