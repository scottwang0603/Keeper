import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({ title: "", content: "" });

  function updateNote(event) {
    const { name, value } = event.target;

    setNote((prevValue) => {
      return { ...prevValue, [name]: value };
      /*
      if (name === title) {
        return { title: value, content: prevValue.content };
      } else if (name === content) {
        return { title: prevValue.title, content: content };
      }
      */
    });
  }

  function handleClick(event) {
    props.addFunc(note);
    setNote((prevValue) => {
      return { title: "", content: "" };
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="title"
          onChange={updateNote}
          placeholder="Title"
          value={note.title}
        />
        <textarea
          name="content"
          onChange={updateNote}
          placeholder="Take a note..."
          rows="3"
          value={note.content}
        />
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
