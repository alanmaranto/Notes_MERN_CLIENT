import React, { Component } from "react";
import axios from "axios";
import Notes from "../../views/Notes";

const initialState = {
  users: [],
  userSelected: "",
  date: new Date(),
  title: '',
  content: '',
};

class Note extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  componentDidMount() {
    this.getUsers();
  }

  getUsers = async () => {
    const users = await axios.get("http://localhost:3000/users");
    this.setState({ users: users.data.body });
  };

  onInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    const { title, content, date, userSelected } = this.state
    console.log(title, content, date, userSelected)
    e.preventDefault();
  };

  onChangeDate = date => {
    this.setState({ date })
  }

  render() {
    const { users, date, userSelected } = this.state;
    return (
      <Notes
        users={users}
        userSelected={userSelected}
        onSubmit={this.onSubmit}
        onInputChange={this.onInputChange}
        onChangeDate={this.onChangeDate}
        date={date}
      />
    );
  }
}

export default Note;
