import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Post from './Post.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Post/>
  </StrictMode>,
)
