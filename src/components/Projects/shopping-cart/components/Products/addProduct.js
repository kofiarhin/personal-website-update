import React, { Component } from "react";
import { Typography } from "antd";
import Header from "../Header/header";
import AddProductForm from "./addProductForm";
const { Title } = Typography;

class AddProduct extends Component {

    render() {

        return <div>

            <Header />

            <div className="container">
                <Title className="main-title text-center">Add Product</Title>
                <AddProductForm />
            </div>
        </div>
    }
}

export default AddProduct;