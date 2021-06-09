import React from "react";
import {connect} from  "react-redux";
import {getWordInfo} from "../actions/actions";
import image from "../funnylama.jpg";

function WordCard(props){
    console.log("state: ", props);
    
    return(
        <>
        {props.wordInfo.length < 1 ? (
            <>
        <img className="lama-picture" alt="make-a-search" src={image} />
        <h1 className="pumpkin">Make a search! <span>🎃</span></h1>
        </>) : (
             <div className="word-info-container">
             <h1>{props.wordInfo[0].word}</h1>
             <p>/{props.wordInfo[0].pronunciation}/</p>
             <p>{props.wordInfo[0].partOfSpeech}</p>
             <p>Definition: {props.wordInfo[0].definition}</p>
         {props.wordInfo.examples ? (
             <>
             <h4>Used in sentence(s):</h4>
             {props.wordInfo[0].examples.map(elem => {
            return <p key={elem}>{elem}</p>
            
         })}
         </>) : null}
         
         {props.wordInfo[0].synonyms ? ( 
             <>
         <h4>Synonyms:</h4>
         {props.wordInfo[0].synonyms.map(elem => {
             return <p key={elem}>{elem}</p>
         })}
         </>) : null}
             </div>
        )}
 
   </>
    )};

const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        wordInfo: state.wordInfo
    }
};
export default connect(mapStateToProps)(WordCard);