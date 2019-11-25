import React from "react";
import { Link } from "react-router-dom";

const AdminDash = ({ userData }) => {


    return <div>

        <div className="container">

            <h1 style={{
                textTransform: "capitalize"
            }}> Welcome: {userData.name}  </h1>

            <div className="dash-wrapper">

                <Link to="/projects/shoppingCart/products/add" className="dash-unit">
                    <i className="fa fa-user"></i>
                    <p className="desc"> Add User </p>
                </Link>

            </div>

        </div>

    </div>

}

export default AdminDash;