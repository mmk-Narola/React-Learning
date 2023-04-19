import { Routes, Route, Link, NavLink } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Posts from "./Posts";
import Post from "./Post";
import Newpost from "./Newpost";
import Layout from "./Layout";
import PageNotFound from "./PageNotFound";
import MainRoute from "./RouterDataPass/MainRoute";
import UserDetails from "./RouterDataPass/UserDetails";
import InputForm from "./RouterDataPass/InputForm";
import Products from "./QueryParams/Products";

const RoutingDemo = () => {
  return (
    <>
      <h1>React Router Dom</h1>
      <Link to="/home">Home</Link>
      {"  "}
      <Link to="/contact">Contact</Link> {"  "}
      <Link to="/about">About</Link>
      {"  "}
      <Link to="/posts">Posts</Link>
      {"  "}
      <Link to="/mainroute">Access-Url-Data</Link> {"  "}
      <Link to="/queryparam">Quesry-Param-Example</Link>
      {/* <NavLink
        to="/about"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        <h2>NavLink</h2>
      </NavLink>{" "} */}
      <hr></hr>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/mainroute">
          <Route index element={<InputForm />}></Route>
          <Route path="details" element={<UserDetails />}></Route>
        </Route>
        <Route path="queryparam" element={<Products />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
        {/* <Route path="/posts" element={<Posts />}></Route>
        <Route path="/posts/:id" element={<Post />}></Route> */}

        {/* Nested Routed */}
        <Route path="/posts" element={<Layout />}>
          <Route index element={<Posts />}></Route>
          <Route path=":id" element={<Post />}></Route>
          <Route path="newposts" element={<Newpost />}></Route>
        </Route>
      </Routes>
    </>
  );
};

export default RoutingDemo;

/*  <NavLink
        to="/messages"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        Messages
      </NavLink>
      ;
      <NavLink to="/home">
        <h2>NavLink</h2>
      </NavLink>
      <Link to="/home">Home</Link>
      {"  "}
      <Link to="/contact">Contact</Link> {"  "}
      <Link to="/about">About</Link>{" "}
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>*/
