import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Layout } from "antd";
import "./header.sass"

const { Header } = Layout;

class MainHeader extends Component {


    showSideNav = () => {

        console.log("show side nav")
    }


    renderSideNav = () => {

        return <div className="sideNav"> Side Nav</div>

    }

    render() {

        return <div>

            <Header className="shop-header">

                <Link to="/projects/shopping-cart"> <h1 className="logo"> Esco Shop </h1></Link>
                <Link><i className="fa fa-bars menu" onClick={() => this.showSideNav()}> </i></Link>
                <nav className="links">
                    <Link to="/projects/shopping-cart"> Home</Link>
                    <Link to="/projects/shopping-cart/login"> Login </Link>
                    <Link to="/projects/shopping-cart/register"> Register</Link>
                    <Link> Contact</Link>
                </nav>
            </Header>

            ijgjgdsvf
            
        </div>
    }
}

export default MainHeader;