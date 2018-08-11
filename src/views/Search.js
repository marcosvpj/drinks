import React, { Component } from "react";
import {Link} from "react-router-dom";
import "../App.scss";
import search from "../search.js";

import ingredients from "../ingredients.js"
import RenderBottles from "../components/RenderBottles.js"

const bar = ingredients.drinks.map(i => ({
  name: i.strIngredient1,
  selected: false
}));

function Drink(d) {
  return (
    <Link to={{pathname: `/${d.idDrink}`, state:{d}}} key={d.idDrink}>
      {d.strDrink}<img src={d.strDrinkThumb} className="drink-thumb"/>
    </Link>
  );
}
class SearchScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bar: bar,
      selecteds: [],
      drinks: []
    };
  }

  handleSelect(event, bottle) {
    const updatedBar = this.state.bar.map(b => {
      if (b.name !== bottle.name) return b;
      return Object.assign(b, { selected: !b.selected });
    });

    const selecteds = updatedBar.filter(i => i.selected).map(i => i.name);

    console.log({selecteds});
    search.byIngredients(selecteds).then( drinks => {
    //   if(!!drinks) {
        this.setState(prevState => ({
          bar: updatedBar,
          selecteds: selecteds,
          drinks: drinks
        }));
      // }
    });
  }

  render() {
    const shelf = this.state.bar.filter(i => !i.selected);
    const mat = this.state.bar.filter(i => i.selected);

    return (
      <div className="App">
        <h2>Drinks</h2>
        <div className="ingredients">
          {this.state.drinks.map(Drink)}
        </div>
        <h2>Bar</h2>
        <div className="ingredients">
          <RenderBottles
            bottles={mat}
            onSelectBottle={(e, i) => this.handleSelect(e, i)}
          />
        </div>
        <h2>O que você gosta?</h2>
        <div className="ingredients">
          <RenderBottles
            bottles={shelf}
            onSelectBottle={(e, i) => this.handleSelect(e, i)}
          />
        </div>
        <button className="bottom-button">Mostrar Sugestões</button>
      </div>
    );
  }
}

export default SearchScreen;
