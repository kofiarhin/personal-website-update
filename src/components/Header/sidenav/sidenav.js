import React from "react";
import SideNav from "react-simple-sidenav";
import { Link } from "react-router-dom"
import "./sidenav.sass"

const Nav = (props) => {


    return <div>

        <SideNav

            showNav={props.showNav}
            onHideNav={props.onHideNav}

            navStyle={{
                backgroundImage: "linear-gradient(-40deg, #8530D9, #5433D5)"
            }}
        >

            <ul className="sidenav-items">
                <li> <Link to="/"> Home</Link></li>
                <li> <Link to="/about"> About Me</Link></li>
                <li> <Link to="/training"> Training</Link></li>
                <li> <Link to="/contact"> Contact</Link></li>
            </ul>

        </SideNav>


    </div>
}

export default Nav;