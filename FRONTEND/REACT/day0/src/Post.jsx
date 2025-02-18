import React, {useState, useEffect} from "react";

function Post(){
    const [post , setPost] = useState([])
    
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then((data)=>{
            const tenPost = data.slice(0,10)
            setPost(tenPost)
        })
        .catch(err => console.log(err))
    },[])
    return(
        <>
            <h1>This is the first 10 Post of Json Placeholder Api</h1>
            <ul>
                {post.map((p)=>(
                    <li>
                        <h3>{p.title}</h3>
                        <p>{p.body}</p>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Post