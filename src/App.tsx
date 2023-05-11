import { useState } from "react";
import Greet from "./components/Greet";
import PersonObj from "./components/PersonObj";
import PersonArray from "./components/PersonArray";
import AdvanceProps from "./components/AdvanceProps/Status";
import { Button } from "./components/EventProps/Button";
import UseState from "./components/State&Hook/UseState";
import UseReducers from "./components/State&Hook/UseReducers";
import UseContext from "./components/Context/UseContext";
import UseRef from "./components/UseRef/UseRef";

function App() {
  const [topic, setTopic] = useState("simpleType");

  const btnLabel = [
    "simpleType",
    "TypeWithObj",
    "TypeWithArray",
    "AdvanceProps",
    "EventProps",
    "useStateHook",
    "useReducersHook",
    "UseContext",
    "UseRef",
  ];

  const personObj = {
    name: "Mahesh Kshirsagar",
    des: "Software Engineer",
    age: 22,
  };

  const PersonList = [
    {
      name: "Krushna D",
      age: 30,
    },
    {
      name: "Yash P",
      age: 24,
    },
    {
      name: "Bhavyang J",
      age: 23,
    },
    {
      name: "Mahesh K",
      age: 22,
    },
    {
      name: "New Mili",
      age: 18,
    },
  ];

  const switchTab = () => {
    switch (topic) {
      case "simpleType":
        return <Greet name={"Mahesh Kshirsagar"} version={18.2} />;
      case "TypeWithObj":
        return <PersonObj PersonObj={personObj} />;
      case "TypeWithArray":
        return <PersonArray nameList={PersonList} />;
      case "AdvanceProps":
        return <AdvanceProps />;
      case "EventProps":
        return (
          <Button
            handleClick={() => {
              console.log("Button Clicked");
            }}
          />
        );
      case "useStateHook":
        return <UseState />;
      case "useReducersHook":
        return <UseReducers />;
      case "UseContext":
        return <UseContext />;
      case "UseRef":
        return <UseRef />;
      default:
        break;
    }
  };

  return (
    <div className="App">
      {btnLabel.map((label) => {
        return (
          <button
            key={label}
            onClick={() => {
              setTopic(label);
            }}
          >
            {label}
          </button>
        );
      })}
      <hr />
      <div className="output">{switchTab()}</div>
    </div>
  );
}

export default App;
