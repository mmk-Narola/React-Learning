import React, { useContext } from "react";

const UserContext = React.createContext();

const Context = () => {
  return (
    <div className="profile">
      Context
      <UserContext.Provider value={"Context Hello.."}>
        <ComponentC />
        <ComponentA />
      </UserContext.Provider>
    </div>
  );
};

export default Context;

function ComponentA() {
  const user = useContext(UserContext);
  return (
    <>
      <h2>Component A {user} </h2>
    </>
  );
}

function ComponentB() {
  return (
    <>
      <h2>Component B</h2>
    </>
  );
}

function ComponentC() {
  return (
    <>
      <UserContext.Consumer>
        {(user) => {
          return (
            <div>
              <h2>Component C {user}</h2>
            </div>
          );
        }}
      </UserContext.Consumer>
    </>
  );
}
