import "./App.css";

import React, { useRef, useState } from "react";

const App = () => {
  const [users, setUsers] = useState([
    { name: "Oliver", id: 1 },
    { name: "James", id: 2 },
    { name: "William", id: 3 },
    { name: "Henry", id: 4 },
  ]);
  const [nextId, setNextId] = useState(5);
  const inputUserName = useRef("");

  const addUsers = () => {
    const newUser = {
      name: inputUserName.current.value,
      id: nextId,
    };
    setNextId(nextId + 1);
    if (inputUserName.current.value !== "") {
      inputUserName.current.value = "";
      return setUsers(users.concat(newUser));
    }
  };
  const deleteUser = (id) => {
    const filteredUser = users.filter((user) => user.id !== id);
    setUsers(filteredUser);
  };

  return (
    <div className="container">
      <div className="todo-app">
        <h2>To-Do List</h2>
        <div className="row">
          <input ref={inputUserName} type="text" placeholder="Add new User" />
          <button onClick={addUsers} className="add">
            Add
          </button>
        </div>
        {users.map((user) => {
          return (
            <ul className="list" key={user.id}>
              <li className="checked">{user.name}</li>
              <button onClick={() => deleteUser(user.id)} className="delete">x</button>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default App;
