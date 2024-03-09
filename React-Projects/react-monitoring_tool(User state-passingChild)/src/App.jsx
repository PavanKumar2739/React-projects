

import {useState} from "react";
import AppName from "./Components/TodoItems/AppName";
import AddTodo from "./Components/TodoItems/AddTodo";
import ClockHeading from "./Components/BharatClock/ClockHeading";
import ClockSlogan from "./Components/BharatClock/ClockSlogan";
import HealthyFoodHead from "./Components/FoodSession/HealthyFoodHead";
import FoodItems from "./Components/FoodSession/FoodItems";
import Container from "./Components/CustomComp/Container";
import AboutFoodItem from "./Components/FoodSession/AboutFoodItem";
import ModalItem from "./Components/FoodSession/ModalItem";
import FoodInput from "./Components/FoodSession/FoodInput";


function App() {
 // let foodItems = []
 const [todo,setTodo] = useState({});
 const[isOpen,setIsOpen] = useState(false);
  const handleOpen=()=>{
    setIsOpen(true);
  }
  let foodItems = ['Sprouts','Boiled seeds','Green vegitables','Fruits','Nuts','Salad','Milk']
  const[textArea,setTextArea]  = useState("");
  const onEnterClick=(e)=>{// on entering 
      if(e.key=='Enter'){
        let newFoodItem = e.target.value;
        setFoodItems([...foodItem, newFoodItem]);
        setTextArea("");
      }
  }
  const eventOnChange=(event)=>{
   // console.log(event.target.value);
   setFoodItems(foodItems.filter((value)=>value.startsWith(event.target.value)));
   setTextArea(event.target.value);

}
const [foodItem,setFoodItems] = useState(foodItems);
  return (
    <div>
      <center className="todo-container">
      <AppName/>
      <AddTodo/>
       
        <div className="clock-container">
          <ClockHeading/>
          <ClockSlogan/>
        </div>
        <Container>
        <div className="food-container">
        {/*isOpen&&<AboutFoodItem setIsOpen={setIsOpen}  foodItem={"foodItem"}/>*/}

          <HealthyFoodHead/>
          <FoodInput value={textArea} eventOnChange={eventOnChange} onEnterClick={onEnterClick}/>
          <p>{textArea}</p>
          <FoodItems foodItems={foodItem} handleOpen={handleOpen}/>
        </div>
        </Container>
        <Container>
          Above foods are important in diet.!
        </Container>
      </center>
    
    </div>
  );
}

export default App;
