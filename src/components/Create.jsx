import React, { useState } from "react";

function CreateNote() {
  // State for title and content
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  // Handle changes in input fields
  function handleChange(event) {
    const { name, value } = event.target;
    setNote(prevNote => ({
      ...prevNote,
      [name]: value
    }));
  }

  // Handle form submission
  function submitNote(event) {
    event.preventDefault();
    console.log("Note Submitted:", note);
    // You can add further processing here, e.g., saving the note
    // Clear the form fields after submission
    setNote({
      title: "",
      content: ""
    });
  }

  return (
    <div>
      <form className="create-note" onSubmit={submitNote}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={note.title}
          onChange={handleChange}
        />
        <input
          type="text"
          name="content"
          placeholder="Content"
          value={note.content}
          onChange={handleChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateNote;
