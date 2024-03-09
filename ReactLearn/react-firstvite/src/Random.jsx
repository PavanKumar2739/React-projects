import React from 'react'

const Random = () => {
    let number = Math.random()*10;
  return (
    <div style={{backgroundColor:'skyblue'}}>
        <h4>Random number is : {Math.round(number)}</h4>
    </div>
  )
}

export default Random;
