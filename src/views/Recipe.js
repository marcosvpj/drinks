import React from 'react';
import { Link } from 'react-router-dom';

import search from "../search.js";


// function Recipe() {
// }

class Recipe extends React.Component {
  constructor(props) {
    super(props);
    const {match, location} = props;
    const drink = location.state.d;
    const recipe = search.byId(drink.idDrink).then((r) => {
      console.log({r});
      this.setState({drink: r.drinks[0]});
    });

    this.state = {
      drink: drink
    };
  }

  render() {
    const {drink} = this.state;
    return (
      <div>
        <Link to="/">{'<'} Search</Link>
        <h1>{drink.strDrink}</h1>
        <img src={drink.strDrinkThumb} />
        <p>{drink.strInstructions}</p>
        <p>{drink.strMeasure1} {drink.strIngredient1}</p>
        <p>{drink.strMeasure2} {drink.strIngredient2}</p>
        <p>{drink.strMeasure3} {drink.strIngredient3}</p>
        <p>{drink.strMeasure4} {drink.strIngredient4}</p>
        <p>{drink.strMeasure5} {drink.strIngredient5}</p>
        <p>{drink.strMeasure6} {drink.strIngredient6}</p>
        <p>{drink.strMeasure7} {drink.strIngredient7}</p>
        <p>{drink.strMeasure8} {drink.strIngredient8}</p>
        <p>{drink.strMeasure9} {drink.strIngredient9}</p>
        <p>{drink.strMeasure10} {drink.strIngredient10}</p>
      </div>
    );

  }
}

export default Recipe;
