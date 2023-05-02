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
import UseEffect from "./useEffect/UseEffect";
import ApiCall from "./ApiCalling/ApiCall";
import Parent from "./ChildToParent/Parent";
import Parents from "./ParenToChild/Parents";
import Forms from "./Form/Forms";
import FilterTable from "./Search&Check/FilterTable.";
import CrudLocalstorage from "./CrudWithLocalStorage/CrudLocalstorage";
import Hoc from "./HigherOrderComponent/Hoc";
import AxiosCrud from "./ApiCalling/AxiosCrud";
import Context from "./Context/Context";
import UseReducers from "./UseReducers/UseReducers";
import UseReducers2 from "./UseReducers/UseReducers2";
import UseReducers3 from "./UseReducers/UseReducers3";
import UseReducers4 from "./UseReducers/UseReducers4";
import MainFile from "./ReducerUseContext/MainFile";
import UseReducers5 from "./UseReducers/UseReducers5";
import FetchApiUseReducer from "./UseReducers/FetchApiUseReducer";
import UseRef from "./UseRef/UseRef";
import CustomHook from "./CustomHook/CustomHook";

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
    "useEffect",
    "Api Calling using Axios",
    "Parent to Child",
    "Child to Parent",
    "Form in React",
    "Search&CheckBox",
    "CRUD",
    "Higher Order Component",
    "Context",
    "UseReducer",
    "useReducer with useContext",
    "UseRef",
    "Custome Hook",
  ];

  const PRODUCTS = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
    { category: "Juice", price: "$5", stocked: true, name: "Banana" },
    { category: "Juice", price: "$3", stocked: false, name: "Mango  " },
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
      case "useEffect":
        return <UseEffect />;
      case "Api Calling using Axios":
        return <ApiCall />;
      case "Parent to Child":
        return <Parents />;
      case "Child to Parent":
        return <Parent />;
      case "Form in React":
        return <Forms />;
      case "Search&CheckBox":
        return <FilterTable products={PRODUCTS} />;
      case "CRUD":
        return (
          <>
            <CrudLocalstorage />
            <AxiosCrud />
          </>
        );
      case "Higher Order Component":
        return <Hoc hello={"Hello"} />;
      case "Context":
        return <Context />;
      case "UseReducer":
        return (
          <>
            <h2>Codevaluation video-22</h2>
            <UseReducers />
            <UseReducers2 />
            <UseReducers3 />
            <UseReducers4 />
            <UseReducers5 />
            <FetchApiUseReducer />
          </>
        );
      case "useReducer with useContext":
        return <MainFile />;
      case "UseRef":
        return <UseRef />;
      case "Custome Hook":
        return <CustomHook />;
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
