import React from "react";
import Header from "../Header/header";
import Footer from "../Footer/footer";
import "./about.sass"
import { Link } from "react-router-dom"

const About = () => {

    return <div>

        <div className="header-inner">
            <Header />
        </div>

        <div className="about">

            <div className="container about-content">

                <h1 className="main-title"> About Me </h1>

                <div className="about-wrapper">

                    <div className="face-unit"></div>

                    <div className="content">


                        <p> Hi, I'm Kofi Arhin. I help people develop and create their own custom web applicataions, using state of the art programming languages like React/Lavarel. I taught myself to code in 2014 and have obsessed with helping others create their own custom web applications with zero programming background!</p>

                        <p>
                            Some might call me a full stack developer in that i work in everything from plain vanilla javascript to React Js, Node Js, MongoDB, Redux.....My true love is building new applications and application features that result in an awesome user interaction.</p>

                        <p> If I'm not working on a computer you can find me relieving stress at the gym, watching an NBA game or traveling the planet. </p>


                        <p>
                            Have an awesome project idea ? ..... Let's Talk!!
                    </p>

                        <Link to="/contact">Hire Me</Link>

                    </div>

                </div>


            </div>

        </div>

        <Footer />


    </div>
}

export default About;