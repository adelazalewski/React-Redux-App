import React from "react";
import {connect} from "react-redux";

function WordInfo() {
    return (
<div></div>
    )
};

const mapStateToProps = (state) => {
    return {
        examples: state.word[0].examples
    }
};

export default WordInfo;