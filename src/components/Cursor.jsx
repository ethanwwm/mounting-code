import React from "react";
import "../styles/Cursor.scss";

class Cursor extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    const cursor = document.querySelector(".cursor");

    if (window.screen.width > 575) {
      document.addEventListener("mousemove", (e) => {
        cursor.setAttribute(
          "style",
          "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;"
        );
      });

      document.addEventListener("click", () => {
        cursor.classList.add("expand");

        setTimeout(() => {
          cursor.classList.remove("expand");
        }, 500);
      });

      window.onscroll = function () {
        cursor.setAttribute("style", "opacity: 0;");
      };
    } else {
      cursor.setAttribute("style", "opacity: 0;");
    }
  }

  render() {
    return <div class="cursor"></div>;
  }
}

export default Cursor;
