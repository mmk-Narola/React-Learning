import { useState } from "react";

type GreetProp = {
  name: string;
  version?: number;
};

const Greet = (prop: GreetProp) => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div>
      <h2>
        {isLogin
          ? `Welcome ${prop.name}! , This is React + Typescript course base on ${prop.version} with simple type `
          : `Welcome Guest with simple type `}
      </h2>
      <button onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? "Logout" : "Login"}
      </button>
    </div>
  );
};

export default Greet;
