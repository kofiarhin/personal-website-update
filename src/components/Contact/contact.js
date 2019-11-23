import React, { Component } from "react";
import Header from '../Header/header';
import Footer from "../Footer/footer";
import { firebase } from "../../firebase";

import "./contact.sass"

class Contact extends Component {

    state = {

        messageSuccess: false,
        formData: {

            name: {

                value: "",
                valid: true
            },

            email: {

                value: "",
                valid: true
            },

            message: {
                value: "",
                valid: true
            }
        }
    }

    handleChange = ({ event, id, blur }) => {

        const formData = this.state.formData;

        const field = formData[id];

        field.value = event.target.value;
        formData[id] = field;


        if (blur) {

            //do some validation work
            const value = field.value;

            if (!value) {

                field.valid = false
            } else {

                field.valid = true
            }
        }

        this.setState({
            formData
        })

    }


    renderError = (id) => {


        const formData = this.state.formData;
        const field = formData[id];
        if (!field.valid) {
            return <p> Field Cannot be empty </p>
        }



    }


    handleSubmit = (event) => {

        event.preventDefault();

        const formData = this.state.formData;

        let errors = [];
        let dataToSubmit = {}
        for (let key in formData) {
            //do some valdation wokks
            dataToSubmit[key] = formData[key].value
            if (formData[key].value === "") {

                formData[key].valid = false


                errors.push(`${key} cannot be empty`)
                this.setState({
                    formData
                })
            }
        }

        if (!errors.length) {

            console.log(dataToSubmit);
            firebase.database().ref("messages").push(dataToSubmit).then(() => {


                this.setState({
                    messageSuccess: true
                })

                setTimeout(() => {

                    for (let key in formData) {

                        formData[key].value = "";
                        formData[key].valid = true
                    }

                    this.setState({
                        messageSuccess: false,
                        formData
                    })
                }, 2000)

            })


        }

    }

    renderClassName = (id) => {

        const formData = this.state.formData;

        const field = formData[id];

        return field.value === "" ? `${id} cannot be empty` : null;
    }


    renderFeedBack = () => {


        return this.state.messageSuccess ? <div className="feedback">

            <div className="content">
                <h2>  Message Sent </h2>
            </div>

        </div> : null;
    }
    render() {

        return <div>

            <div className="contact">

                <div className="header-inner">
                    <Header />
                </div>

                <div className="container">


                    {this.renderFeedBack()}

                    <div className="form-wrapper form-center">

                        <form onSubmit={(event) => this.handleSubmit(event)}>

                            <h1 className="main-title"> Send Me  A Message </h1>
                            <div className="form-element">
                                <input type="text" placeholder="Enter Name" onChange={(event => this.handleChange({ event, id: "name" }))} value={this.state.formData.name.value} onBlur={event => this.handleChange({ event, id: "name", blur: true })} />
                                <p className="error">  {this.renderError("name")} </p>
                            </div>


                            <div className="form-element">
                                <input type="text" placeholder="Enter Email Address" onChange={(event) => this.handleChange({ event, id: "email" })} value={this.state.formData.email.value} onBlur={(event) => this.handleChange({ event, id: 'email', blur: true })} className={this.renderClassName("email")} />
                                <p className="error">  {this.renderError("email")}</p>
                            </div>

                            <div className="form-element">
                                <textarea placeholder="Enter Message Here" value={this.state.formData.message.value} onChange={(event) => this.handleChange({ event, id: "message" })} onBlur={(event) => this.handleChange({ event, id: "message", blur: true })} />

                                <p className="error">  {this.renderError("message")}</p>
                            </div>

                            <button type="submit">Send Message</button>
                        </form>


                    </div>
                </div>


            </div>

            <Footer />


        </div>

    }


}

export default Contact;