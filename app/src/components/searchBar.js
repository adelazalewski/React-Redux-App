import React, { useState } from  "react";

function SearchBar() {
    const [word, setWord] = useState("")
    const changeHandle = (e) => {
setWord(e.target.value);
    }
    const onSubmit = (e) => {
        e.preventDefault();
        setWord("");
    }
    return(
    
        <form onSubmit={onSubmit}>
            <label htmlFor="word">Dictionary:</label>
            <input name="word" type="text" placeholder="     word" value={word} onChange={changeHandle} />
            <button type="submit">Search</button>
        </form>
      
    )
};

export default SearchBar;