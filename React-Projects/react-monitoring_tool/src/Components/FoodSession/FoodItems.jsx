import React, { useState } from "react";
import NoFoodItems from "./NoFoodItems";
import Item from "./Item";
import AboutFoodItem from "./AboutFoodItem";

const FoodItems = ({foodItems,handleOpen}) => {

  let [activeItem, setActiveItem] = useState([]);
  
 const handleBuyClicked=(item,event)=>{
    console.log(item)
    setActiveItem([...activeItem,item]);
    

 }

  return (
    <React.Fragment>
      
      <NoFoodItems foodItems={foodItems}/>
      <ul className="list-group">
        {
          foodItems.map((item) => (
           <Item foodItem={item} key={item} bought={activeItem.includes(item)} handleOpen={handleOpen} handleBuyClicked={(event)=>handleBuyClicked(item,event)}/>
          )) /*map concept*/
        }
      </ul>
    </React.Fragment>
  );
};

export default FoodItems;
