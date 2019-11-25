import React, { Component } from "react";
import _ from "lodash";
import AdminDashboard from "./adminDashboard";
import Header from "../../Header/header";
import "./dashboard.sass";

class Dashboard extends Component {

    state = {

        userData: []
    }

    componentDidMount() {

        const userData = JSON.parse(sessionStorage.getItem("userData"));

        if (!_.isEmpty(userData)) {


            this.setState({

                userData
            })
        }


    }

    renderDashboard = (userData) => {


        if (!_.isEmpty(userData)) {

            const role = userData.role;

            console.log(role);

            switch (role) {

                case "admin":
                    return <AdminDashboard userData={userData} />
                    break;
                default:
                    return null;
            }
        }

    }
    render() {

        return <div>

            <Header />
            {this.renderDashboard(this.state.userData)}

        </div>
    }
}

export default Dashboard;