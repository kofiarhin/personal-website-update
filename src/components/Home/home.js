import React from "react";
import FontAwesome from "react-fontawesome";
import Header from "../Header/header";
import "./home.sass"
import AOS from "aos";

AOS.init()


const Home = () => {

    return <div className="home-wrapper">

        <Header />


        <div className="content-wrapper">

            <h1 className="main-title" data-aos="fade-left">Kofi Arhin</h1>
            <h2 className="slug" data-aos="">Fullstack Developer And UI Designer</h2>
            <div className="icon-wrapper">
                <a href="https://www.linkedin.com/in/kenneth-obu-9b49b72b/" target="_blank"><FontAwesome name="linkedin" /></a>
                <a href="https://www.instagram.com/escodebar/" target="_blank"><FontAwesome name="instagram" /></a>
                <a href="https://github.com/kofiarhin" target="_blank"><FontAwesome name="github" /></a>
                <a href="https://dribbble.com/esco69" target="_blank" ><FontAwesome name="dribbble" /></a>
                <a href="https://www.behance.net/kofiarhin" target="_blank"><FontAwesome name="behance" /></a>
                <a href="https://codepen.io/esco69" target="_blank"><FontAwesome name="codepen" /></a>
                <a href="https://www.youtube.com/channel/UCKHAmydXRabltNm9hSoFzbA?view_as=subscriber" target="_blank"><FontAwesome name="youtube" /></a>
            </div>
        </div>

    </div>
}

export default Home;