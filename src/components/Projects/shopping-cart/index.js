import React, { Component } from "react";
import { Typography } from "antd";
import Header from "./components/Header/header";

const { Title } = Typography;

class ShoppingCart extends Component {

    render() {

        return <div>

            <Header />

            <Title className="text-center"> Shopping  Cart</Title>
        </div>
    }
}

export default ShoppingCart;