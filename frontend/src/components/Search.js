import React from 'react';
import "tailwindcss/tailwind.css"
import '../index.css';



const Search = (props) => {
    return (
        <form className=""> 
            <input type="text" className="shadow-xl"/>
            <button type="submit" className="border-4 border-light-blue-500 border-opacity-70">Search </button>
        </form>
    )
}


export default Search;


import React from "react";

