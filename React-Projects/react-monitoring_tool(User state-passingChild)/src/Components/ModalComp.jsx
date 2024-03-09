

const ModalComp=({children})=>{
    <div style={styles} >
        {children}
   </div>
}
export default ModalComp;

const styles ={
    top: '0%',
    left: '0%',
    minHeight: '100%',
    minWidth: '100%',
    zIndex: '2000px',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Add some transparency to the background
    position: 'fixed', // Make it a fixed position to cover the entire screen
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}
