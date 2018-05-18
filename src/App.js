import React, { Component } from "react";
import "./App.css";

const ingredients = {
  drinks: [
    { strIngredient1: "Light rum" },
    { strIngredient1: "Applejack" },
    { strIngredient1: "Gin" },
    { strIngredient1: "Dark rum" },
    { strIngredient1: "Sweet Vermouth" },
    { strIngredient1: "Strawberry schnapps" },
    { strIngredient1: "Scotch" },
    { strIngredient1: "Apricot brandy" },
    { strIngredient1: "Triple sec" },
    { strIngredient1: "Southern Comfort" },
    { strIngredient1: "Orange bitters" },
    { strIngredient1: "Brandy" },
    { strIngredient1: "Lemon vodka" },
    { strIngredient1: "Blended whiskey" },
    { strIngredient1: "Dry Vermouth" },
    { strIngredient1: "Amaretto" },
    { strIngredient1: "Tea" },
    { strIngredient1: "Champagne" },
    { strIngredient1: "Coffee liqueur" },
    { strIngredient1: "Bourbon" },
    { strIngredient1: "Tequila" },
    { strIngredient1: "Vodka" },
    { strIngredient1: "A\u00f1ejo rum" },
    { strIngredient1: "Bitters" },
    { strIngredient1: "Sugar" },
    { strIngredient1: "Kahlua" },
    { strIngredient1: "demerara Sugar" },
    { strIngredient1: "Dubonnet Rouge" },
    { strIngredient1: "Lime juice" },
    { strIngredient1: "Irish whiskey" },
    { strIngredient1: "Apple brandy" },
    { strIngredient1: "Carbonated water" },
    { strIngredient1: "Cherry brandy" },
    { strIngredient1: "Creme de Cacao" },
    { strIngredient1: "Grenadine" },
    { strIngredient1: "Port" },
    { strIngredient1: "Coffee brandy" },
    { strIngredient1: "Red wine" },
    { strIngredient1: "Rum" },
    { strIngredient1: "Grapefruit juice" },
    { strIngredient1: "Ricard" },
    { strIngredient1: "Sherry" },
    { strIngredient1: "Cognac" },
    { strIngredient1: "Sloe gin" },
    { strIngredient1: "Apple juice" },
    { strIngredient1: "Pineapple juice" },
    { strIngredient1: "Lemon juice" },
    { strIngredient1: "Sugar syrup" },
    { strIngredient1: "Milk" },
    { strIngredient1: "Strawberries" },
    { strIngredient1: "Chocolate syrup" },
    { strIngredient1: "Yoghurt" },
    { strIngredient1: "Mango" },
    { strIngredient1: "Ginger" },
    { strIngredient1: "Lime" },
    { strIngredient1: "Cantaloupe" },
    { strIngredient1: "Berries" },
    { strIngredient1: "Grapes" },
    { strIngredient1: "Kiwi" },
    { strIngredient1: "Tomato juice" },
    { strIngredient1: "Cocoa powder" },
    { strIngredient1: "Chocolate" },
    { strIngredient1: "Heavy cream" },
    { strIngredient1: "Galliano" },
    { strIngredient1: "Peach Vodka" },
    { strIngredient1: "Ouzo" },
    { strIngredient1: "Coffee" },
    { strIngredient1: "Spiced rum" },
    { strIngredient1: "Water" },
    { strIngredient1: "Espresso" },
    { strIngredient1: "Angelica root" },
    { strIngredient1: "Orange" },
    { strIngredient1: "Cranberries" },
    { strIngredient1: "Johnnie Walker" },
    { strIngredient1: "Apple cider" },
    { strIngredient1: "Everclear" },
    { strIngredient1: "Cranberry juice" },
    { strIngredient1: "Egg yolk" },
    { strIngredient1: "Egg" },
    { strIngredient1: "Grape juice" },
    { strIngredient1: "Peach nectar" },
    { strIngredient1: "Lemon" },
    { strIngredient1: "Firewater" },
    { strIngredient1: "Lemonade" },
    { strIngredient1: "Lager" },
    { strIngredient1: "Whiskey" },
    { strIngredient1: "Absolut Citron" },
    { strIngredient1: "Pisco" },
    { strIngredient1: "Irish cream" },
    { strIngredient1: "Ale" },
    { strIngredient1: "Chocolate liqueur" },
    { strIngredient1: "Midori melon liqueur" },
    { strIngredient1: "Sambuca" },
    { strIngredient1: "Cider" },
    { strIngredient1: "Sprite" },
    { strIngredient1: "7-Up" },
    { strIngredient1: "Blackberry brandy" },
    { strIngredient1: "Peppermint schnapps" },
    { strIngredient1: "Creme de Cassis" },
    { strIngredient1: "Jack Daniels" },
    { strIngredient1: "Bailey's irish cream" },
    { strIngredient1: "151 proof rum" },
    { strIngredient1: "Absolut Vodka" },
    { strIngredient1: "Goldschlager" },
    { strIngredient1: "Crown Royal" },
    { strIngredient1: "Cointreau" },
    { strIngredient1: "Vermouth" },
    { strIngredient1: "Advocaat" },
    { strIngredient1: "Absolut Kurant" },
    { strIngredient1: "Beer" },
    { strIngredient1: "Kool-Aid" },
    { strIngredient1: "Cherry Heering" },
    { strIngredient1: "White Creme de Menthe" },
    { strIngredient1: "Malibu rum" },
    { strIngredient1: "Vanilla vodka" },
    { strIngredient1: "J\u00e4germeister" },
    { strIngredient1: "Kiwi liqueur" },
    { strIngredient1: "Grand Marnier" },
    { strIngredient1: "Cachaca" },
    { strIngredient1: "Peachtree schnapps" },
    { strIngredient1: "Wild Turkey" },
    { strIngredient1: "Cranberry vodka" },
    { strIngredient1: "Corona" },
    { strIngredient1: "Orange juice" },
    { strIngredient1: "Yukon Jack" },
    { strIngredient1: "Chocolate ice-cream" },
    { strIngredient1: "Coconut rum" },
    { strIngredient1: "Banana liqueur" },
    { strIngredient1: "Black Sambuca" },
    { strIngredient1: "Hot Damn" },
    { strIngredient1: "Mint" },
    { strIngredient1: "Campari" },
    { strIngredient1: "Ice" },
    { strIngredient1: "Sour mix" },
    { strIngredient1: "Absinthe" },
    { strIngredient1: "Whisky" },
    { strIngredient1: "Guinness stout" },
    { strIngredient1: "Vanilla ice-cream" },
    { strIngredient1: "Chambord raspberry liqueur" },
    { strIngredient1: "Jim Beam" },
    { strIngredient1: "Godiva liqueur" },
    { strIngredient1: "Fruit punch" },
    { strIngredient1: "Baileys irish cream" },
    { strIngredient1: "Zima" },
    { strIngredient1: "Blue Curacao" },
    { strIngredient1: "Coca-Cola" },
    { strIngredient1: "Maui" },
    { strIngredient1: "Frangelico" },
    { strIngredient1: "Bacardi Limon" },
    { strIngredient1: "Raspberry vodka" },
    { strIngredient1: "Green Creme de Menthe" },
    { strIngredient1: "Lemon peel" },
    { strIngredient1: "Prosecco" },
    { strIngredient1: "White Rum" },
    { strIngredient1: "Mezcal" },
    { strIngredient1: "Green Chartreuse" },
    { strIngredient1: "Grape Soda" },
    { strIngredient1: "Hot Chocolate" },
    { strIngredient1: "Blended Scotch" },
    { strIngredient1: "Rye whiskey" }
  ]
};

