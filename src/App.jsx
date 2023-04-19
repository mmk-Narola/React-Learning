import { useState } from "react";
import "./App.css";
import PackingList from "./ConditionalRendering/PackingList";
import Example1 from "./ObjectInState/Example1";
import Gallary from "./Props/Gallery";
import RenderingList from "./RenderingList/RenderingList";
import StateUse from "./useStateUse/StateUse";
import ArrExample1 from "./ArrayInState/ArrExample1";
import StyleApp from "./StyleComponent/StyleApp";
import RoutingDemo from "./Routing/RoutingDemo";
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
    "Routing",
  ];

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
      case "Routing":
        return <RoutingDemo />;
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
      {/* <Demo /> */}
    </>
  );
}

export default App;
