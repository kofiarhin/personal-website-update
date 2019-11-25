import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home/home";
import Layout from "./components/hoc/layout";
import Apps from "./components/Apps/app";
import About from "./components/About/about";
import Contact from "./components/Contact/contact";
import Training from "./components/Training/training";
import Chat from "./components/chat/chat";
import Chatroom from "./components/chat/chatroom";
import Projects from "./components/Projects/projects";
import FoodDelivery from "./components/Projects/food-delivery";
import ShoppingCart from "./components/Projects/shopping-cart";
import CartLogin from "./components/Projects/shopping-cart/components/Login";
import CartRegister from "./components/Projects/shopping-cart/components/Register";
import Search from "./components/Projects/shopping-cart/components/Search/search";
import Dashboard from "./components/Projects/shopping-cart/components/User/Dashboard/dashboard";
import AddProduct from "./components/Projects/shopping-cart/components/Products/addProduct";


const Routes = () => {

    return <div>

        <Layout>

            <Switch>
                <Route path="/training" exact component={Training} />
                <Route path="/contact" exact component={Contact} />
                <Route path="/about" exact component={About} />
                <Route path="/apps" exact component={Apps} />
                <Route path="/chat" exact component={Chat} />
                <Route path="/projects/food-delivery" exact component={FoodDelivery} />
                <Route path="/projects/shopping-cart" exact component={ShoppingCart} />
                <Route path="/projects/shoppingCart/user/dashboard" exact component={Dashboard} />
                <Route path="/projects/shopping-cart/search/" exact component={Search} />
                <Route path="/projects/shopping-cart/login" exact component={CartLogin} />
                <Route path="/projects/shopping-cart/register" exact component={CartRegister} />
                <Route path="/projects/shoppingCart/products/add" exact component={AddProduct} />
                <Route path="/projects" exact component={Projects} />
                <Route path="/" exact component={Home} />
            </Switch>
        </Layout>


    </div>
}

export default Routes;