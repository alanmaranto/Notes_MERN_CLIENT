import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navigation from "./containers/Navigation";
import NotesList from "./components/notes/NotesList";
import AddNote from "./components/notes/AddNote";
import User from "./components/user/AddUser";

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/" component={NotesList} />
        <Route path="/edit/:id" component={AddNote} />
        <Route path="/create" component={AddNote} />
        <Route path="/user" component={User} />
      </Switch>
    </Router>
  );
}

export default App;