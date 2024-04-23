import React, { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [show, handleShow] = useState([false]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", handleShow);
    };
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        className="nav_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/4/42/Dfnefr.png"
        alt="Netflix logo"
      />

      <img
        className="nav_avatar"
        src="https://media.tenor.com/sgQ73oidu1wAAAAC/netflix-avatar-smile.gif"
        alt="Netflix Avatar logo"
      />
    </div>
  );
}

export default Navbar;
