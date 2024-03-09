import { useState,useRef } from "react";
import { BiMessageAdd } from "react-icons/bi";

const AddTodo = ({onNewItemAdd}) => {

  const[todoName, setTodoName] = useState('');
  const [todoDate, setTodoDate] = useState('');
  const noOfUpdates = useRef(0);
  const todoNameRef = useRef('');
  const todoDateRef = useRef('');

  const handleNameChange=(e)=>{
    setTodoName(e.target.value);
    noOfUpdates.current+=1;
  }

  const handleOnClick = (event)=>{// passvalues to the itemcomponent method and set blank to boxes
    event.preventDefault();
    onNewItemAdd(todoName,todoDate);
    setTodoDate('');
    setTodoName('');
    console.log(`No of Updates ${noOfUpdates.current}`)
  }
 
  return (
    <div class='container text-center'>
      <form class="row kg-row" onSubmit={(e)=>handleOnClick(e)}>
        <div class="col-sm-5">
          <input type="text" ref={todoNameRef} value={todoName} placeholder="Enter To do Here" onChange={handleNameChange}/>
        </div>
        <div class="col-sm-4">
          <input type="date" ref={todoDateRef} value={todoDate} onChange={(e)=>setTodoDate(e.target.value)}/>
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

export default AddTodo;
