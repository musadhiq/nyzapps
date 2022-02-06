import React from "react";
import { Link } from "react-router-dom";
function Box({ prev, current }) {
  return (
    <div className="box">
      <div className="link">
        <Link to="/" className="box-link">
          {prev}
        </Link>
        / <span className="box-current">{current}</span>
      </div>
    </div>
  );
}

export default Box;
