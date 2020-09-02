import React, { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import "./App.scss";
import Recipe from "./components/Recipe";

const App = () => {
  const APP_ID = "d98da8f0";
  const APP_KEY = "a170fa4eacca209dc48715d5b966f50a";
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const [text, setText] = useState("Find great recipes now!");

  useEffect(() => {
    axios
      .get(
        `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
      )
      .then((res) => {
        setRecipes(res.data.hits);
      })
      .catch((err) => console.error(err));
  }, [query]);

  const handleChange = (e) => {
    setSearch(e.target.value);
    setText(`Recipes for...${search}`);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="app">
      <header className="app__header">
        <div className="app__overlay"></div>
        <h1 className="app__heading">Gitgrub</h1>
      </header>
      <form className="form" onSubmit={getSearch}>
        <h2 className="form__heading">{text}</h2>
        <div className="form__wrapper">
          <input
            className="form__search"
            type="text"
            placeholder="Search..."
            value={search}
            onChange={handleChange}
          />
          <button className="form__button">Find Recipes</button>
        </div>
      </form>
      <section className="recipes">
        {recipes.map((recipe) => (
          <Recipe
            key={uuidv4()}
            label={recipe.recipe.label}
            image={recipe.recipe.image}
            ingredientLines={recipe.recipe.ingredientLines}
            calories={recipe.recipe.calories.toFixed(0)}
          />
        ))}
      </section>
      <footer className="footer">Gitgrub &copy;</footer>
    </div>
  );
};

export default App;
