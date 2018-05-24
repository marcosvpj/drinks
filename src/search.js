function intersect(a, b) {
  return [...new Set(a)].filter(x => new Set(b).has(x));
}

function cleanDupes(a) {
  return a.filter(function(item, pos, self) {
    return self.indexOf(item) == pos;
  })
}

function clean(arr, xor = true) {
  if (arr.length == 1) return arr[0];
  if (arr.length == 2) return intersect(arr[0], arr[1]);
  const n = [...arr];
  var r = n.pop();
  while (n.length) {
    if (xor) r = intersect(r, n.pop());
    if (!xor) r = r.concat(n.pop());
  }

  return cleanDupes(r);
}

const all = [];

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

export default {
  groupSearch (ingredient) {
    const result = ingredient.map( i => this.byIngredients(i.group, false) );
    console.log('groupSearch result', result);

    return Promise.all(result).then( (r) => {
      const all = r.map( z => cleanDupes(z))

      return clean(all);
    });
    return result;
  },
  byIngredients: (ingredients, xor = true) => {
    console.log('byIngredients', ingredients);
    const get_recipes = async ingredient => {
      const data = await ds.findByIngredient(ingredient);
      data.drinks.map(d => {
        all[d.idDrink] = d;
      });
      return data.drinks.map(d => d.idDrink);
    };

    const recipies = ingredients.map(async ingredient => {
      const recipes = await get_recipes(ingredient);
      return recipes;
    });

    return Promise.all(recipies).then(r => {
      if (recipies.length == 0) return false;
      const result = clean(r, xor);

      console.log(ingredients.join(", ") + ":");
      result.map(d => console.log("\t" + all[d].strDrink));
      return result.map(d => all[d]);
    });
  }
}
