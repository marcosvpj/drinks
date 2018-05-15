"use strict";
import fetch from "node-fetch";
import "babel-polyfill";

const request = async function(endpoint) {
  return await fetch(endpoint)
    .then(response => response.json())
    .catch(response => console.log("Request error :(", response.message));
};

const ds = {
  findByIngredient: async function(ingredient) {
    return await request(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
  },
  findById: function(id) {
      return request(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
  },
  findByName: function(name) {
      return request(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`);
  }
};

export default ds;
