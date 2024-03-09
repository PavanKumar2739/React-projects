import styles from './Buttons.module.css'

const ButtonsContainer = ({onButtonClicked}) => {
    const buttonNames = ['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.']
  return (
    <>
      {buttonNames.map((value)=><button key={value} className={styles.button} onClick={()=>onButtonClicked(value)}>{value}</button>)}
     
    </>
  );
};

export default ButtonsContainer;
