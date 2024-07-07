import React, { useState } from "react";
import Header from "./header";
import Footer from "./footer";
import Note from "./note";
import CreateArea from "./CreateArea";
import ChecklistToDoList from "./ChecklistToDoList";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => [...prevNotes, newNote]);
  }

  function deleteNote(id) {
    setNotes(prevNotes => prevNotes.filter((note, index) => index !== id));
  }

  return (
    <div className="app-container">
      <Header />
      <div className="main-content">
        <ChecklistToDoList />
        <div className="notes-container">
          <CreateArea onAdd={addNote} />
          {notes.map((note, index) => (
            <Note
              key={index}
              id={index}
              title={note.title}
              content={note.content}
              onDelete={deleteNote}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
