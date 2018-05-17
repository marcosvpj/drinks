#!/usr/bin/env node
import ds from "./cocktail-api";

const argv = require("yargs").argv;

function intersect(a, b) {
  return [...new Set(a)].filter(x => new Set(b).has(x));
}

function clean(arr) {
  if(arr.length == 1) return arr[0];
  if(arr.length == 2) return intersect(arr[0], arr[1]);
  const n = [...arr];
  var r = n.pop();
  while(n.length) {
    r = intersect(r, n.pop())
  }

  return r;
}

// function intersect(a, b) {
//   return a.filter(function(n) {
//     return b.indexOf(n) !== -1;
//   });
// }

const all = {};

if (argv.ingredient) {
  console.log(`Find drinks with ${argv.ingredient}`);

  const ingredients = argv.ingredient.split(',').map( i => i.trim() );

  const get_recipes = async (ingredient) => {
    const data = await ds.findByIngredient(ingredient);
    data.drinks.map(d => { all[d.idDrink] = d; })
    return data.drinks.map(d => d.idDrink);
  };

  const recipies = ingredients.map(async ingredient => {
    // ingredient = ingredient.trim();
    const recipes = await get_recipes(ingredient);
    console.log(ingredient + ':');
    recipes.map( d => console.log("\t" + all[d].strDrink) );
    // console.log('');
    return recipes;
  })

  Promise.all(recipies).then((r) => {
    if (recipies.length <= 1) return false;
    const result = clean(r);
    console.log(result);
    console.log(ingredients + ':');
    result.map( d => console.log("\t" + all[d].strDrink) );

    // console.log(clean(r));
  })

}

if (argv.id) {
  console.log(`Get drink by id ${argv.id}`);
  ds.findById(argv.id).then(data => {
    //   const drink = data.drinks;
    //   drinks.map( d => console.log(d.idDrink + ' - ' + d.strDrink) );
    console.log(data);
  });
}

if (argv.name) {
  console.log(`Get drink by name ${argv.name}`);
  ds.findByName(argv.name).then(data => {
    //   const drink = data.drinks;
    //   drinks.map( d => console.log(d.idDrink + ' - ' + d.strDrink) );
    console.log(data);
  });
}
