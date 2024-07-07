import React, { useState } from "react";

function ChecklistToDoList() {
  const [newNote, setNewNote] = useState("");
  const [notes, setNotes] = useState([]);

  function handleNewNoteChange(event) {
    setNewNote(event.target.value);
  }

  function handleAddNote() {
    if (newNote.trim()) {
      setNotes(prevNotes => [...prevNotes, { text: newNote, checked: false }]);
      setNewNote(""); // Clear input field after adding the note
    }
  }

  function handleCheckboxChange(index) {
    setNotes(prevNotes =>
      prevNotes.map((note, i) =>
        i === index ? { ...note, checked: !note.checked } : note
      )
    );
  }

  return (
    <div className="checklist-todo-list-container">
      <h1>Checklist</h1>
      <div className="form">
        <input
          type="text"
          value={newNote}
          onChange={handleNewNoteChange}
          placeholder="Add a new task..."
        />
        <button onClick={handleAddNote}>
          <span>Add</span>
        </button>
      </div>
      <ul className="checklist-todo-list">
        {notes.map((note, index) => (
          <li
            key={index}
            style={{ textDecoration: note.checked ? "line-through" : "none" }}
          >
            <input
              type="checkbox"
              checked={note.checked}
              onChange={() => handleCheckboxChange(index)}
            />
            {note.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ChecklistToDoList;

