import React, { useState } from  "react";
import {connect} from "react-redux";
import {getWordInfo} from "../actions/actions";

function SearchBar(props) {
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
            <button onClick={() => props.getWordInfo(word)} type="submit">Search</button>
        </form>
      
    )
};
const mapStateToProps = (state) => {
    return {
        wordInfo: state.wordInfo
    }
}
export default connect(mapStateToProps, {getWordInfo})(SearchBar);