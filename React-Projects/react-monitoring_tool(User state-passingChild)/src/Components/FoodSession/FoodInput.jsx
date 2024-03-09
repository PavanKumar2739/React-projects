import styles from './Food.module.css';
const FoodInput = ({value,eventOnChange,onEnterClick}) => {
    
    
  return (
    <>
      <input type="text" 
      placeholder='Enter your food here'
      value={value}
       className={styles.foodInput}
       onChange={eventOnChange}
       onKeyDown={onEnterClick}
       />
    </>
  )
}

export default FoodInput
