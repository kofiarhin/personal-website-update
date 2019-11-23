import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./header.sass"
import FontAwesome from "react-fontawesome";
import Nav from "./sidenav/sidenav";

class Header extends Component {


    state = {

        showNav: false
    }

    onHideNav = () => {

        this.setState({
            showNav: false
        })
    }

    renderHeader = () => {

        return <header className="main-header">

            <Nav showNav={this.state.showNav} onHideNav={() => this.onHideNav()} />

            <div className="container">

                <Link to="/" className="logo"> <h1>KF</h1></Link>

                <FontAwesome name="bars" className="menu" onClick={() => this.setState({
                    showNav: true
                })} />

                <nav>

                    <Link to="/"> Home </Link>
                    <Link to="/about"> About Me </Link>
                    <Link to="/projects"> Projects </Link>
                    <Link to="/training"> Training </Link>
                    <Link to="/contact"> Contact </Link>
                    {/* <Link to="/mentorship"> Mentorship </Link> */}

                </nav>
            </div>
        </header>
    }

    render() {

        return <div> {this.renderHeader()} </div>

    }
}

export default Header;