import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { DragDropContext } from "react-beautiful-dnd";
import { Droppable } from "react-beautiful-dnd";
import { Draggable } from "react-beautiful-dnd";


function App() {

  const [notes,setNote]=useState([]);

  function handleDrop (Note) {
    if(!Note.destination) return;
    var updatedList = [...notes];
    const [reorderedItem] = updatedList.splice(Note.source.index,1);
    updatedList.splice(Note.destination.index,0,reorderedItem);
    setNote(updatedList);
  }

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
      <DragDropContext onDragEnd={handleDrop}>
      <Droppable droppableId="list-container">
      {(provided) => (
        <div className="list-container" 
        {...provided.droppableProps}
        ref={provided.innerRef}
        >
      
      {/* <div className="list-conatiner"
      {...provided.droppableProps}
      ref={provided.innerRef}> */}
      {notes.map((currentNote,index) => (
         <Draggable key={currentNote.title} draggableId={currentNote.title} index={index}>
         {(provided) => (
           <div className="item-container" 
           ref={provided.innerRef} 
           {...provided.dragHandleProps}
           {...provided.draggableProps}>
         
         <Note 
        onDel={deleteNote}
        key={index}
        id={index}
        title={currentNote.title}
        content={currentNote.content}
        />
        </div>
        )}
       </Draggable>
      ))}
      {provided.placeholder}
      </div>
      )}
      {/* </Draggable> */}
      </Droppable>
         {/* <Note key={index} title={currentNote.title} content="Note content" /> */}
         </DragDropContext>
      <Footer />
    </div>
  );
}

export default App;
