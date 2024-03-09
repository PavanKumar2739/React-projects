import styles from './Display.module.css';
import ButtonsContainer from './ButtonsContainer';
import Display from './Display';
import { useState } from 'react';

const Calculator = () => {
  let [calVal,setCalVal] = useState("");
  const onButtonClicked =(buttonName)=>{
    switch(buttonName){
      case '=':
        setCalVal(eval(calVal));
        break;
      case 'C':
        setCalVal("");
        break;
      default:
        setCalVal(calVal+buttonName);
    }
  }
  return (
    <div style={{ zIndex: '20px'}}>
    <div className={styles.calculator}>
      <Display displayVal={calVal}/>
      <div id="buttons-container" className={styles.buttonsContainer}>
       <ButtonsContainer onButtonClicked={onButtonClicked}/>
      </div>
    </div>
    </div>
  )
}

export default Calculator;
