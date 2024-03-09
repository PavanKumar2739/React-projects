
import AddTodo from "./Components/TodoItems/AddTodo";
import AppName from "./Components/TodoItems/AppName";
import Todoitem from "./Components/TodoItems/TodoItem";
import './App.css';
import WelcomeMessage from "./Components/TodoItems/WelcomeMessage";
import AddTodo2 from "./Components/TodoItems/AddTodo2";
import TodoItemsContextProvider from "./Components/store/todo-items-store";


function App() {

  return (
    <TodoItemsContextProvider>
      <center className="todo-container">
      <AppName/>
      {/* <AddTodo onNewItemAdd={onNewItemAdd}/>developed by uing useState */}
      <AddTodo2 />{/*developed by uing use ref*/}
        <div className="text-rows">
        
          <Todoitem />
         <WelcomeMessage />
          
        </div>
      </center>
      </TodoItemsContextProvider>
      
  );
}

export default App;
