import { useReducer, useState } from "react";
import AddTodo from "./Components/TodoItems/AddTodo";
import AppName from "./Components/TodoItems/AppName";
import Todoitem from "./Components/TodoItems/TodoItem";
import './App.css';
import WelcomeMessage from "./Components/TodoItems/WelcomeMessage";
import AddTodo2 from "./Components/TodoItems/AddTodo2";
import { TodoItemsContext } from "./Components/store/todo-items-store";

const todoItemsReducer = (currentItem,action) =>{

  let newTodoItems = currentItem;
  switch (action.type){
    case 'NEW_ITEM':
      //this below new way will help to avoid that issue like not dependent on old val
      newTodoItems = [...currentItem,//we spread and then adding new item(spread current iteam
        {name:action.payload.itemName,dueDate : action.payload.itemDueDate}
      ];
        
      break;
    case 'DELETE_ITEM':
      newTodoItems = currentItem.filter((item)=>item.name!=action.payload.todoItemName);
      break;
  }
  return newTodoItems;
}

function App() {
 // let foodItems = []
  let foodItems = ['Sprouts','Boiled seeds','Green vegitables','Fruits','Nuts','Salad','Milk']
  
  //const [todoItems, setTodoItems] = useState([]);

  //use reducer concept
  const [todoItems,dispatchItem] = useReducer(todoItemsReducer,[]);

  const addNewIteam =(itemName, itemDueDate)=>{
      console.log(itemDueDate, itemName);

      const newItemAction = {
        type:"NEW_ITEM",
        payload:{
          itemName,
          itemDueDate
        }
      }
      dispatchItem(newItemAction);
      
     
  }
  const deleteItem=(todoItemName)=>{
    const deleteItemAction = {
      type:"DELETE_ITEM",
      payload:{
        todoItemName
      }
    }
   
    
      console.log("Item deleted ",todoItemName);
      dispatchItem(deleteItemAction);
  }
  return (
    <TodoItemsContext.Provider value={{//we can pass multiple items in context API,
      todoItems,
      addNewIteam,
     deleteItem,
     }}>
      <center className="todo-container">
      <AppName/>
      {/* <AddTodo onNewItemAdd={onNewItemAdd}/>developed by uing useState */}
      <AddTodo2 />{/*developed by uing use ref*/}
        <div className="text-rows">
        
          <Todoitem />
         <WelcomeMessage />
          
        </div>
      </center>
      </TodoItemsContext.Provider>//every thing got passed uing context*/}
      
  );
}

export default App;
