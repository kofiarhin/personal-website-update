import React, { Component } from "react";
import { Typography } from "antd";
import Header from "./components/Header/header";
import Landing from "./components/Landing/landing";

const { Title } = Typography;

class ShoppingCart extends Component {

    render() {

        return <div>

            <Header />
            <Landing {...this.props} />
        </div>
    }
}

export default ShoppingCart;