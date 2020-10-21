import React, { useState } from "react";
import LikeImg from "../like_PNG48.png"
function Header() {
    const [count, setCount] = useState(0);
    const likeApp = () =>{
        return setCount(count +1);
    }
return(
    <header className="App-header">
        <h1>React-Redux Dictionary App</h1>
        <p> by Adela Zalewski</p>
        <div className="likeButton-div">
            <img onClick={likeApp} id="like-logo" alt="like-button" src={LikeImg} />
            <p id="likes">This app was liked {count} time(s). </p>
            <p id="thank-you">Thank you!</p>
        </div>
    </header>
)
};

export default Header;