import {useSelector } from 'react-redux'

const DisplayCounter = () => {
  //6
  //it will be usefull to make use of the store values by slicing it as shown below
  //it will help to take the part of the store we can use the whole store insted of taking perticular but ha it will cause issue 
  //where ever the change happen this also going to re-render again not good practice
  const counter = useSelector(state=>state.counter);// subscription already set no need to taken care on that
  // const counter = useSelector(state);
  //above case it will handle with responsible when needs then only it will update
  //we will consume value here using useselector
  return (
    <p className="lead mb-4">
        Counter current value : {counter}
    </p>
  )
}

export default DisplayCounter
