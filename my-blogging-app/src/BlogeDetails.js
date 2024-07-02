import { useParams } from "react-router-dom";
import useFetch from "./customHook";
import { useHistory } from 'react-router-dom'

const BlogDetails = () => {
    // this allow use to grabe parameter or route parameters from the route
    const { id }= useParams()
    const { blogs, isPending, error } = useFetch("http://localhost:8000/blogs/"+id);
    const history = useHistory();
    const handlebutdelet = ()=>{
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'
        }).then(()=>{
            history.push('/')
        })
    }
    return ( 

        <div className="Details">
            <h1>this is Blog Details Page - {id}</h1>
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blogs && 
            <article>
                 <h3>{blogs.title}</h3>
                 <h6>by, {blogs.author}</h6>
                 <p>{blog.body}</p>
                 <button onClick={handlebutdelet}>delete</button>
            </article>}
        </div>
     );
}
 
export default BlogDetails;