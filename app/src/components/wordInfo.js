import React from "react";
import {connect} from  "react-redux";

function WordCard(props){
    console.log("state: ", props);
    // const resultFirstPsition = props.wordInfo.results.filter((element) => element[0]);
    // console.log(resultFirstPsition);
    return(
        <div className="word-info-container">
            <h1>{props.wordInfo.word}</h1>
            {/* <p>/{props.wordInfo.pronunciation.all}/</p> */}
            <div className="word-description">
    
    
    {/* <p>{props.wordInfo.results[0].partOfSpeech}</p>
    <p>Definition: {props.wordInfo.results[0].definition}</p>
    
    <p>"{props.wordInfo.results[0].examples[0]}"</p>
    <p>Synonym(s): {props.wordInfo.results[0].synonyms[0]}</p> */}
                
            </div>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        wordInfo: state.wordInfo
    }
};
export default connect(mapStateToProps)(WordCard);