import React from "react";
import { useNavigate } from "react-router-dom";
import recipes from "../data/recipe.json";

function CategoriesHome() {
  const navigate = useNavigate();

  return (
    <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", padding: "20px" }}>
      {recipes.map((recipe) => (
        <div
          key={recipe.id}
          style={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "10px",
            width: "250px",
            textAlign: "center",
            cursor: "pointer"
          }}
          onClick={() => navigate(`/recipe/${recipe.id}`)}
        >
          <img
            src={recipe.image}
            alt={recipe.title}
            style={{ width: "200px", height: "150px", objectFit: "cover" }}
          />
          <h3>{recipe.title}</h3>
        </div>
      ))}
    </div>
  );
}

export default CategoriesHome;
