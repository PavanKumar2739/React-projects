import { useRef } from "react";
import { useDispatch } from "react-redux";

const Controls = () => {
  //7
  /**
   * hepls to update the store data with the help of this hook this is form the react-redux
   * we will use to dispatch the actions with type and payload
   */
  const dispatch = useDispatch();

  const inputEle = useRef();

  const handleIncrement=()=>{
    dispatch({type:"INCREMENT"})
  }
  const handleDecrement=()=>{
    dispatch({type:"DECREMENT"})
  }
  const handlePrivacy=()=>{
    dispatch({type:"PRIVACY"})
  }
  const handleAdd=()=>{
    dispatch({type:"ADD",payload:{
    num:inputEle.current.value}
  });
  inputEle.current.value="";
  }
  const handleSubtract=()=>{
    dispatch({type:"SUBTRACT",payload:{
      num:inputEle.current.value}});
      inputEle.current.value="";
  }
  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button type="button" class="btn btn-primary" onClick={handleIncrement}>
          Add +1
        </button>
        <button type="button" class="btn btn-success" onClick={handleDecrement}>
          Remove -1
        </button>
        <button type="button" class="btn btn-warning" onClick={handlePrivacy}>
          Privacy Toggle
        </button>
      </div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center control-row">
        <input type="text" ref={inputEle} placeholder="Enter Number"  className="number-input"/>
         
        <button type="button" class="btn btn-info" onClick={handleAdd}>
          Add Number
        </button>
        <button type="button" class="btn btn-danger" onClick={handleSubtract}>
          Subtract Number
        </button>
      </div>
    </>
  );
};

export default Controls;
