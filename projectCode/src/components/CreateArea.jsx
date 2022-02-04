import React, { useState } from "react";

function CreateArea(props) {
  
  const [titleContent,setTitleContent]=useState({
      title:'',
      content:''
  })
  // const [items,setItems]=useState([])

  function onChanging(event) {
    const {value,name}=event.target;
        setTitleContent((prevValue) => {
          return {
           ...prevValue,
           [name]:value
          };  
        })
  }

  function clickAdd(event)
  {
    event.preventDefault();
    setTitleContent({
     title:'',
     content:''
    });
    props.onAdd(titleContent);
  }
  return (
    <div>
      <form>
        <input name="title" placeholder="Title" onChange={onChanging} value={titleContent.title}/>
        <textarea name="content" placeholder="Take a note..." rows="3" onChange={onChanging} value={titleContent.content}/>
        <button onClick={clickAdd}>Add</button>
        
      </form>
    </div>
  );
}

export default CreateArea;
