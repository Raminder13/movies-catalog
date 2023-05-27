import React from "react";

import "../styles/Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="header">
      <Link to={"/"}>Movies Catalog</Link>
    </nav>
  );
};

export default Header;
