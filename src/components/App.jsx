import React ,{useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateNote from "./Create";
import Note from "./Note";


function App(){
    const [notes , setNotes] = useState([]);

    function addNote(newNote){
        setNotes((prevNotes)=>{
            return [...prevNotes,newNote];
        })
    }




    return (
        <div>
        <Header/>
        <CreateNote onAdd={addNote}/>
        {notes.map((noteItem,index)=>{
            return <Note id={index}title={noteItem.title} content={noteItem.content}/> 
        })}
        <Footer/>
        </div>
    );
};

export default App;