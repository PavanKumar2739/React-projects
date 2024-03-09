import Buttons from "./Buttons";
import AddTodo from "./Components/AddTodo";
import AppName from "./Components/AppName";
import Todoitem1 from "./Components/TodoItem1";
import Todoitem2 from "./Components/TodoItem2";
import './App.css';
import ClockHeading from "./Components/BharatClock/ClockHeading";
import ClockSlogan from "./Components/BharatClock/ClockSlogan";
import HealthyFoodHead from "./Components/Fragments/HealthyFoodHead";
import FoodItems from "./Components/Fragments/FoodItems";

function App() {
 // let foodItems = []
  let foodItems = ['Sprouts','Boiled seeds','Green vegitables','Fruits','Nuts','Salad','Milk']
  return (
    <div>
      <center className="todo-container">
      <AppName/>
      <AddTodo/>
        <div className="text-rows">
         <Todoitem2/>
          <Todoitem1/>
          
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
      {/* <h1>Hello World</h1>
     <Buttons/> */}
    </div>
  );
}

export default App;
