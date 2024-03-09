import React from "react";
import NoFoodItems from "./NoFoodItems";
import Item from "./Item";

const FoodItems = ({foodItems}) => {
  

  return (
    <React.Fragment>
      <NoFoodItems foodItems={foodItems}/>
      <ul className="list-group">
        {
          foodItems.map((item) => (
           <Item foodItem={item}/>
          )) /*map concept*/
        }
      </ul>
    </React.Fragment>
  );
};

export default FoodItems;
