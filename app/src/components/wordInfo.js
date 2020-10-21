import React from "react";

function WordCard(props){
    return(
        <div className="word-info-container">
            <h1>{props.word}</h1>
            <div className="word-description">
    <p>/{props.pronunciation}/</p>
    
    <p>{props.partOfSpeech}</p>
    <p>Definition: {props.definition}</p>
    
    <p>"{props.examples}"</p>
    <p>Synonym(s): {props.synonyms}</p>
                
            </div>
        </div>
    )
};
export default WordCard;