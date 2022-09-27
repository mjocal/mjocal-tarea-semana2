import React, { Component } from "react";

export default class ToDoClasses extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
      users: [],
    };
  }

  getUserById = (userId) => {
    let username = this.state.users.find((item) => item.id === userId);
    username = username.name;
    return username;
  };
  async componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((result) => {
        this.setState({ list: result });
      });

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((result) => {
        this.setState({ users: result });
      });
  }

  render() {
    return (
      <div>
        <h3>TO-DO List using Classes</h3>
        <ul>
          {this.state.list.slice(38, 43).map((item) => (
            <li key={item.id}>
              <p>username: {this.getUserById(item.userId)}</p>
              <p>task id: {item.id}</p>
              <p>title: {item.title}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
