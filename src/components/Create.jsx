import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';

function CreateNote(props) {
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
    props.onAdd(note);
    event.preventDefault();
    
    console.log("Note Submitted:", note);
    
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
        <button type="submit"><AddIcon/></button>
      </form>
    </div>
  );
}

export default CreateNote;
