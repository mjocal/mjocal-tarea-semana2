import React from "react";

export const ToDoFunctions = () => {
  const [list, setList] = React.useState([]);
  const [users, setUsers] = React.useState([]);

  const getUserById = (userId) => {
    let username = users.find((item) => item.id === userId);
    username = username.name;
    return username;
  };

  async function getTodos() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((result) => {
        setList(result);
      });
  }

  async function getUsers() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((result) => {
        setUsers(result);
      });
  }

  React.useEffect(() => {
    getTodos();
    getUsers();
  }, []);

  return (
    <div>
      <h3>TO-DO List using Functions</h3>
      <ul>
        {list.slice(17, 22).map((item) => (
          <li key={item.id}>
            <p>username: {getUserById(item.userId)}</p>
            <p>task id: {item.id}</p>
            <p>title: {item.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
