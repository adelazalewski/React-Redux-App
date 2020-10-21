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
        <>
        <header>Dictionary Search Bar</header>
        <form onSubmit={onSubmit}>
            <input type="text" placeholder="word" value={word} onChange={changeHandle} />
            <button type="submit">Search</button>
        </form>
        </>
    )
};

export default SearchBar;