import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./containers/Navbar";
import NotesList from "./components/notes/NotesList";
import AddNote from "./components/notes/AddNote";
import User from "./containers/User";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container p-4">
        <Switch>
          <Route exact path="/" component={NotesList} />
          <Route path="/edit/:id" component={AddNote} />
          <Route path="/create" component={AddNote} />
          <Route path="/user" component={User} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
