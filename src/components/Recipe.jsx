import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Recipe.scss";

const Recipe = ({ label, image, ingredientLines, calories }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const length = 80;

  return (
    <div className="recipe" data-aos="fade-in">
      <h1 className="recipe__label">{label}</h1>
      <img className="recipe__image" src={image} alt="Recipe" />
      <ul className="recipe__ingredients-list">
        {ingredientLines.map((ingredient) => (
          <li className="recipe__ingredients" key={uuidv4()}>
            {ingredient.substring(0, length)}
          </li>
        ))}
      </ul>
      <p className="recipe__calories">Calories: {calories}</p>
    </div>
  );
};

export default Recipe;
