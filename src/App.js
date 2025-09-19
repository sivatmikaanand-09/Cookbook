import React from "react";
import { Routes, Route } from "react-router-dom";
import CategoriesHome from "./components/CategoriesHome";
import RecipeDetail from "./components/RecipeDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<CategoriesHome />} />
      <Route path="/recipe/:id" element={<RecipeDetail />} />
    </Routes>
  );
}

export default App;
