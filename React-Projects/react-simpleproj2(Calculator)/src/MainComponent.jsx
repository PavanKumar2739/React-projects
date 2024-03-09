import { useState } from "react"
import Calculator from "./components/Calculator/Calculator";

const MainComponent = () => {
    const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  return (
    <>
      <button onClick={()=>setIsCalculatorOpen(!isCalculatorOpen)} style={{marginLeft:'90%', marginTop:'2%'}}>Calculate</button>
      {isCalculatorOpen&&<Calculator/>}
    </>
  )
}

export default MainComponent
