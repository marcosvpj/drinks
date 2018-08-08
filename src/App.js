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
}
function App() {
  return (
    <BrowserRouter>
      <Route component={Routes} />
    </BrowserRouter>
  );
}

export default App;
