import styles from './Todo.module.css'
import { MdDelete } from "react-icons/md";

const Todoitem = ({todoItems,onDeleteClick}) => {
  // let todoItem = "Buy Milk";
  // let todoDate = "4/10/2023";

  return (
   todoItems.map((todoItem)=>
   <div key={todoItem.name}class="row kg-row">
      <div class="col-sm-5">{todoItem.name}</div>
      <div class="col-sm-4">{todoItem.dueDate}</div>
      <div class="col-sm-1">
        <button type="button" class="btn btn-danger kg-button" onClick={()=>onDeleteClick(todoItem.name)}>
          <MdDelete/>
        </button>
      </div>
    </div>)
  );
};
export default Todoitem;
