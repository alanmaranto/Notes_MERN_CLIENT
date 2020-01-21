import React, { Component } from "react";
import axios from "axios";
import Users from "../../views/Users";

const initialState = {
  users: [],
  username: ""
};

class User extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  componentDidMount() {
    this.getUsers();
  }

  getUsers = async () => {
    const response = await axios.get("http://localhost:3000/users");
    this.setState({ users: response.data.body });
  };

  onChangeUsername = e => {
    this.setState({
      username: e.target.value
    });
  };

  onSubmit = async e => {
    const { username } = this.state;
    e.preventDefault();

    const data = {
      username
    }
    const res = await axios.post("http://localhost:3000/users", data);
    this.setState({ username: ''})
    this.getUsers()
  };

  deleteUser = async (id) => {
    await axios.delete(`http://localhost:3000/users/${id}`)
    this.getUsers()
  }

  render() {
    const { users, username } = this.state;
    return (
      <div>
        <Users
          users={users}
          username={username}
          onSubmit={this.onSubmit}
          deleteUser={this.deleteUser}
          onChangeUsername={this.onChangeUsername}
        />
      </div>
    );
  }
}

export default User;
