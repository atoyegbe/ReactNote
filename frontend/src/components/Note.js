import React from "react";
import '../index.css';


const Note = (props) => {
    return (
            <div key={props.id} className="border border-dotted m-2 border-green-400 rounded-md" >
            <h2>{props.title} </h2>
            <p>{props.note}</p>
            <hr />
          <span>
              <button className="p-1 font-semibold cursor-pointer transition ease-in-out duration-700 bg-blue-700"> update </button> 
              <button className="p-1  font-semibold cursor-pointer transition ease-in-out duration-700 bg-blue-700" onClick={()=> props.handleDelete(props.id)}>Delete</button></span>
        </div>
    )
}


export default Note;