import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import SearchScreen from './views/Search.js';
import Recipe from './views/Recipe.js';

class Routes extends React.Component {
  render() {
    const { location } = this.props;

    return (
      <Switch location={location}>
        <Route exact path="/" component={SearchScreen} />
        <Route path="/:recipe" component={Recipe} />
      </Switch>
    );
  }

  renderResult() {
    const shelf = this.state.bar.filter(i => !i.selected);
    const mat = this.state.bar.filter(i => i.selected);

    return (
      <div className="App">
        <h2>Drinks</h2>
        <div className="ingredients">
          {this.state.drinks.map( (d) => {return (<span key={d.idDrink}>{d.strDrink}<img src={d.strDrinkThumb} className="drink-thumb"/></span>)} )}
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
function App() {
  return (
    <BrowserRouter>
      <Route component={Routes} />
    </BrowserRouter>
  );
}

export default App;
