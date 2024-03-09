import { useState } from "react"

const ClockSlogan=()=>{
    const [time,setTime] = useState('');
    setTimeout(
        function(){
            const date = new Date();
            setTime(date.toLocaleDateString()+"-"+date.toLocaleTimeString())
        }
        
    ,1000)
    return(
        <div>
            <p className="lead">
                This is the clock that shows the time in Bharat at all times
            </p>
            <p>
                This is the current time : {time}
            </p>
        </div>
    )
}
export default ClockSlogan;