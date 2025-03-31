import { useState } from 'react'
import UserLogin from './components/UserLogin'
import ChatContainer from './components/ChatContainer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <UserLogin></UserLogin> */}

      <ChatContainer/>
    </>
  )
}

export default App
