import React from "react";
import Header from "../Header/header";
import Footer from "../Footer/footer";
import './projects.sass';
import { Link } from "react-router-dom";


const Projects = () => {



    const foodUrl = "https://i1.wp.com/www.techjaja.com/wp-content/uploads/2018/01/Food-Delivery.jpeg?fit=1200%2C760&ssl=1";
    return <div>

        <div className="projects">

            <div className="header-inner">
                <Header />
            </div>

            <div>

                <h1 className="main-title text-center">List of Projects </h1>

                <div className="projects-wrapper">



                    <div className="project-unit">
                        <div className="avatar" style={{
                            backgroundImage: "url(./images/food-delivery.png)",
                            backgroundSize: "cover",
                            backgroundPosition: "center"
                        }}></div>
                        <h2 className="name">Food Delivery System</h2>
                        <a href="https://sheltered-retreat-60921.herokuapp.com/" target="_blank" className="cta"> View Demo </a>
                    </div>



                </div>


            </div>

        </div>
        {/* end of projects */}

        <Footer />
    </div>
}

export default Projects;