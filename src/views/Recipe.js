import React from 'react';
import { Link } from 'react-router-dom';

function Recipe({match}) {
  return (
    <div>
      <h1>Recipe: {match.params.recipe}</h1>
      <Link to="/">Search</Link>
    </div>
  );
}

export default Recipe;
