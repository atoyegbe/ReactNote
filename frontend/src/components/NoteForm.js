import React from "react";
import '../index.css'

const NoteForm = (props) => {
    return (
            <form className="grid grid-rows-3 gap-4 flex space-y-6" onSubmit={props.onSubmit}>
                    <input 
                        name="title" 
                        type="text"
                        placeholder="Your Note title"
                        className="border border-blue rounded-md focus:bg-white border border-transparent shadow-inner shadow-lg"
                        onChange={props.onChange}
                        value={props.title}
                    />
                <br />
                    <textarea
                    name="note"
                    className="border rounded-md shadow-inner shadow-lg"
                    placeholder="Your Note..."
                    onChange={props.onChange}
                    value={props.note} 
                    />
               <button type="submit" className="w-24 bg-green-500 max-w-md"> Create </button>
            </form>
    )
}


export default NoteForm;

