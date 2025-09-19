import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import recipes from "../data/recipe.json";

function RecipeDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipe = recipes.find((r) => r.id === parseInt(id));

  const [showIngredients, setShowIngredients] = useState(true);

  if (!recipe) return <h2>Recipe not found</h2>;

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", paddingBottom: "50px" }}>
      {/* Hero Section with Image + Title Overlay */}
      <div
        style={{
          position: "relative",
          textAlign: "center",
          marginBottom: "40px"
        }}
      >
        <img
          src={recipe.image}
          alt={recipe.title}
          style={{
            width: "100%",
            maxHeight: "400px",
            objectFit: "cover",
            borderBottom: "5px solid #eee"
          }}
        />
        <h1
          style={{
            position: "absolute",
            bottom: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            color: "white",
            backgroundColor: "rgba(0,0,0,0.6)",
            padding: "10px 20px",
            borderRadius: "8px",
            fontSize: "28px"
          }}
        >
          {recipe.title}
        </h1>
      </div>

      {/* Content Layout: Steps + Ingredients */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: "40px",
          padding: "0 40px"
        }}
      >
        {/* Steps Timeline */}
        <div style={{ flex: "2", textAlign: "left" }}>
          <h3 style={{ color: "#2c3e50", marginBottom: "20px" }}>🍳 Steps</h3>
          <ol style={{ listStyle: "none", paddingLeft: "0" }}>
            {recipe.steps?.map((step, index) => (
              <li
                key={index}
                style={{
                  marginBottom: "20px",
                  position: "relative",
                  paddingLeft: "30px"
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    left: "0",
                    top: "0",
                    backgroundColor: "#3498db",
                    color: "white",
                    borderRadius: "50%",
                    width: "22px",
                    height: "22px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "14px"
                  }}
                >
                  {index + 1}
                </span>
                <span style={{ fontSize: "16px", color: "#444" }}>{step}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* Ingredients Box with Collapse */}
        <div
          style={{
            flex: "1",
            position: "sticky",
            top: "20px",
            border: "1px solid #ddd",
            borderRadius: "12px",
            padding: "20px",
            backgroundColor: "#fff",
            boxShadow: "0 6px 12px rgba(0,0,0,0.1)"
          }}
        >
          <button
            onClick={() => setShowIngredients(!showIngredients)}
            style={{
              width: "100%",
              padding: "10px",
              backgroundColor: "#e67e22",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              marginBottom: "15px",
              fontSize: "15px"
            }}
          >
            {showIngredients ? "Hide Ingredients ⬆" : "Show Ingredients ⬇"}
          </button>

          <div
            style={{
              maxHeight: showIngredients ? "500px" : "0px",
              overflow: "hidden",
              transition: "max-height 0.4s ease, opacity 0.3s ease",
              opacity: showIngredients ? 1 : 0
            }}
          >
            <h3
              style={{
                color: "#2c3e50",
                marginBottom: "15px",
                textAlign: "center"
              }}
            >
              🥗 Ingredients
            </h3>
            <ul style={{ paddingLeft: "20px", lineHeight: "1.8" }}>
              {recipe.ingredients?.map((item, index) => (
                <li key={index} style={{ fontSize: "16px", marginBottom: "6px" }}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Back Button */}
      <div style={{ marginTop: "50px", textAlign: "center" }}>
        <button
          onClick={() => navigate("/")}
          style={{
            padding: "12px 25px",
            backgroundColor: "#3498db",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "16px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            transition: "background 0.2s"
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#2980b9")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#3498db")}
        >
          ⬅ Back to Recipes
        </button>
      </div>
    </div>
  );
}

export default RecipeDetail;
