import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Post from './Post.jsx'
import App from './App.jsx'
import SubmitForm from './SubmitForm.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Post/> */}
    <SubmitForm />
  </StrictMode>,
)
