import React, { Component } from "react";
import axios from "axios";

const initialState = {
  users: [],
  username: ""
};
class AddUser extends Component {
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

  onChangeUsername = (e) => {
    this.setState({
        username: e.target.value
    })
  };

  render() {
    const { users, username } = this.state;
    return (
      <div className="row">
        <div className="col-md-4">
          <div className="card card-body">
            <h3>Create new user</h3>
            <form>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  onChange={this.onChangeUsername}
                />
              </div>
            </form>
          </div>
        </div>
        <div className="col-md-8">
          <ul className="list-group">
            {users.map(user => (
              <li
                className="list-group-item list-group-item-action"
                key={user._id}
              >
                {user.username}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default AddUser;
