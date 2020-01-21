import React from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Notes = ({ onSubmit, users, onInputChange, date, onChangeDate }) => {
  return (
    <div className="col-md-6 offset-md-3">
      <div className="card card-body">
        <h4>Create a note</h4>
        <div className="form-group">
          <select
            name="userSelected"
            className="form-control"
            onChange={onInputChange}
          >
            {users.map(user => (
              <option key={user._id} value={user}>
                {user.username}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <input
            type="text"
            className="form-control"
            onChange={onInputChange}
            placeholder="Title"
            name="title"
            required
          />
        </div>

        <div className="form-group">
          <textarea
            name="content"
            placeholder="Content"
            className="form-control"
            onChange={onInputChange}
            required
          />
        </div>

        <div className="form-group">
            <DatePicker className="form-control" selected={date} onChange={onChangeDate}/>
        </div>
        <form onSubmit={onSubmit}>
          <button className="btn btn-primary">Save</button>
        </form>
      </div>
    </div>
  );
};

export default Notes;
