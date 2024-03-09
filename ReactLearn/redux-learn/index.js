import { createStore } from "redux";

const initialState={
    numOfLaptops:100
}

//action
const buyLaptop=()=>{
  return  {
        type:"BUY_LAPTOP"
    }
}


const reducer = (state = initialState,action) =>{
    switch(action.type){
            case "BUY_LAPTOP":
                return state.numOfLaptops-1;
            default:
                return state;
    }
   

}

const store = createStore