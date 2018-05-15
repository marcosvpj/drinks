#!/usr/bin/env node
import ds from "./cocktail-api";

const argv = require("yargs").argv;

if (argv.ingredient) {
  console.log(`Find drinks with ${argv.ingredient}`);
  ds.findByIngredient(argv.ingredient).then(data => {
    const drinks = data.drinks;
    drinks.map(d => console.log(d.idDrink + " - " + d.strDrink));
  });
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
