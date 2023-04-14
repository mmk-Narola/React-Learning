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

function App() {
  const [value, setValue] = useState("Props");

  const btnLabel = [
    "Props",
    "ConditionalRendering",
    "Rendering List",
    "useState",
    "Object in State",
    "Array in State",
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
        return <PackingList />;
        break;

      default:
        break;
    }
  };

  return (
    <>
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
    </>
  );
}

export default App;
