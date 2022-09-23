import React from "react";

export const ToDoFunctions = () => {
  const [list, setList] = React.useState([]);

  async function getTodos() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    setList(data);
  }

  React.useEffect(() => {
    setTimeout(() => {
      getTodos();
    }, 1000);
  }, []);

  return (
    <div>
      <h3>TO-DO List using Functions</h3>
      <ul>
        {list.slice(0, 5).map((item) => (
          <li key={item.id}>
            <p>id: {item.id}</p>
            <p>titulo: {item.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
