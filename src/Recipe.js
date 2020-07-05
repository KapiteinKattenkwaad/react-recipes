import React from 'react';
import style from './recipe.module.css';

const Recipe = ({title, calories, image, url, ingredientLines}) => {
  return (
    <div >
      <a href={url} target="_blank">
        <div className={style.recipe}>
          <h1>{title}</h1>

          <img className={style.image} src={image} alt=""/>
          <p>Calories: {calories }</p>

          {/*     <ol>
        {ingredientLines.map(ingredient =>(
          <li>{ingredient.text}</li>
        ))}
      </ol>*/}
        </div>

      </a>
    </div>
  );
}

export default Recipe;
