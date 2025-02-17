import { useState } from "react"

function App() {
    const [cout, setCount] = useState(0)

    const increment =()=>{
      setCount(cout+1);
    }
    const decrement =()=>{
      if(cout>0){
        setCount(cout-1);
      }
      
    }
  return (
    <>
    <div>
      <h1 >{cout}</h1>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
    </div>
      
    </>
  )
}

export default App
