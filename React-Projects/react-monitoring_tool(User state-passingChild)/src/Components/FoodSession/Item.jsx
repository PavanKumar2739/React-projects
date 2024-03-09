import { useState } from 'react';
import styles from './Food.module.css'
import AboutFoodItem from './AboutFoodItem';

const Item = (props) => {
    const {foodItem,handleOpen,handleBuyClicked,bought} = props;// we can use destrectured one or we can keep directly in method

    const handleBuy=(e)=>{
      console.log(e)
      handleOpen() 
      console.log('Bought :',foodItem)
    }
  
  return (
    <>
       
       <li key={props.foodItem} className={`list-group-item ${bought?'active':null} ${styles['food-item']} `}>
              <span className={styles['food-span']}>{foodItem}</span>
              <button backgroundColor={bought?'red':''} className={`btn btn-info ${styles.buttons}`} onClick={()=>handleBuyClicked(foodItem)}>{!bought?'Buy':'Remove'}</button>
        </li>
    </>
  )
}

export default Item
