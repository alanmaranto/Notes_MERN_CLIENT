import React from "react";

const Users = ({ users, onSubmit, onChangeUsername, username, deleteUser }) => {
  return (
    <div className="row">
      <div className="col-md-4">
        <div className="card card-body">
          <h3>Create new user</h3>
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <input
                type="text"
                value={username}
                className="form-control"
                onChange={onChangeUsername}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Save
            </button>
          </form>
        </div>
      </div>
      <div className="col-md-8">
        <ul className="list-group">
          {users.map(user => (
            <li
              className="list-group-item list-group-item-action"
              key={user._id}
              onDoubleClick={() => deleteUser(user._id)}
            >
              {user.username}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Users;
