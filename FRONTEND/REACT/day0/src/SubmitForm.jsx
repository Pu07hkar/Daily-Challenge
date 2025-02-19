import { useState } from "react";


function SubmitForm(){
    let [username, setUsername] = useState("");
    let [email, setEmail] = useState("");

    let isDisable = !username || !email;
    return(
        <>
        <div>
            <h2>Form Submission</h2>
            <input type="text" placeholder="Username" value={username} onChange={(e)=> setUsername(e.target.value)}/>
            <input type="email" placeholder="Email" value={email} onChange={(e)=> setEmail(e.target.value)}/>

            <button disabled={isDisable} onClick={()=>{setUsername(""); setEmail("")}}>Save</button>
        </div>
        </>
    )
}

export default SubmitForm;