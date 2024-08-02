import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

function NotesApp() {
  const navigate = useNavigate();
  const [notes, setNotes] = useState([
    { id: 1, content: "Buy groceries" },
    { id: 2, content: "Read a book" },
    { id: 3, content: "Go for a walk" },
  ]);
  const [note, setNote] = useState("");
  const [editId, setEditId] = useState(null);
  const [viewing, setViewing] = useState(false);

  const handleSaveNote = () => {
    if (note.trim() !== "") {
      if (editId !== null) {
        setNotes(
          notes.map((n) => (n.id === editId ? { ...n, content: note } : n))
        );
        setEditId(null);
      } else {
        setNotes([...notes, { id: notes.length + 1, content: note }]);
      }
      setNote("");
    }
  };

  const handleEditNote = (id) => {
    const noteToEdit = notes.find((note) => note.id === id);
    setNote(noteToEdit.content);
    setEditId(noteToEdit.id);
  };

  const handleDeleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const handleViewNotes = () => {
    setViewing(true);
  };

  const handleCloseView = () => {
    setViewing(false);
  };

  const handleLogout = () => {
    // Clear authentication token or any other relevant data
    navigate("/");
  };

  return (
    <div className="App">
      <div className="note-container">
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
        <div className="note-input">
          <h1>Note App</h1>
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Enter your note here..."
          />
          <br />
          <button onClick={handleSaveNote}>
            {editId !== null ? "Save Edit" : "Save Note"}
          </button>
          <button onClick={handleViewNotes}>View Notes</button>
        </div>
        {viewing && (
          <div className="note-view">
            <button onClick={handleCloseView} className="close-button">
              Close View
            </button>
            <h2>Notes List</h2>
            <ul>
              {notes.map((note) => (
                <li key={note.id}>
                  {note.content}
                  <div>
                    <button onClick={() => handleEditNote(note.id)}>
                      Edit
                    </button>
                    <button onClick={() => handleDeleteNote(note.id)}>
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default NotesApp;
