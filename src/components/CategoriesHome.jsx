import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import recipes from "../data/recipe.json";

function CategoriesHome() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [cuisine, setCuisine] = useState("All");

  // Filter recipes by search + cuisine
  const filteredRecipes = recipes.filter((recipe) => {
    const matchesSearch = recipe.title.toLowerCase().includes(search.toLowerCase());
    const matchesCuisine = cuisine === "All" || recipe.cuisine === cuisine;
    return matchesSearch && matchesCuisine;
  });

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", padding: "40px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>🍲 MOM'S DRIP COOKBOOK</h1>

      {/* Search + Dropdown Controls */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "15px",
          marginBottom: "30px"
        }}
      >
        <input
          type="text"
          placeholder="🔍 Search recipes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "10px",
            width: "250px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            fontSize: "15px"
          }}
        />

        <select
          value={cuisine}
          onChange={(e) => setCuisine(e.target.value)}
          style={{
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            fontSize: "15px"
          }}
        >
          <option value="All">All Cuisines</option>
          <option value="South Indian">South Indian</option>
          <option value="North Indian">North Indian</option>
        </select>
      </div>

      {/* Recipe Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "25px"
        }}
      >
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe) => (
            <div
              key={recipe.id}
              onClick={() => navigate(`/recipe/${recipe.id}`)}
              style={{
                backgroundColor: "white",
                borderRadius: "12px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                cursor: "pointer",
                transition: "transform 0.2s, box-shadow 0.2s",
                overflow: "hidden",
                textAlign: "center"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow = "0 8px 16px rgba(0,0,0,0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
              }}
            >
              <img
                src={recipe.image}
                alt={recipe.title}
                style={{
                  width: "100%",
                  height: "180px",
                  objectFit: "cover"
                }}
              />
              <div style={{ padding: "15px" }}>
                <h3 style={{ margin: "10px 0", fontSize: "18px", color: "#2c3e50" }}>
                  {recipe.title}
                </h3>
                <p style={{ fontSize: "14px", color: "#777" }}>{recipe.cuisine}</p>
              </div>
            </div>
          ))
        ) : (
          <p style={{ textAlign: "center", gridColumn: "1 / -1" }}>No recipes found.</p>
        )}
      </div>
    </div>
  );
}

export default CategoriesHome;
