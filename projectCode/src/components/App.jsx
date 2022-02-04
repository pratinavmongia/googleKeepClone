import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [notes,setNote]=useState([]);

  function addingNote(titleContent) {
    // console.log(titleContent);
      setNote(prevNotes => {
        return [...prevNotes,titleContent]
      });
      //console.log(note)
      // console.log(note)
  }

  function deleteNote(id) {
    setNote((prevValue) => {
     return prevValue.filter((noteItem,index) => {
        return index !== id;
     })}
    )
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addingNote}/>
      {notes.map((currentNote,index) => {
        return <Note 
        onDel={deleteNote}
        key={index}
        id={index}
        title={currentNote.title}
        content={currentNote.content}
        />;
      })}
         {/* <Note key={index} title={currentNote.title} content="Note content" /> */}
      
      <Footer />
    </div>
  );
}

export default App;
