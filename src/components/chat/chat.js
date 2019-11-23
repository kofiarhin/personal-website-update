import React, { Component } from "react";
import Header from "../Header/header";
import "./chat.sass"

class Chat extends Component {


    state = {

        loggedIn: false
    }

    handleSubmit = (event) => {

        event.preventDefault();
        const username = event.target.username.value;

        if (username) {

            sessionStorage.setItem("username", username);

            this.props.history.push("/chatroom")
        }
    }

    render() {

        return <div className="chat">
            <div className="form-wrapper">
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <label> Select username </label>
                    <input type="text" id="username" placeholder="Enter Your Username" />

                </form>

            </div>
        </div>
    }
}

export default Chat;