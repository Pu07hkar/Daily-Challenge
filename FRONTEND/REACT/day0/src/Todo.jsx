import { useState } from "react";

function Todo(){
    let [userinput, setUserinput] = useState("")
    let [todo, setTodo] = useState([]);

    function AddTodo(){
        if(userinput.trim() != ""){
            setTodo([...todo, userinput])
            setUserinput("");
        }
       
    }
    return(
        <>
        <div>
            <h2>Add Todo in the list</h2>
            <input type="text" placeholder="Enter Todo" value={userinput} onChange={(e)=>{setUserinput(e.target.value)}}/>
            <button onClick={AddTodo} style={{margin:"2px"}}>Add</button>
            <ul>
                {todo.map((item)=>{
                    return <li>{item}</li>
                })}
            </ul>
        </div>
        </>
    )
}

export default Todo;
