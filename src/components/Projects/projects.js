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
                            backgroundImage: `url("https://carlisletheacarlisletheatre.org/images/cart-clipart-icon-5.jpg")`
                        }}></div>

                        <h2 className="name">Shopping Cart</h2>
                        <Link to="/projects/shopping-cart" className="cta"> View Demo </Link>
                    </div>


                    <div className="project-unit">
                        <div className="avatar" style={{
                            backgroundImage: `url(${foodUrl})`,
                        }}></div>
                        <h2 className="name">Food Delivery System</h2>
                        <Link to="/projects/food-delivery" className="cta"> View Demo </Link>
                    </div>



                </div>


            </div>

        </div>
        {/* end of projects */}

        <Footer />
    </div>
}

export default Projects;