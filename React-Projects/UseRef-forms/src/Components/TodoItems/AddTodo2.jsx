import { useRef } from "react";
import { BiMessageAdd } from "react-icons/bi";

const AddTodo2 = ({onNewItemAdd}) => {

  const todoNameRef = useRef('');
  const todoDateRef = useRef('');

  const handleOnClick = (event)=>{// use ref concept
    event.preventDefault();
    const todoName = todoNameRef.current.value;
    const todoDate = todoDateRef.current.value;
    todoDateRef.current.value="";
    todoNameRef.current.value = "";
    onNewItemAdd(todoName,todoDate);
    
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
