import { useContext, useRef } from "react";
import { BiMessageAdd } from "react-icons/bi";
import { TodoItemsContext } from "../store/todo-items-store";

const AddTodo2 = () => {

  const {addNewIteam} = useContext(TodoItemsContext);

  const todoNameRef = useRef('');
  const todoDateRef = useRef('');

  const handleOnClick = (event)=>{// use ref concept
    event.preventDefault();
    const todoName = todoNameRef.current.value;
    const todoDate = todoDateRef.current.value;
    todoDateRef.current.value="";
    todoNameRef.current.value = "";
    addNewIteam(todoName,todoDate);//item will be added to todo
    
  }
 
  return (
    <div class='container text-center'>
      <form class="row kg-row" onSubmit={(e)=>handleOnClick(e)}>
        <div class="col-sm-5">
          <input type="text" ref={todoNameRef} placeholder="Enter To do Here" />
        </div>
        <div class="col-sm-4">
          <input type="date" ref={todoDateRef} />
        </div>
        <div class="col-sm-2">
          <button type="submit" class="btn btn-success kg-button" 
          >
            <BiMessageAdd />
          </button>
        </div>
      </form>
      </div>
  );
};

export default AddTodo2;
