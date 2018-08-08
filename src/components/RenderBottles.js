import React from "react";

const RenderBottles = props => {
  return props.bottles.map((i, k) => {
    return (
      <div
        key={k}
        className="box-ingredient"
        onClick={e => props.onSelectBottle(e, i)}
      >
        <label>
          {/* <input type="checkbox"></input> */}
          <span className="ingredient-name">{i.name}</span>
        </label>
      </div>
    );
  });
};

export default RenderBottles;
