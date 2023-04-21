import React, { useState } from "react";

const Child = (props) => {
  const [userName, setUserName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    props.sendName(userName);
    setUserName(" ");
  }
  return (
    <>
      <div className="profile">
        This is Child Component <br />
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <button>Submit</button>
        </form>
      </div>
    </>
  );
};

export default Child;
