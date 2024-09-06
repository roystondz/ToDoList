import React from "react";

function CreateNote(){

    
    
    return(
        <div >
            <form className="create-note" >
                <input type="text" placeholder="Title" value={title} onChange={handleChange}></input>
                <input type="text" placeholder="content" value={content} onChange={handleChange}></input>
                <button onClick={submitNote}>Add</button>
            </form>
        </div>
    );
}

export default CreateNote;