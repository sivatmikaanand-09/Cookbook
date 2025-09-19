import React from "react";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        fontFamily: "'Poppins', sans-serif",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        textAlign: "center"
      }}
    >
      {/* Dark overlay for readability */}
      <div
        style={{
          backgroundColor: "rgba(0,0,0,0.6)",
          padding: "40px",
          borderRadius: "12px"
        }}
      >
        <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>🍲 Welcome to My Cookbook</h1>
        <p style={{ fontSize: "18px", marginBottom: "30px" }}>
          Explore delicious South & North Indian recipes with step-by-step guidance!
        </p>
        <button
          onClick={() => navigate("/home")}
          style={{
            padding: "15px 30px",
            backgroundColor: "#e67e22",
            border: "none",
            borderRadius: "8px",
            fontSize: "18px",
            color: "white",
            cursor: "pointer",
            boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
            transition: "background 0.2s"
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#d35400")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#e67e22")}
        >
          View Recipes ➡
        </button>
      </div>
    </div>
  );
}

export default LandingPage;
