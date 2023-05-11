import { useEffect, useState } from "react";

interface IUser {
  id: number;
  name: string;
  email: string;
}

type AuthUser = {
  name: string;
  email: string;
};

const UseState = () => {
  const [name, setName] = useState<string>("Mahesh Kshirsagar");
  const [age, setAge] = useState<number>(21);
  const [isProgrammer, setIsProgrammer] = useState<boolean>(true);

  const [user, setUser] = useState<AuthUser | null>(null);
  // const [user, setUser] = useState<AuthUser>({} as AuthUser); // this is useState Type Assertion

  const [users, setUsers] = useState<IUser[]>([
    {
      id: 1,
      name: "Gabriel Rufino",
      email: "contato@gabrielrufino.com",
    },
    {
      id: 1,
      name: "Darth Vader",
      email: "darthvader@starwars.com",
    },
    {
      id: 1,
      name: "Luke Skywalker",
      email: "lukeskywalker@starwars.com",
    },
  ]);

  const handleLogin = () => {
    setUser({
      name: "Mahesh Kshirsagar",
      email: "mahesh@gmail.com",
    });
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div>
      UseState + Typescripts
      <ul>
        <li>Name: {name}</li>
        <li>Age: {age}</li>
        <li>Programmer: {isProgrammer ? "Yes" : "No"}</li>
      </ul>
      <br />
      <ul>
        {users.map((user) => (
          <li key={user.name}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <h2>User Name : {user?.name}</h2>
      <h2>User Email : {user?.email}</h2>
    </div>
  );
};

export default UseState;
