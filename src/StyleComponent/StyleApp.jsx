import "./style.css";
const StyleApp = (props) => {
  let className = props.isValue ? "demo" : "demo2";

  const heading = {
    color: "darkblue",
    fontSize: "40px",
  };

  return (
    <>
      <div className="profile">
        <h2 className={`${className} demo3`}>Style Component</h2>
        <h3 style={heading}>This is Inline Css Apply to Line</h3>
      </div>
    </>
  );
};

export default StyleApp;
