import React from "react";
import { Link } from "react-router-dom";
import Slide from "../components/Slide";

function Guide() {
  return (
    <div>
      <div className="header">Measure-ring GUIDE</div>
      <Slide />
      <p></p>
      <p></p>
      <Link to="/upload" style={{ textDecoration: "none" }}>
        <div className="startBtn">start ></div>
      </Link>
    </div>
  );
}

export default Guide;
