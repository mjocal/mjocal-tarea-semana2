import React, { Component } from "react";

export default class ToDoClasses extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
    };
  }

  async componentDidMount() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    setTimeout(() => {
      this.setState({ list: data });
    }, 2000);
  }

  render() {
    return (
      <div>
        <p>TO-DO List using Classes</p>
        <ul>
          {this.state.list.slice(5, 10).map((item) => (
            <li key={item.id}>
              <p>id: {item.id}</p>
              <p>titulo: {item.title}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
