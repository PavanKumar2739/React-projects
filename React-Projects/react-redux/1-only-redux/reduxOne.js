const redux = require('redux');//1

const initialValue = {
    counter:0,
}

//3
//reducer for implementing an action
const reducer = (store= initialValue, action)=>{//firstime store is undefined so initial value
    console.log("reducer called ",action);
    let newStore = store;
    if(action.type === 'INCREMENT'){
        newStore = {counter:store.counter+1}
    }else if(action.type === 'DECREMENT'){
        newStore = {counter:store.counter-1}
    }
    else if(action.type === 'ADDITION'){
        newStore = {counter:store.counter+action.payload.number}
    }
   
    return newStore;
}

//2
const store = redux.createStore(reducer);//store created

//when ever the data updates it will be called
const subscriber = ()=>{
    
   const state= store.getState();
   console.log(state);
}

//4
store.subscribe(subscriber);

//action dispatch from user
store.dispatch({type:'INCREMENT'});
store.dispatch({type:'DECREMENT'});
store.dispatch({type:'INCREMENT'});
store.dispatch({type:'ADDITION',payload:{number:20}});
store.dispatch({type:'DECREMENT'});