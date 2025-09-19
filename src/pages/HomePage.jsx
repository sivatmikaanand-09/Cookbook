import React from "react";
import { useNavigate } from "react-router-dom";
import recipes from "../data/recipe.json";

function HomePage() {
  const navigate = useNavigate();
  const featured = recipes.slice(0, 6); // show 6 recipes on homepage

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", padding: "40px" }}>
      {/* Hero Banner */}
      <div style={{
        textAlign: "center",
        marginBottom: "50px",
        background: "linear-gradient(to right, #ff9966, #ff5e62)",
        padding: "50px 20px",
        borderRadius: "12px",
        color: "white",
        boxShadow: "0 6px 15px rgba(0,0,0,0.2)"
      }}>
        <h1 style={{ fontSize: "40px", marginBottom: "10px" }}>🍴 My Cookbook</h1>
        <p style={{ fontSize: "18px", maxWidth: "600px", margin: "0 auto" }}>
          Explore delicious South & North Indian recipes, handpicked just for you.
        </p>
      </div>

      {/* Featured Recipes */}
      <h2 style={{ textAlign: "center", marginBottom: "30px", fontSize: "28px", color: "#2c3e50" }}>
        🌟 Featured Recipes
      </h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        gap: "25px"
      }}>
        {featured.map((recipe) => (
          <div
            key={recipe.id}
            onClick={() => navigate(`/recipe/${recipe.id}`)}
            style={{
              backgroundColor: "#fff",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              cursor: "pointer",
              transition: "transform 0.2s, box-shadow 0.2s"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = "0 6px 18px rgba(0,0,0,0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
            }}
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              style={{ width: "100%", height: "180px", objectFit: "cover" }}
            />
            <div style={{ padding: "15px" }}>
              <h3 style={{ margin: "10px 0", fontSize: "18px", color: "#34495e" }}>
                {recipe.title}
              </h3>
              <p style={{ fontSize: "14px", color: "#777" }}>{recipe.cuisine}</p>
            </div>
          </div>
        ))}
      </div>

      {/* View All Recipes Button */}
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <button
          onClick={() => navigate("/home")}
          style={{
            padding: "14px 28px",
            backgroundColor: "#27ae60",
            color: "white",
            border: "none",
            borderRadius: "10px",
            fontSize: "18px",
            cursor: "pointer",
            boxShadow: "0 6px 12px rgba(0,0,0,0.15)",
            transition: "background 0.2s"
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#219150")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#27ae60")}
        >
          View All Recipes ➡
        </button>
      </div>
    </div>
  );
}

export default HomePage;
