 const Hello = () => {
    let myName = 'Pavan'
    let fullName = ()=>{
        return myName,' Kumar';
    }
  return (
    <h3>This is the future speaking.!, My name is {fullName()}</h3>
  )
}

export default Hello;