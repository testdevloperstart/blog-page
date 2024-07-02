import { Link } from "react-router-dom";

const notFound = () => {
    return ( 
        <div className="notfound">
            <h2>sorry</h2>
            <p>this page is hot found</p>
            <Link to="/">Back to the HomePage...</Link>
        </div>
     );
}
 
export default notFound;