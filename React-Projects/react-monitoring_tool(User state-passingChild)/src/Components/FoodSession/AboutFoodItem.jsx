import ModalComp from '../ModalComp'
import styles from './Food.module.css'

const AboutFoodItem = ({setIsOpen,foodItem}) => {
  return (
    
        <>
          <div className={styles.modalBase}>
              <h2>{foodItem}</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati incidunt et id sed porro atque soluta est animi dolores placeat deserunt distinctio velit dolorum aperiam suscipit quidem, eaque maxime culpa?</p>
              <div>
                <button type="button" class="btn btn-primary" onClick={()=>setIsOpen(false)} >Add</button>
                <button type="button" class="btn btn-danger" onClick={()=>setIsOpen(false)} >Close</button>
              </div>
          </div>
        </>

       
  )
}

export default AboutFoodItem
