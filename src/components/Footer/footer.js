import React from 'react';
import FontAwesome from "react-fontawesome";
import "./footer.sass"

const Footer = () => {

    const genYear = () => {

        const date = new Date();
        const year = date.getFullYear();

        return year;
    }


    return <div className="footer">

        <div className="container">
            <p>Copyright <FontAwesome name="fa-copyright" /> {genYear()} Kofi Arhin | All Rights Reserved</p>
        </div>
    </div>
}

export default Footer;