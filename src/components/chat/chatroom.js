import React, { Component } from "react";
import { firebase, firebaseLooper } from "../../firebase";

class Chatroom extends Component {


    state = {

        username: null,
        messages: null,
        currCount: 0
    }

    componentDidMount() {

        const username = sessionStorage.getItem("username");

        if (username) {

            firebase.database().ref("chats").on("value", snapshot => {

                const currCount = this.state.currCount;
                const messages = firebaseLooper(snapshot);

                if (messages.length > currCount) {

                    console.log(messages);

                    this.setState({
                        messages,
                        currCount: messages.length
                    })
                }

            })
        }
    }


    handleSubmit = (event) => {

        event.preventDefault();

        const dataToSubmit = {
            username: sessionStorage.getItem("username"),
            message: event.target.message.value
        }

        firebase.database().ref('chats').push(dataToSubmit).then(() => {

            console.log("message sent")
        })
    }

    renderUsername = (message) => {

        const username = sessionStorage.getItem("username");

        if (username === message.username) {

            return <p> You </p>
        } else {

            return <p> {username} </p>
        }
    }

    renderMessages = () => {

        const messages = this.state.messages;

        return messages ? messages.map(message => {

            return <div className="message-unit">

                <p> {message.message} </p>
                <p> {message.username} </p>
            </div>
        }) : null;

    }
    render() {

        return <div className="chat">

            <div> {this.renderMessages()}</div>

            <div className="chat-wrapper">

                <div className="form-message-wrapper">

                    <form onSubmit={(event) => this.handleSubmit(event)}>
                        <input type="text" id="message" placeholder="type message" />
                    </form>
                </div>

            </div>
        </div>
    }
}

export default Chatroom;