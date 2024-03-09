import { useContext } from 'react';
import styles from './Welcome.module.css'
import { TodoItemsContext } from '../store/todo-items-store';

const WelcomeMessage = () => {
  const {todoItems} = useContext(TodoItemsContext);//link created to store context will the values
  
  return (
    <>
      {todoItems.length==0&&<p className={styles.welcome}>Enjoy Your day</p>}
    </>
  )
}

export default WelcomeMessage
