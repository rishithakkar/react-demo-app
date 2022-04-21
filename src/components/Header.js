import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="nav">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to={{pathname: "/about", state: {token: "abc"}}}>About</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
    </nav>
  );
}
