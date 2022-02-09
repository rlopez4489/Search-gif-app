import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Naruto"]);
  return (
    <div className="container">
      <h2>Gif Expert App</h2>
      
      <AddCategory setCategories={setCategories} />
      <ol>
        {categories?.map((category, i) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </div>
  );
};

GifExpertApp.propTypes = {};

export default GifExpertApp;
