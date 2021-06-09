import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookSquare } from '@fortawesome/free-brands-svg-icons';

function Footer(){
    return (
        <footer>
            <p id="copyRight">&copy; React-Redux Dictionary App 2020</p>
                <div className="social">
                    <a href="https://www.instagram.com/adela_georgiana/"><FontAwesomeIcon icon={faInstagram}/></a>
                    <a href="https://www.facebook.com/adela.georgiana.986"><FontAwesomeIcon icon={faFacebookSquare} /></a>
                </div>
        </footer>
    )
};
export default Footer;