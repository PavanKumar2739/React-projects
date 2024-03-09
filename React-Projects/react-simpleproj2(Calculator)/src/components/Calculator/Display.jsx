import styles from './Display.module.css'

const Display = ({displayVal}) => {
  return (
    <>
      <input type="text" id="display" className={styles.display} value={displayVal} readOnly/>
    </>
  )
}

export default Display
