import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{
      backgroundColor: "#2c3e50", padding: "12px 24px", display: "flex",
      justifyContent: "space-between", alignItems: "center", color: "#fff", position: "sticky", top: 0, zIndex: 1000
    }}>
      <h2 style={{ margin: 0 }}>🍲 MyCookbook</h2>
      <div style={{ display: "flex", gap: 20 }}>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/home" style={linkStyle}>Recipes</Link>
        <Link to="/about" style={linkStyle}>About</Link>
        <Link to="/contact" style={linkStyle}>Contact</Link>
      </div>
    </nav>
  );
}

const linkStyle = { color: "white", textDecoration: "none", fontSize: 15 };
export default Navbar;
