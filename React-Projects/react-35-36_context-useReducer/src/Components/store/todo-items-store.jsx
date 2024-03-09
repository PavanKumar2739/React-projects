import { createContext, useReducer } from "react";

export const TodoItemsContext = createContext({
    todoItems:[],
    addNewIteam:()=>{},
    deleteItem:()=>{},
});

//will have common reducer depending on the type we do operation
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

const TodoItemsContextProvider = ({children}) =>{
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
 
 return(
 <TodoItemsContext.Provider value={{//we can pass multiple items in context API,
    todoItems,
    addNewIteam,
   deleteItem,
   }}>
    {children}
</TodoItemsContext.Provider>//every thing got passed uing context*/}
 );

}

export default TodoItemsContextProvider;