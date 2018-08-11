"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _nodeFetch = require("node-fetch");

var _nodeFetch2 = _interopRequireDefault(_nodeFetch);

require("babel-polyfill");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var request = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(endpoint) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _nodeFetch2.default)(endpoint).then(function (response) {
              return response.json();
            }).catch(function (response) {
              return console.log("Request error :(", response.message);
            });

          case 2:
            return _context.abrupt("return", _context.sent);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function request(_x) {
    return _ref.apply(this, arguments);
  };
}();

var ds = {
  findByIngredient: function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(ingredient) {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return request("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + ingredient);

            case 2:
              return _context2.abrupt("return", _context2.sent);

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function findByIngredient(_x2) {
      return _ref2.apply(this, arguments);
    }

    return findByIngredient;
  }(),
  findById: function findById(id) {
    return request("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + id);
  },
  findByName: function findByName(name) {
    return request("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + name);
  }
};

exports.default = ds;