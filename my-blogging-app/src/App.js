import logo from "./logo.svg";
import "./App.css";
import Navbar from "./navbar";
import BlogList from "./Blog-List";
// useState is hook which will give user dynamic value change
import { useState } from "react";
// this ia an another hook which runs code every rendered of the component. this also happens then the state changes
import { useEffect } from "react";
import useFetch from "./customHook";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./create";
import BlogDetails from "./BlogeDetails";
import notFound from "./notfound";
function App() {
  // this how we use the useState hook
  const [another, setName] = useState("honey");
  const [age, setAge] = useState(22);

  let eventClick = () => {
    // alert("This is an alert!");
    console.log("this event");
    // here we give the item to be changed
    setName("satvika");
    setAge(30);
  };

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlog(newBlogs);
  };

  const { blogs, isPending, error } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="App">
      <Router>
        <Navbar />
        {/* here we have added routing to the pages we can get the page as we got the url endpoint given in the path */}
        <Switch>
          <Route exact path="/Blogs">
            <BlogList />
          </Route>
          <Route path="/Blogs">
            <BlogList />
          </Route>
          <Route path="/create">
            <Create/>
          </Route>
          {/* this ':id'  a route parameter which is named id*/}
          <Route path="/Blogs/:id">
            <BlogDetails/>
          </Route>
          <Route path="*">
            <notFound/>
          </Route>

        </Switch>
        <h3>
          {another} the age is {age}
        </h3>
        <button onClick={eventClick}>click me</button>
        <div className="content">App component</div>
        {/* we use props for data exchange from parent to child component */}
        {/* this is how we declare props */}
        <BlogList blogs={blogs} title="All blogs" handleDelete={handleDelete} />
        {blogs && (
          <BlogList
            blogs={blogs.filter((blog) => blog.author === "honey")}
            title="honey's blog"
          />
        )}
        {isPending && <div>loading...</div>}
        {error && <div>{error}</div>}
      </Router>
    </div>
    
  );
}

export default App;
