import React, { useState } from "react";
import LikeImg from "../like_PNG48.png";
import {connect} from "react-redux";
import {setCount} from "../actions/actions";

function Header(props) {
    
return(
    <header className="App-header">
        <h1>React-Redux Dictionary App</h1>
        

    </header>
)
};
const mapStateToProps = (state) => {
    return {
        count: state.count
    }
}
export default connect(mapStateToProps, {setCount})(Header);
