import { useState } from "react";
import { useHistory } from 'react-router-dom'

const Create = () => {
    const[title, setTitle]=useState(' ');
    const[body, setBody]=useState(' ');
    const[author, setAuthor]=useState(' honey');
    const[ispending, setIspending]=useState(false);
    const history = useHistory()
    const handleSubmit =(e)=>{
        e.preventDefault();
        const blog ={title, body, author};

        setIspending(true);

        fetch("http://localhost:8000/blogs", {
            method: 'POST',
            headers:{"content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(()=>{
            console.log("new blog added")
            setIspending(false)
            // history.go(-1)
            history.push("/")
        })
    }
    return (
        <div className="adding">
            <h2>add a new blog</h2>

            <form onSubmit={handleSubmit }>
                <label>Blog title:</label>
                <input type="text" required
                // here we are doing two way binding 
                 value={title}
                 onChange={(e)=>setTitle(e.target.value)} />
                <label>Blog Body:</label>
                <textarea required
                 value={body}
                 onChange={(e)=>setBody(e.target.value)} />
                <label>Blog author:</label>
                <select 
                value={author}
                onChange={(e)=>setAuthor(e.target.value)}>
                    <operator value='honey'>Honey</operator>
                    <operator value='satvika'>satvika</operator>
                </select>
                {!ispending&&<button>Add Blog</button>}
                {ispending&&<button disabled>Adding....</button>}
            </form>
        </div>
      );
}
 
export default Create;
