import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./login";
import NotesApp from ".//NotesApp";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/app" element={<NotesApp />} />
      </Routes>
    </Router>
  );
}

export default App;
