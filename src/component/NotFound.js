import React from "react";
import { Link } from "react-router-dom";

import "../styles/NotFound.css";

const NotFound = () => {
  return (
    <div className="not-found">
      <span>404</span>
      <button>
        <Link to={"/"}>Return to home</Link>
      </button>
    </div>
  );
};

export default NotFound;
