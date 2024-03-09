import { useState } from "react";
import AddTodo from "./Components/TodoItems/AddTodo";
import AppName from "./Components/TodoItems/AppName";
import Todoitem from "./Components/TodoItems/TodoItem";
import './App.css';
import ClockHeading from "./Components/BharatClock/ClockHeading";
import ClockSlogan from "./Components/BharatClock/ClockSlogan";
import HealthyFoodHead from "./Components/FoodSession/HealthyFoodHead";
import FoodItems from "./Components/FoodSession/FoodItems";
import WelcomeMessage from "./Components/TodoItems/WelcomeMessage";
import AddTodo2 from "./Components/TodoItems/TodoItem2";

function App() {
 // let foodItems = []
  let foodItems = ['Sprouts','Boiled seeds','Green vegitables','Fruits','Nuts','Salad','Milk']
  
  const [todoItems, setTodoItems] = useState([]);
  const onNewItemAdd =(itemName, itemDueDate)=>{
      console.log(itemDueDate, itemName)
      // const newItems = [...todoItems,//we spread and then adding new item(spread current iteam
      //   {name:itemName,dueDate : itemDueDate}]
      //this below new way will help to avoid that issue like not dependent on old val
      setTodoItems((currentVal)=>[...currentVal,//we spread and then adding new item(spread current iteam
        {name:itemName,dueDate : itemDueDate}] 
      );
     
  }
  const hendleDeleteItem=(todoItemName)=>{
      console.log("Item deleted ",todoItemName);
      const newItem = todoItems.filter((item)=>item.name!=todoItemName);
      setTodoItems(newItem);
  }
  return (
    <div>
      <center className="todo-container">
      <AppName/>
      <AddTodo onNewItemAdd={onNewItemAdd}/>
      <AddTodo2 onNewItemAdd={onNewItemAdd}/>
        <div className="text-rows">
        
          <Todoitem todoItems={todoItems} onDeleteClick={hendleDeleteItem} />
         {todoItems.length==0&&<WelcomeMessage />} 
          
        </div>
        <div className="clock-container">
          <ClockHeading/>
          <ClockSlogan/>
        </div>
        <div className="food-container">
          <HealthyFoodHead/>
          <FoodItems foodItems={foodItems}/>
        </div>
      </center>
    
    </div>
  );
}

export default App;
