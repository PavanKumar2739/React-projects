import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css"
import {Provider} from 'react-redux'
import counterStore from './store/store.js'

//once the store created and exported and then we need to use that here 
//By using the react-redux we can do that with provider as shown below

ReactDOM.createRoot(document.getElementById('root')).render(
  //5
  <React.StrictMode>
    <Provider store={counterStore}>
    <App />
    </Provider>
    
  </React.StrictMode>,
)

