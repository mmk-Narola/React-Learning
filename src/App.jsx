import { useState } from "react";
import "./App.css";
import PackingList from "./ConditionalRendering/PackingList";
import Example1 from "./ObjectInState/Example1";
import Example2 from "./ObjectInState/Example2";
import Example3 from "./ObjectInState/Example3";
import Example4 from "./ObjectInState/Example4/Example4";
import Gallary from "./Props/Gallery";
import RenderingList from "./RenderingList/RenderingList";
import StateUse from "./useStateUse/StateUse";
import Demo from "./Demos/Demo";
import ArrExample1 from "./ArrayInState/ArrExample1";
import StyleApp from "./StyleComponent/StyleApp";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import Home from "./Routing/Home";
import Contact from "./Routing/Contact";
import About from "./Routing/About";
function App() {
  const [value, setValue] = useState("Props");

  const btnLabel = [
    "Props",
    "ConditionalRendering",
    "Rendering List",
    "useState",
    "Object in State",
    "Array in State",
    "Style Component",
  ];

  const handleTab = () => {};

  const switchTab = () => {
    switch (value) {
      case "Props":
        return <Gallary />;
        break;
      case "ConditionalRendering":
        return <PackingList />;
        break;
      case "Rendering List":
        return <RenderingList />;
        break;
      case "useState":
        return <StateUse />;
        break;
      case "Object in State":
        return <Example1 />;
        break;
      case "Array in State":
        return <ArrExample1 />;
        break;

      case "Style Component":
        return <StyleApp isValue={true} />;
        break;

      default:
        break;
    }
  };

  return (
    <>
      <h2>Technical Suneja Video React - 19</h2>
      {btnLabel.map((label) => {
        return (
          <button
            key={label}
            onClick={() => {
              setValue(label);
            }}
          >
            {label}
          </button>
        );
      })}
      {switchTab()}
      {/* <Gallary />
      <PackingList />
      <RenderingList />
      <StateUse />
      <Example1 />
      <Example2 />
      <Example3 />
      <Example4 /> */}
      {/* <Demo /> */}
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
      </Routes>
    </>
  );
}

export default App;
