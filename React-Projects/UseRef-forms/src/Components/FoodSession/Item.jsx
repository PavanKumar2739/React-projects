import styles from './Food.module.css'

const Item = (props) => {
    const {foodItem} = props;// we can use destrectured one or we can keep directly in method
  return (
    <>
       <li key={props.foodItem} className={`list-group-item ${styles['food-item']}`}>
              <span className={styles['food-span']}>{foodItem}</span>
        </li>
    </>
  )
}

export default Item
