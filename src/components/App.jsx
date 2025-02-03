import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [noteList, setNoteList] = useState([]);

  function addNote(note) {
    setNoteList((prevItems) => {
      return [note, ...prevItems];
    });
  }

  function deleteNote(id) {
    setNoteList((prevItems) => {
      return noteList.filter((note, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea addFunc={addNote} />
      {noteList.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          deleteFunc={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
