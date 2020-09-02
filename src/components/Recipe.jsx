import React from "react";
import { v4 as uuidv4 } from "uuid";

const Recipe = ({ label, image, ingredientLines, calories }) => {
  return (
    <div className="recipe">
      <h1 className="recipe__label">{label}</h1>
      <img className="recipe__image" src={image} alt="Recipe" />
      <ul>
        {ingredientLines.map((ingredient) => (
          <li className="recipe__ingredients" key={uuidv4()}>
            {ingredient}
          </li>
        ))}
      </ul>
      <p className="recipe__calories">{calories}</p>
    </div>
  );
};

export default Recipe;