const bar = ingredients.drinks.map(i => ({
  name: i.strIngredient1,
  selected: false
}));

const RenderBottles = props => {
  console.log(props);
  return props.bottles.map((i, k) => {
    return (
      <div
        key={k}
        className="box-ingredient"
        onClick={e => props.onSelectBottle(e, i)}
      >
        {i.name}
      </div>
    );
  });
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bar: bar
      // shelf: bar.filter(i => !i.selected),
      // mat: bar.filter(i => i.selected)
    };
  }

  handleSelect(event, bottle) {
    console.log(bottle);
    console.log(event);
    console.log(this);

    this.setState(prevState => ({
      bar: prevState.bar.map(b => {
        if (b.name !== bottle.name) return b;
        return Object.assign(b, { selected: !b.selected });
      })
    }));
  }

  render() {
    const shelf = this.state.bar.filter(i => !i.selected);
    const mat = this.state.bar.filter(i => i.selected);

    return (
      <div className="App">
        <h2>Bar</h2>
        <div className="ingredients">
          <RenderBottles
            bottles={mat}
            onSelectBottle={(e, i) => this.handleSelect(e, i)}
          />
        </div>
        <h2>Shelf</h2>
        <div className="ingredients">
          <RenderBottles
            bottles={shelf}
            onSelectBottle={(e, i) => this.handleSelect(e, i)}
          />
        </div>
      </div>
    );
  }
}

export default App;
