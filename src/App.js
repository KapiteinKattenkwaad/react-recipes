import React, {useEffect, useState} from 'react';
import './App.css';
import Recipe from './Recipe';

const App = () => {

  const APP_ID = 'b3066bed';
  const APP_KEY = 'f597d11ddb419458751cbc387b6da038';



  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    console.log(data);
    setRecipes(data.hits)
  }

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return(
    <div className="App">
      <h1>Type in an ingredient</h1>
      <form onSubmit={getSearch} className="search-form">
        <input placeholder="e.g.: rice" className="search-bar" type="text" value={search} onChange={updateSearch} />
        <button type="submit" className="search-button">Search</button>
      </form>
      <Recipe />
      <div className="recipes">
        {recipes.map(recipe => (
          recipe.length ? recipe :
          <Recipe
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            url={recipe.recipe.url}
            ingredients={recipe.recipe.ingredientLines}
          />
        ))}
      </div>

    </div>
  );
}

export default App;
