#!/usr/bin/env node
"use strict";

var _cocktailApi = require("./cocktail-api");

var _cocktailApi2 = _interopRequireDefault(_cocktailApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var argv = require("yargs").argv;

function intersect(a, b) {
  return [].concat(_toConsumableArray(new Set(a))).filter(function (x) {
    return new Set(b).has(x);
  });
}

function clean(arr) {
  if (arr.length == 1) return arr[0];
  if (arr.length == 2) return intersect(arr[0], arr[1]);
  var n = [].concat(_toConsumableArray(arr));
  var r = n.pop();
  while (n.length) {
    r = intersect(r, n.pop());
  }

  return r;
}

if (argv.ingredient == undefined && argv.name == undefined && argv.id == undefined) {
  console.log('usage: cli.js [--ingredient "i1, i2..."] [--all]');
  console.log('              [--name "drink name"]');
  console.log('              [--id drink-id]');
  console.log('');
  console.log('ingredient  search drink by ingredients names separated by comma');
  console.log('   all      show drinks who fit only one of the ingredients');
  console.log('name        search drink by name');
  console.log('id          get drink recipe by id');
}

var all = {};

if (argv.ingredient) {
  console.log("Find drinks with " + argv.ingredient);

  var ingredients = argv.ingredient.split(",").map(function (i) {
    return i.trim();
  });

  var get_recipes = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(ingredient) {
      var data;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _cocktailApi2.default.findByIngredient(ingredient);

            case 2:
              data = _context.sent;

              data.drinks.map(function (d) {
                all[d.idDrink] = d;
              });
              return _context.abrupt("return", data.drinks.map(function (d) {
                return d.idDrink;
              }));

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function get_recipes(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var recipies = ingredients.map(function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(ingredient) {
      var recipes;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return get_recipes(ingredient);

            case 2:
              recipes = _context2.sent;


              if (argv.all !== undefined) {
                console.log(ingredient + ":");
                recipes.map(function (d) {
                  return console.log("\t" + all[d].strDrink);
                });
              }
              // console.log('');
              return _context2.abrupt("return", recipes);

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, undefined);
    }));

    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }());

  Promise.all(recipies).then(function (r) {
    if (recipies.length <= 1) return false;
    var result = clean(r);

    console.log(ingredients.join(", ") + ":");
    result.map(function (d) {
      return console.log("\t" + all[d].strDrink);
    });

    // console.log(clean(r));
  });
}

if (argv.id) {
  console.log("Get drink by id " + argv.id);
  _cocktailApi2.default.findById(argv.id).then(function (data) {
    //   const drink = data.drinks;
    //   drinks.map( d => console.log(d.idDrink + ' - ' + d.strDrink) );
    console.log(data);
  });
}

if (argv.name) {
  console.log("Get drink by name " + argv.name);
  _cocktailApi2.default.findByName(argv.name).then(function (data) {
    //   const drink = data.drinks;
    //   drinks.map( d => console.log(d.idDrink + ' - ' + d.strDrink) );
    console.log(data);
  });
}