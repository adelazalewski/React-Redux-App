import React, { useState } from "react";
import LikeImg from "../like_PNG48.png";
import {connect} from "react-redux";
import {setCount} from "../actions/actions";

function Header(props) {
    
return(
    <header className="App-header">
        <h1>React-Redux Dictionary App</h1>
        <p> by Adela Zalewski</p>
//         <div className="likeButton-div">
//             <img onClick={() => props.setCount()} id="like-logo" alt="like-button" src={LikeImg} />
//             <p id="likes">This app was liked {props.count} time(s). </p>
//             <p id="thank-you">Thank you!</p>
//         </div>
    </header>
)
};
const mapStateToProps = (state) => {
    return {
        count: state.count
    }
}
export default connect(mapStateToProps, {setCount})(Header);
