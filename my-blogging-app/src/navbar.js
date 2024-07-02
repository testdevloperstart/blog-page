import { Link } from "react-router-dom";
const Navbar  = () => {
    return ( 
        <div className="navbar">
        <h1>Blog Page</h1>
        <div className="links">
            {/* this how we link the pages  */}
            <Link to="/create">New blog</Link>
        </div>
        </div> 
    );
}
 
export default Navbar;