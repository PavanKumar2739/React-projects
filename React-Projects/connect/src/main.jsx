import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import PostListProvider from './store/posts-list-store.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <PostListProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </PostListProvider>
)
