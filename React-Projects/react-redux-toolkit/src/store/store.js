import {configureStore} from '@reduxjs/toolkit';//just a redux so need to create a store
import counterSlice from './counter';
import privacySlice from './privacy';

//2
const counterStore = configureStore({reducer:{
        counter:counterSlice.reducer,
        privacy:privacySlice.reducer
}});//here store is created

export default counterStore;      

//3
/**
 * the reducer method for current store
 * @param {Object} store - store current value whole redux store current value
 * @param {Object} action - acton
 * @returns 
 //1
const INITIAL_VALUE ={//initial value by default
    counter:0,
    privacy : false,

}
const counterReducer = (store = INITIAL_VALUE ,action)=>{
    switch(action.type){
     case 'INCREMENT':{
         console.log("Action received",action.type)
         return {...store,counter:store.counter+1}
     }
     case 'DECREMENT':{
         return {...store,counter:store.counter-1}
     }
     case 'ADD':{
         //here we have issue like if more store data is the means more needs to retutn like this its bad and too much
         //so we go with spread operators ...store
         return {counter:store.counter+Number(action.payload.num),privacy: store.privacy}
     }
     case 'SUBTRACT':{
         return {...store,counter:store.counter-Number(action.payload.num)}
     }
     case 'PRIVACY':{
         return {...store,privacy: !store.privacy}
     }
 
    }
     //it will do the action that was dispatched and create new store accordingly
     //return the new store accordingly
    return store;
 }
 */
 